import starterImg from "../assets/stationsOfTheCrossImages/starterStations.jpeg";
import { useState } from "react";

function StationsOfTheCross() {
  const [isStarted, setisStarted] = useState(false);
  return (
    <section className="stations-of-the-cross">
      <button
        className="btn-accent"
        onClick={() => {
          setisStarted((s) => !s);
        }}
      >
        {isStarted ? "Reset" : "Start"}
      </button>
      <div className="stations-of-the-cross-container">
        <div className="how-to">
          <h2>How Do I Pray the Stations of the Cross?</h2>
          <p>
            The Stations of the Cross is a powerful and simple way to reflect on
            the final moments of Jesus’ life. If you are ready to draw wisdom
            and inspiration from this rich prayer, there are a few options
            available to you.
          </p>
          <p>
            <b>Pray the Stations of the Cross with a group:</b> Most Catholic
            churches pray the Stations of the Cross on Fridays during Lent. We
            encourage you to attend Stations of the Cross at your local parish.
            More than likely, your parish will have a depiction of each Station
            either inside or outside of the Church to help facilitate deeper
            reflection.
          </p>
          <p>
            <b>Pray the Stations of the Cross individually:</b> If you can’t
            attend a Stations of the Cross service at your church, you can
            always pray them on your own. You can visit a church in your own
            time or even reflect from your own home.
          </p>
          <p>For each station, follow the following steps:</p>
          <ol>
            <li>
              <b>Name the Station:</b> The First Station is Jesus is Condemned
              to Death
            </li>
            <li>
              <b>Read the opening prayer:</b> We adore you, O Christ, and we
              praise you.
              <br />
              (Kneel) Because by your holy cross you have redeemed the world.
              <br />
              (Rise) If you are unable to kneel, you can sit or stand.
            </li>
            <li>
              <b>Read the selected Scripture</b> passage for inspiration.
            </li>
            <li>
              <b>Reflect</b> and consider what this Station of the Cross means
              for your life.
            </li>
            <li>
              <b>End by praying </b>the Our Father, Hail Mary, and Glory Be.
            </li>
          </ol>
          <p>
            Repeat this process for all fourteen stations and you’ll be amazed
            at how the story of Jesus’ Passion impacts your day!
          </p>
        </div>
        <img src={starterImg} alt="Placeholder image" />
      </div>
    </section>
  );
}

export default StationsOfTheCross;
