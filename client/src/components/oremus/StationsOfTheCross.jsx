import StationsActive from "./StationsActive";
import StationsStart from "./StationsStart";
import { useState } from "react";
import Button from "../ui/Button";

function StationsOfTheCross() {
  const [isStarted, setisStarted] = useState(false);
  return (
    <section className="stations-of-the-cross">
      <Button
        className="btn-accent"
        onClick={() => {
          setisStarted((s) => !s);
        }}
        text={isStarted ? "Reset" : "Start"}
      />
      <div className="stations-of-the-cross-container">
        {isStarted ? <StationsActive /> : <StationsStart />}
      </div>
    </section>
  );
}

export default StationsOfTheCross;
