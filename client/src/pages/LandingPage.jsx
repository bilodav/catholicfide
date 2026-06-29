import Hero from "../components/Hero";
import heroImg from "../assets/hero_1.jpg";

function LandingPage() {
  return (
    <>
      <Hero
        title="Catholic"
        titleAccent="Fide"
        subtitle="Defending the Faith and Defending the Truth"
        body="Standing firm in sacred tradition — for God, for Church, for truth."
        ctaText="Oremus"
        ctaHref="/oremus"
        bgImage={heroImg}
      />
    </>
  );
}

export default LandingPage;
