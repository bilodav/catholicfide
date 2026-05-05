import familyPrayers from "../assets/data/familyprayers";
import greeting from "../assets/data/greetings";

function FamilyPrayer({ style }) {
  let randomGreeting = Math.floor(Math.random() * greeting.length);
  let randomPerson = Math.floor(Math.random() * familyPrayers.length);
  let randomPrayer = Math.floor(
    Math.random() * familyPrayers[randomPerson].prayers.length,
  );
  return (
    <div className="family-prayer" style={style}>
      <h3>
        {greeting[randomGreeting]}, {familyPrayers[randomPerson].name}
      </h3>
      <p>{familyPrayers[randomPerson].prayers[randomPrayer]}</p>
    </div>
  );
}

export default FamilyPrayer;
