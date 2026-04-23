import { useState } from "react";
import mysteries from "../assets/data/mysteries";
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

  const date = new Date();
  const fullDayName = days[date.getDay()];

  const mysterySet = mysteries.weeklySchedule.default[fullDayName];

  function handleNextBead() {
    setBead((b) => (b < 59 ? b + 1 : b));
  }

  return (
    <section id="rosary" className="rosary">
      <p>Rosary</p>
      <p>{mysteries.mysterySets[mysterySet].name}</p>
      <p> {mysteries.mysterySets[mysterySet].mysteries[0].title}</p>
      <p> {mysteries.mysterySets[mysterySet].mysteries[0].scripture}</p>

      <p>{bead}</p>
      <button className="btn-accent" onClick={handleNextBead}>
        Next Bead
      </button>
    </section>
  );
}

export default Rosary;
