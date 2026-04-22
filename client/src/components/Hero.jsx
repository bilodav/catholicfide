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
    <section className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">
          {title} <span className="hero__accent">{titleAccent}</span>
        </h1>
        {subtitle && <p className="hero__subtitle">{subtitle}</p>}
        {body && <p className="hero__body">{body}</p>}
        {ctaText && (
          <a className="hero__cta" href={ctaHref || "#"}>
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}

export default Hero;
