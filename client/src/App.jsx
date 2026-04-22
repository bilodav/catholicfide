import Hero from "./components/Hero";
import heroImg from "./assets/hero_1.jpg";
import Rosary from "./components/Rosary";

function App() {
  return (
    <>
      <Hero
        title="Catholic"
        titleAccent="Fide"
        subtitle="Defending the Faith and Defending the Truth"
        body="Standing firm in sacred tradition — for God, for Church, for truth."
        ctaText="Oremus"
        ctaHref="#rosary"
        bgImage={heroImg}
      />
      <Rosary />
    </>
  );
}

export default App;
