const express = require("express");
const crypto = require("crypto");
const router = express.Router();

const YOCO_WEBHOOK_SECRET = process.env.YOCO_WEBHOOK_SECRET; // whsec_...
const MAX_AGE_SECONDS = 3 * 60; // Yoco recommends a 3 minute replay window

function verifySignature(rawBody, headers) {
  const webhookId = headers["webhook-id"];
  const timestamp = headers["webhook-timestamp"];
  const signatureHeader = headers["webhook-signature"];

  if (!webhookId || !timestamp || !signatureHeader) {
    return { valid: false, reason: "Missing required headers" };
  }

  // Reject old/replayed events
  const ageSeconds = Math.abs(Date.now() / 1000 - Number(timestamp));
  if (ageSeconds > MAX_AGE_SECONDS) {
    return { valid: false, reason: "Timestamp outside allowed window" };
  }

  const secretBytes = Buffer.from(
    YOCO_WEBHOOK_SECRET.replace(/^whsec_/, ""),
    "base64",
  );

  const signedContent = `${webhookId}.${timestamp}.${rawBody}`;
  const expectedSignature = crypto
    .createHmac("sha256", secretBytes)
    .update(signedContent)
    .digest("base64");

  // webhook-signature can contain multiple space-delimited "v1,<sig>" entries
  const providedSignatures = signatureHeader
    .split(" ")
    .map((entry) => entry.split(",")[1])
    .filter(Boolean);

  const isValid = providedSignatures.some((sig) => {
    try {
      return crypto.timingSafeEqual(
        Buffer.from(sig, "base64"),
        Buffer.from(expectedSignature, "base64"),
      );
    } catch {
      return false; // length mismatch etc.
    }
  });

  return { valid: isValid, reason: isValid ? null : "Signature mismatch" };
}

// express.raw() so we get the exact bytes Yoco signed, not re-serialized JSON
router.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  (req, res) => {
    const rawBody = req.body.toString("utf8");
    const { valid, reason } = verifySignature(rawBody, req.headers);

    if (!valid) {
      console.warn("Rejected webhook:", reason);
      return res.status(401).json({ error: "Invalid signature" });
    }

    const event = JSON.parse(rawBody);

    // Acknowledge immediately — do slow work (DB writes, emails) after responding
    res.status(200).json({ received: true });

    if (event.type === "payment.succeeded") {
      const payment = event.payload;
      console.log(
        `Payment succeeded: ${payment.id}, amount: ${payment.amount} ${payment.currency}`,
      );
      // TODO: mark the matching order/session as paid in your database here.
      // Use payment.metadata (if you attach any when creating the checkout) to
      // match this event back to your own order/reference.
    } else if (
      event.type === "refund.succeeded" ||
      event.type === "refund.failed"
    ) {
      console.log(`Refund event: ${event.type} for ${event.payload?.id}`);
    }
  },
);

module.exports = router;
