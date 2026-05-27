import { useState } from "react";
import stationOfCrossDataApi from "../assets/data/db_stations_of_cross";

function StationsActive() {
  const [stationNumber, setStationNumber] = useState(0);

  function handlePrev() {
    setStationNumber((prev) => (prev > 0 ? prev - 1 : prev));
  }

  function handleNext() {
    setStationNumber((prev) =>
      prev < stationOfCrossDataApi.length - 1 ? prev + 1 : prev,
    );
  }

  return (
    <>
      <div className="stations-card">
        <h2>{stationOfCrossDataApi[stationNumber].title}</h2>
        <p>{stationOfCrossDataApi[stationNumber].v}</p>
        <p>
          <b className="bold-500">(kneel)</b>
          {stationOfCrossDataApi[stationNumber].r}{" "}
          <b className="bold-500">(rise)</b>
        </p>
        <h3>Meditation</h3>
        <p>{stationOfCrossDataApi[stationNumber].meditation}</p>
        <h3>Prayer</h3>
        <p>{stationOfCrossDataApi[stationNumber].prayer}</p>
      </div>
      <div className="stations-card">
        <img src={stationOfCrossDataApi[stationNumber].image} alt="" />
      </div>
      <div className="stations-card">
        <h3>Scripture</h3>
        <p>
          <b className="bold-500">
            {stationOfCrossDataApi[stationNumber].scripture}
          </b>
        </p>
        <p>{stationOfCrossDataApi[stationNumber].reading}</p>
      </div>
      <div className="stations-buttons">
        <button className="btn-outline" onClick={handlePrev}>
          Prev
        </button>
        <b className="bold-600">Station {stationNumber + 1}</b>
        <button className="btn-outline" onClick={handleNext}>
          Next
        </button>
      </div>
    </>
  );
}

export default StationsActive;
