import Hero from "../components/ui/Hero";
import styles from "./ContactPage.module.css";
import heroImg from "../assets/contactHero.jpg";
import missioImg from "../assets/contact-mission.jpeg";
import { useState } from "react";
import ContactForm from "../components/forms/ContactForm";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import { useNavigate } from "react-router-dom";
import rosary from "../assets/rosaryInLight.jpeg";
import prayerHands from "../assets/prayerHands.jpeg";
import familyCross from "../assets/familyCross.jpeg";
import SnapScanDonation from "../components/payments/SnapScanDonation";
import Accordion from "../components/ui/Accordion";
import YocoTestForm from "../components/payments/YocoTestForm";

const faqs = [
  {
    title: "What is Catholic Fide?",
    content:
      "Catholic Fide is a digital resource for Catholics and anyone seeking to learn more about the Catholic faith. It brings together prayers, theological resources, church information, and helpful tools for growing in faith.",
  },
  {
    title: "Can I suggest a prayer or theological topic?",
    content:
      "Absolutely. We welcome suggestions for prayers, devotions, theological subjects, and other resources that you would like to see added to Catholic Fide.",
  },
  {
    title: "I found incorrect information. How can I report it?",
    content:
      "If you notice an error in a prayer, theological text, church listing, Mass time, or other information, please let us know through the contact form. Select “Complaint or Report” and provide as much detail as possible so we can review it.",
  },
  {
    title: "Can I suggest a church or update church information?",
    content:
      "Yes. If a church is missing or its details have changed, you can contact us with the relevant information. This helps us keep the Catholic Fide church directory as accurate and useful as possible.",
  },
  {
    title: "How can I support Catholic Fide?",
    content:
      "You can support Catholic Fide through a donation. Your generosity helps us maintain the platform, develop new resources, and make Catholic content more accessible.",
  },
  {
    title: "How can I report a technical problem?",
    content:
      "If something isn't working correctly, please use the contact form and select “Technical Support.” Include a description of the problem and, where possible, the page or feature where you experienced it.",
  },
  {
    title: "How long will it take to receive a response?",
    content:
      "We aim to respond to enquiries as soon as reasonably possible. Response times may vary depending on the nature of your enquiry and the information required to address it.",
  },
];

function ContactPage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const onClose = () => setIsOpen(false);

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
    <section className={styles["contact-page"]}>
      <div className={styles["contact-hero"]}></div>
      <Hero
        title="Get in Touch"
        subtitle="We are here to listen"
        body="whether you have a question,a suggestion, a concern, or want to supportour mission, we would love to hear from you "
        bgImage={heroImg}
        ctaText="Contact"
        ctaHref={"#contact"}
      />
      <div className={styles["contact-form-nav"]}>
        <a href="#contact" className={styles["contact-form-card"]}>
          <h4>Contact</h4>
          <img src={familyCross} alt="" />
        </a>
        <a href="#donate" className={styles["contact-form-card"]}>
          <h4>Donate</h4>

          <img src={prayerHands} alt="" />
        </a>
        <a href="#faq" className={styles["contact-form-card"]}>
          <h4>FAQ</h4>
          <img src={rosary} alt="" />
        </a>
      </div>

      <div id="contact" className={styles["contact-form-container"]}>
        <div className={styles["form-panel"]}>
          <h2>Send Us a Message</h2>
          <h3>We would love to hear from you</h3>
          <p className={styles.formIntro}>
            Fill in the form below and we'll get back to you as soon as
            possible.
          </p>
          <ContactForm />
        </div>
        <div className={styles["mission-panel"]}>
          <img src={missioImg} alt="Praying with a rosary" />
        </div>
      </div>
      <div className={styles["contact-donation"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="rgb(1, 1, 1)"
            d="M496 64c13.2 0 20.7 15.1 12.8 25.6L480 128 480 304c0 79.5-64.5 144-144 144l-112 0-46.3 46.3c-10.4 10.4-26.5 12.4-39.1 4.8L41.5 440.9c-17-10.2-15-35.5 3.4-42.9L160 352C23.8 311.1 7.5 169.8 22 95.7 25.6 77.9 45.3 71.4 61.3 80.2L320 224 320 144c0-44.2 35.8-80 80-80l96 0zm-96 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM182.5-9.6c12.4-13.7 33.3-8.9 42.5 7.1l56.4 98.3c-5.8 14.4-9.2 30.1-9.4 46.5L138.1 68c10.1-31.6 27-58.4 44.4-77.6z"
          />
        </svg>
        <div id="donate" className={styles["contact-donation-info"]}>
          <span className={styles["decorative-line"]}></span>
          <span className={styles["span-text"]}>Support Our Mission</span>
          <span className={styles["decorative-line"]}></span>
          <p>Make a Donation</p>
          <p>
            Your generoisty helps us share the Catholic Faith with more people
            around the world
          </p>
        </div>

        <Button
          className="btn-primary"
          text="Donate"
          onClick={() => setIsOpen(true)}
        />
        <Modal isOpen={isOpen} onClose={onClose}>
          <SnapScanDonation />
        </Modal>
      </div>

      <div id="faq" className={styles["contact-faq"]}>
        <h3>Frequently Asked Questions</h3>

        <Accordion content={faqs} />
      </div>

      <YocoTestForm />
    </section>
  );
}

export default ContactPage;
