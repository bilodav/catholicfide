import Hero from "../components/ui/Hero";
import styles from "./ContactPage.module.css";
import heroImg from "../assets/contactHero.jpg";
import missioImg from "../assets/contact-mission.jpeg";
import { useState } from "react";
import ContactForm from "../components/forms/ContactForm";
import Button from "../components/ui/Button";

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
      <div className={styles["contact-donation"]}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="rgb(1, 1, 1)"
            d="M496 64c13.2 0 20.7 15.1 12.8 25.6L480 128 480 304c0 79.5-64.5 144-144 144l-112 0-46.3 46.3c-10.4 10.4-26.5 12.4-39.1 4.8L41.5 440.9c-17-10.2-15-35.5 3.4-42.9L160 352C23.8 311.1 7.5 169.8 22 95.7 25.6 77.9 45.3 71.4 61.3 80.2L320 224 320 144c0-44.2 35.8-80 80-80l96 0zm-96 56a24 24 0 1 0 0 48 24 24 0 1 0 0-48zM182.5-9.6c12.4-13.7 33.3-8.9 42.5 7.1l56.4 98.3c-5.8 14.4-9.2 30.1-9.4 46.5L138.1 68c10.1-31.6 27-58.4 44.4-77.6z"
          />
        </svg>
        <div className={styles["contact-donation-info"]}>
          <span>Support Our Mission</span>
          <p>
            Make a <span>Donation</span>
          </p>
          <p>
            Your generoisty helps us share the Catholic Faith with more people
            around the world
          </p>
        </div>

        <Button text="Donate" />
      </div>
    </section>
  );
}

export default ContactPage;
