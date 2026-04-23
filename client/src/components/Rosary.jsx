import { useState } from "react";
import mysteries from "../assets/data/mysteries";
import FamilyPrayer from "./FamilyPrayer";

const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

function Rosary() {
  const [bead, setBead] = useState(1);
  const [isStarted, setisStarted] = useState(false);

  const date = new Date();
  const fullDayName = days[date.getDay()];

  const mysterySet = mysteries.weeklySchedule.default[fullDayName];

  function handleNextBead() {
    setBead((b) => (b < 59 ? b + 1 : b));
  }

  function handlePrevBead() {
    setBead((b) => (b > 1 ? b - 1 : b));
  }

  return (
    <section id="rosary" className="rosary">
      <h2>Rosary</h2>
      <button
        className="btn-accent"
        onClick={() => {
          setisStarted((s) => !s);
        }}
      >
        {isStarted ? "Reset" : "Start"}
      </button>
      <div className="rosary-container">
        {isStarted || <FamilyPrayer />}
        {isStarted || (
          <RosaryCard
            mysteryGroup={mysteries.mysterySets[mysterySet].name}
            date={date.toDateString()}
          />
        )}
      </div>

      <div>
        <p>{mysteries.mysterySets[mysterySet].name}</p>
        <p> {mysteries.mysterySets[mysterySet].mysteries[0].title}</p>
        <p> {mysteries.mysterySets[mysterySet].mysteries[0].scripture}</p>
      </div>

      {/* <p>{bead}</p>
      <button className="btn-accent" onClick={handlePrevBead}>
        Prev. Bead
      </button>
      <button className="btn-accent" onClick={handleNextBead}>
        Next Bead
      </button> */}
    </section>
  );
}

function RosaryCard(props) {
  return (
    <div className="rosary-card">
      <h3>{props.mysteryGroup}</h3>
      <p>{props.date}</p>
    </div>
  );
}

export default Rosary;
