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
  const date = new Date();
  const fullDayName = days[date.getDay()];

  const mysterySet = mysteries.weeklySchedule.default[fullDayName];

  console.log(mysteries.mysterySets[mysterySet].mysteries[0].title);

  return (
    <section id="rosary" className="rosary">
      <p>Rosary</p>
      <p>{mysteries.mysterySets[mysterySet].name}</p>
      <p> {mysteries.mysterySets[mysterySet].mysteries[0].title}</p>
      <p> {mysteries.mysterySets[mysterySet].mysteries[0].scripture}</p>

      <button className="btn-accent">Next mystery</button>
    </section>
  );
}

export default Rosary;
