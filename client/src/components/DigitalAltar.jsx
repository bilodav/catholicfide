import { useState } from "react";
import Rosary from "./Rosary";
import DefaultAltar from "./DefaultAltar";
import Prayers from "./Prayers";
import StationsOfTheCross from "./StationsOfTheCross";

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
          <option value="stations">Stations of the Cross</option>
          <option value="reading">Reading of the Day</option>
        </select>
      </div>
      {changedAltar}
    </section>
  );
}

export default DigitalAltar;
