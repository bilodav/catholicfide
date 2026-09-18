const express = require("express");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const transporter = require("./config/mail");

const app = express();

app.use(cors());
app.use(express.json());

// API routes
app.get("/api", (req, res) => {
  res.json({ message: "Store API is running 🚀" });
});

app.post("/api/send-mail", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !message) {
    return res
      .status(400)
      .json({ success: false, error: "Missing required fields" });
  }

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New Contact Form: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}`,
    });
    res.json({ success: true });
  } catch (err) {
    console.error("Mail send error:", err);
    res.status(500).json({ success: false, error: "Failed to send message" });
  }
});

// Serve Vite build
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/{*path}", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/dist", "index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
