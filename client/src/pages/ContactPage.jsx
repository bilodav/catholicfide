import Hero from "../components/ui/Hero";
import styles from "./ContactPage.module.css";
import heroImg from "../assets/contactHero.jpg";
import { useState } from "react";

function ContactPage() {
  const [status, setStatus] = useState(null); // "sending" | "success" | "error" | null
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "enquiry",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "enquiry", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
    }
  };

  return (
    <section className={styles["contact-page"]}>
      <div className={styles["contact-hero"]}></div>
      <Hero
        title="Get in Touch"
        subtitle="We are here to listen"
        body="whether you have a question,a suggestion, a concern, or want to supportour mission, we would love to hear from you "
        bgImage={heroImg}
        ctaText="Contact"
        ctaHref={"#contact-form"}
      />
      <div id="contact-form" className={styles["contact-form"]}>
        <div className={styles["form-panel"]}>
          <h2>Send Us a Message</h2>
          <h3>We would love to hear from you</h3>
          <p className={styles.formIntro}>
            Fill in the form below and we'll get back to you as soon as
            possible.
          </p>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Your name *</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Your email address *</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="subject">How can we help? *</label>
            <select
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={(event) => {
                handleChange(event);
              }}
              required
            >
              <option value="enquiry">General Enquiry</option>
              <option value="suggestion">Suggestion</option>
              <option value="complaint">Complaint or Report</option>
              <option value="church">Church Information</option>
              <option value="prayer">Prayer Resource</option>
              <option value="technical">Technical Support</option>
              <option value="other">Other</option>
            </select>

            <label htmlFor="message">Your message *</label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell us how we can help..."
              value={formData.message}
              onChange={handleChange}
              rows={6}
              required
            />

            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>

            <p className={styles.privacyNote}>
              Your information is handled with care.
            </p>
          </form>
        </div>
      </div>
      <div className={styles["contact-donation"]}>{status}</div>
    </section>
  );
}

export default ContactPage;
