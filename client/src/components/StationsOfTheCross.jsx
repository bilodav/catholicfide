import StationsActive from "./StationsActive";
import StationsStart from "./StationsStart";
import { useState } from "react";

function StationsOfTheCross() {
  const [isStarted, setisStarted] = useState(false);
  return (
    <section className="stations-of-the-cross">
      <button
        className="btn-accent"
        onClick={() => {
          setisStarted((s) => !s);
        }}
      >
        {isStarted ? "Reset" : "Start"}
      </button>
      <div className="stations-of-the-cross-container">
        {isStarted ? <StationsActive /> : <StationsStart />}
      </div>
    </section>
  );
}

export default StationsOfTheCross;
