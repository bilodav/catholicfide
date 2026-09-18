import Button from "../ui/Button";
import styles from "./ContactForm.module.css";
import { useState } from "react";

const DEFAULT_SUBJECT_OPTIONS = [
  { value: "enquiry", label: "General Enquiry" },
  { value: "suggestion", label: "Suggestion" },
  { value: "complaint", label: "Complaint or Report" },
  { value: "church", label: "Church Information" },
  { value: "prayer", label: "Prayer Resource" },
  { value: "technical", label: "Technical Support" },
  { value: "other", label: "Other" },
];

/**
 * Reusable contact form.
 *
 * Props:
 * - endpoint: API route to POST to (default "/api/send-mail")
 * - subjectOptions: array of { value, label } for the subject <select>
 * - defaultSubject: initial value for the subject field
 * - onSuccess / onError: optional callbacks fired after submit
 */

function ContactForm({
  endpoint = "/api/send-mail",
  subjectOptions = DEFAULT_SUBJECT_OPTIONS,
  defaultSubject = DEFAULT_SUBJECT_OPTIONS[0].value,
  onSuccess,
  onError,
}) {
  const [status, setStatus] = useState(null); // "sending" | "success" | "error" | null
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: defaultSubject,
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
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: defaultSubject,
          message: "",
        });
        onSuccess?.(result);
      } else {
        setStatus("error");
        onError?.(result);
      }
    } catch (err) {
      console.error("Contact form error:", err);
      setStatus("error");
      onError?.(err);
    }
  };

  return (
    <form className={styles["contact-form"]} onSubmit={handleSubmit}>
      <div className={styles["field-group"]}>
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
      </div>

      <div className={styles["field-group"]}>
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
      </div>

      <div className={styles["field-group"]}>
        <label htmlFor="subject">How can we help? *</label>
        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        >
          {subjectOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles["field-group"]}>
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
      </div>

      <Button
        type="submit"
        text={status === "sending" ? "Sending..." : "Send Message"}
        disabled={status === "sending"}
        className="btn-primary"
      />

      {status === "success" && (
        <p role="status">Thank you, your message has been sent!</p>
      )}
      {status === "error" && (
        <p role="alert">Something went wrong. Please try again.</p>
      )}

      <p className={styles["privacy"]}>
        Your information is handled with care.
      </p>
    </form>
  );
}

export default ContactForm;
