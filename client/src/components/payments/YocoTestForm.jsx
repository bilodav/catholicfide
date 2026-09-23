import { useState } from "react";

export default function YocoTestForm({ endpoint = "/api/checkout" }) {
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount }),
      });

      const data = await response.json();

      if (data.success && data.redirectUrl) {
        window.location.href = data.redirectUrl; // send them to Yoco's hosted page
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Could not start payment");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="amount">Amount (ZAR)</label>
      <input
        id="amount"
        type="number"
        min="2"
        step="0.01"
        placeholder="0.00"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Redirecting…" : "Pay"}
      </button>

      {status === "error" && <p style={{ color: "red" }}>{errorMsg}</p>}
    </form>
  );
}
