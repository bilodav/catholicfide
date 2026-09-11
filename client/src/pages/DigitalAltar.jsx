import { useState } from "react";
import Rosary from "../components/Rosary";
import DefaultAltar from "../components/DefaultAltar";
import Prayers from "../components/Prayers";
import StationsOfTheCross from "../components/oremus/StationsOfTheCross";
import StOfDay from "../components/StOfDay";
import ReadingOfTheDay from "../components/ReadingOfTheDay";
import Novenas from "../components/Novenas";

function DigitalAltar() {
  const [altarState, setAltarState] = useState("default");

  let changedAltar;
  switch (altarState) {
    case "rosary":
      changedAltar = <Rosary />;
      break;
    case "prayers":
      changedAltar = <Prayers />;
      break;
    case "stations":
      changedAltar = <StationsOfTheCross />;
      break;
    case "st-of-day":
      changedAltar = <StOfDay />;
      break;
    case "reading":
      changedAltar = <ReadingOfTheDay />;
      break;
    case "novenas":
      changedAltar = <Novenas />;
      break;
    default:
      changedAltar = <DefaultAltar />;
  }
  return (
    <section className="digital-altar" id="digitalAltar">
      <div className="digital-altar-selection-row">
        <select
          name="devotion"
          id="devotion"
          value={altarState}
          onChange={(e) => setAltarState(e.target.value)}
        >
          <option value="default"> Digital Prayer Altar</option>
          <option value="prayers">Prayers</option>
          <option value="rosary">Rosary</option>
          <option value="novenas">Novenas</option>
          <option value="st-of-day">St. of the Day</option>
          <option value="stations">Stations of the Cross</option>
          <option value="reading">Reading of the Day</option>
        </select>
      </div>
      {changedAltar}
    </section>
  );
}

export default DigitalAltar;
