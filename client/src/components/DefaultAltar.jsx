import altar2 from "../assets/altar2.png";
import altar3 from "../assets/altar3.png";

import FamilyPrayer from "./FamilyPrayer";

function DefaultAltar() {
  const containerStyle = {
    position: "relative",
    width: "100%",
    height: "100vh",
    overflow: "hidden",
    margin: "-11vh auto",
    backgroundImage: `url(${altar3})`,
    zIndex: "-1",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
    overflow: "hidden",
  };

  const imgStyle = {
    width: "100%",
    display: "block",
  };

  const cardStyle = {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "clamp(120px, 12vw, 150px)",
    aspectRatio: "3 / 4",
  };

  return (
    <div className="default-altar">
      <div style={containerStyle}>
        {/* <img style={imgStyle} src={altar2} alt="Altar image" /> */}
        <FamilyPrayer style={cardStyle} />
      </div>
    </div>
  );
}

export default DefaultAltar;
