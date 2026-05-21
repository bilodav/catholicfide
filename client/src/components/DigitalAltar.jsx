import { useState } from "react";
import Rosary from "./Rosary";
import DefaultAltar from "./DefaultAltar";

function DigitalAltar() {
  const [altarState, setAltarState] = useState("default");

  let changedAltar;
  switch (altarState) {
    case "rosary":
      changedAltar = <Rosary />;
      break;
    default:
      changedAltar = <DefaultAltar />;
  }
  return (
    <section
      className="digital-altar"
      id="digitalAltar"
      value={altarState}
      onChange={(e) => setAltarState(e.target.value)}
    >
      <div className="digital-altar-selection-row">
        <select name="devotion" id="devion">
          <option value="default"> Digital Prayer Altar</option>
          <option value="prayers">Prayers</option>
          <option value="rosary">Rosary</option>
          <option value="novenas">Novenas</option>
          <option value="stations">Stations of the Crosss</option>
          <option value="reading">Reading of the Day</option>
        </select>
      </div>
      {changedAltar}
    </section>
  );
}

export default DigitalAltar;
