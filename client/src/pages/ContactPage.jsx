import Hero from "../components/ui/Hero";
import styles from "./ContactPage.module.css";
import heroImg from "../assets/contactHero.jpg";
import missioImg from "../assets/contact-mission.jpeg";
import { useState } from "react";
import ContactForm from "../components/forms/ContactForm";

function ContactPage() {
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
      <div className={styles["contact-donation"]}>{status}</div>
    </section>
  );
}

export default ContactPage;
