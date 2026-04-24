import { useState } from "react";
import mysteries from "../assets/data/mysteries";
import FamilyPrayer from "./FamilyPrayer";
import altar from "../assets/altar.png";
import altar2 from "../assets/altar2.png";

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

  let mysteryNum = 1;
  let rosaryTitle = "";

  if (bead <= 7) {
    rosaryTitle = "Introductory Prayers";
  } else if (bead > 7 && bead <= 25) {
    rosaryTitle = "1st Decade";
  } else if (bead > 25 && bead <= 35) {
    rosaryTitle = "2nd Decade";
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
        {isStarted ? (
          <RosaryCard
            mysteryGroup={mysteries.mysterySets[mysterySet].mysteries[0].title}
            scripture={mysteries.mysterySets[mysterySet].mysteries[0].scripture}
          />
        ) : (
          <RosaryCard
            mysteryGroup={mysteries.mysterySets[mysterySet].name}
            date={date.toDateString()}
          />
        )}
        {isStarted ? (
          <RosaryCard mysteryGroup={mysteries.mysterySets[mysterySet].name} />
        ) : (
          <img
            style={{
              width: "55%",
              zIndex: "-2",
              borderRadius: "30px",
              boxShadow: "-5px 5px 2px 1px rgba(152, 152, 152, 0.3)",
            }}
            src={altar2}
          />
        )}
        {isStarted ? (
          <RosaryCard
            cardTitle={rosaryTitle}
            onHandlePrev={handlePrevBead}
            onHandleNext={handleNextBead}
            beads={true}
          />
        ) : (
          <FamilyPrayer />
        )}
      </div>

      {/* <div>
        <p>{mysteries.mysterySets[mysterySet].name}</p>
        <p> {mysteries.mysterySets[mysterySet].mysteries[0].title}</p>
        <p> {mysteries.mysterySets[mysterySet].mysteries[0].scripture}</p>
      </div> */}

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
      <h3>{props.cardTitle}</h3>
      <p>{props.mystery}</p>
      <p> {props.verse}</p>
      <img src={props.image} />
      <p> {props.scripture}</p>
      <p>{props.date}</p>

      {props.beads ? (
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "space-around",
            marginTop: "auto",
          }}
        >
          <button
            className="btn-outline"
            style={{
              display: "inline-block",
              padding: "5px 15px",
              fontSize: "20px",
            }}
            onClick={() => props.onHandlePrev()}
          >
            &#10094;
          </button>
          <button
            className="btn-outline"
            style={{
              display: "inline-block",
              padding: "5px 15px",
              fontSize: "20px",
            }}
            onClick={() => props.onHandleNext()}
          >
            &#10095;
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Rosary;
