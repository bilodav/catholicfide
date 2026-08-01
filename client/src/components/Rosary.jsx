import { useState } from "react";
import mysteries from "../assets/data/mysteries";
import FamilyPrayer from "./FamilyPrayer";
import rosaryPrayers from "../assets/data/rosaryPrayers";
import startEnder1 from "../assets/rosaryStarterEnderImages/startEnder1.jpeg";
import startEnder2 from "../assets/rosaryStarterEnderImages/startEnder2.jpeg";
import RosaryCard from "./RosaryCard";

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
    setBead((b) => (b < 85 ? b + 1 : b));
  }

  function handlePrevBead() {
    setBead((b) => (b > 1 ? b - 1 : b));
  }

  let mysteryNum;
  let rosaryTitle = "";
  let mysteryImage;
  let starterImage = mysteries.mysterySets[mysterySet].startImg;
  let enderImage = mysteries.mysterySets[mysterySet].endImg;

  if (bead <= 7) {
    rosaryTitle = "Introductory Prayers";
    mysteryImage = starterImage;
  } else if (bead > 7 && bead <= 21) {
    rosaryTitle = "1st Decade";
    mysteryNum = 0;
    mysteryImage = mysteries.mysterySets[mysterySet].mysteries[0].image;
  } else if (bead > 21 && bead <= 35) {
    rosaryTitle = "2nd Decade";
    mysteryNum = 1;
    mysteryImage = mysteries.mysterySets[mysterySet].mysteries[1].image;
  } else if (bead > 35 && bead <= 49) {
    rosaryTitle = "3rd Decade";
    mysteryNum = 2;
    mysteryImage = mysteries.mysterySets[mysterySet].mysteries[2].image;
  } else if (bead > 49 && bead <= 63) {
    rosaryTitle = "4th Decade";
    mysteryNum = 3;
    mysteryImage = mysteries.mysterySets[mysterySet].mysteries[3].image;
  } else if (bead > 63 && bead <= 77) {
    rosaryTitle = "5th Decade";
    mysteryNum = 4;
    mysteryImage = mysteries.mysterySets[mysterySet].mysteries[4].image;
  } else if (bead > 77 && bead <= 151) {
    rosaryTitle = "Closing Prayers";
    mysteryImage = enderImage;
  }

  console.log(bead);

  console.log(mysteries.mysterySets[mysterySet].name);

  return (
    <section id="rosary" className="rosary">
      <h2>Rosary</h2>
      <button
        className="btn-accent"
        onClick={() => {
          if (isStarted === false) {
            setBead(1);
            mysteryNum = 0;
            rosaryTitle = "";
          }
          setisStarted((s) => !s);
        }}
      >
        {isStarted ? "Reset" : "Start"}
      </button>
      <div className="rosary-container">
        {isStarted ? (
          <RosaryCard
            mysteryGroup={
              mysteryNum !== undefined
                ? mysteries.mysterySets[mysterySet].mysteries[mysteryNum].title
                : null
            }
            image={mysteryImage}
            cardTitle={mysteries.mysterySets[mysterySet].name}
            verse={
              mysteryNum !== undefined
                ? mysteries.mysterySets[mysterySet].mysteries[mysteryNum]
                    .scripture
                : null
            }
            scripture={
              mysteryNum !== undefined
                ? mysteries.mysterySets[mysterySet].mysteries[mysteryNum].fruit
                : null
            }
          />
        ) : (
          <RosaryCard image={starterImage} />
        )}
        {isStarted ? (
          <RosaryCard
            mysteryGroup={rosaryPrayers[bead - 1].title}
            scripture={
              rosaryPrayers[bead - 1].prayer ||
              mysteries.mysterySets[mysterySet].mysteries[mysteryNum].verse
            }
          />
        ) : (
          <RosaryCard
            mysteryGroup={mysteries.mysterySets[mysterySet].name}
            date={date.toDateString()}
          />
        )}
        {isStarted ? (
          <RosaryCard
            cardTitle={rosaryTitle}
            image={rosaryPrayers[bead - 1].bead}
            imgClass={"rosary-img"}
            verse={rosaryPrayers[bead - 1].title}
            onHandlePrev={handlePrevBead}
            onHandleNext={handleNextBead}
            beads={true}
          />
        ) : (
          <RosaryCard image={enderImage} />
        )}
      </div>
    </section>
  );
}

export default Rosary;
