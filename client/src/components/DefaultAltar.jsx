import altar2 from "../assets/altar2.png";
import FamilyPrayer from "./FamilyPrayer";

function DefaultAltar() {
  const containerStyle = {
    position: "relative",
    width: "100%",
    margin: "-12vh auto",
    zIndex: "-1",
  };

  const imgStyle = {
    width: "100%",
    display: "block",
  };

  const cardStyle = {
    position: "absolute",
    width: "12%",
    top: "58%", //
    left: "43%", //
    padding: "25px 10px",
  };

  return (
    <div className="default-altar">
      <div style={containerStyle}>
        <img style={imgStyle} src={altar2} alt="Altar image" />
        <FamilyPrayer style={cardStyle} />
      </div>
    </div>
  );
}

export default DefaultAltar;
