import styles from "./Hero.module.css";
function Hero({
  title,
  titleAccent,
  subtitle,
  body,
  ctaText,
  ctaHref,
  bgImage,
}) {
  return (
    <section
      className={styles["hero"]}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className={styles["hero_overlay"]} />
      <div className={styles["hero_content"]}>
        <h1 className={styles["hero_title"]}>
          {title} <span className={styles["hero_accent"]}>{titleAccent}</span>
        </h1>
        {subtitle && <p className={styles["hero_subtitle"]}>{subtitle}</p>}
        {body && <p className={styles["hero_body"]}>{body}</p>}
        {ctaText && (
          <a className={styles["hero_cta"]} href={ctaHref || "#"}>
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}

export default Hero;
