const express = require("express");
const router = express.Router();

const YOCO_SECRET_KEY = process.env.YOCO_SECRET_KEY; // sktest_... in dev
const YOCO_API_URL = "https://payments.yoco.com/api/checkouts";
const MIN_AMOUNT_CENTS = 200; // Yoco doesn't accept under R2.00

router.post("/checkout", async (req, res) => {
  const { amount } = req.body; // amount in Rands from the frontend, e.g. 24.99

  const amountInCents = Math.round(parseFloat(amount) * 100);

  if (!amountInCents || amountInCents < MIN_AMOUNT_CENTS) {
    return res
      .status(400)
      .json({ success: false, error: "Enter a valid amount (min R2.00)" });
  }

  try {
    const response = await fetch(YOCO_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${YOCO_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amountInCents,
        currency: "ZAR",
        successUrl: `${process.env.CLIENT_URL}/payment-success`,
        cancelUrl: `${process.env.CLIENT_URL}/payment-cancelled`,
        failureUrl: `${process.env.CLIENT_URL}/payment-failed`,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Yoco checkout error:", data);
      return res
        .status(500)
        .json({ success: false, error: "Could not start checkout" });
    }

    res.json({ success: true, redirectUrl: data.redirectUrl, id: data.id });
  } catch (err) {
    console.error("Yoco checkout error:", err);
    res.status(500).json({ success: false, error: "Failed to start checkout" });
  }
});

module.exports = router;
