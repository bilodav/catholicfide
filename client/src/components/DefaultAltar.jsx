import { useEffect } from "react";
import altar2 from "../assets/altar2.png";
import altar3 from "../assets/altar3.png";
import FamilyPrayer from "./FamilyPrayer";

function DefaultAltar() {
  useEffect(() => {
    document.body.classList.add("no-scroll");
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, []);

  const containerStyle = {
    position: "fixed",
    inset: 0,
    width: "100%",
    overflow: "hidden",
    backgroundImage: `url(${altar3})`,
    zIndex: "-1",
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  };

  const cardStyle = {
    position: "absolute",
    top: "70%",
    left: "50%",
    transform: "translate(-50%, -40%)",
    width: "clamp(120px, 12vw, 150px)",
    aspectRatio: "3 / 4",
  };

  return (
    <div className="default-altar default-altar-viewport">
      <div style={containerStyle}>
        <FamilyPrayer style={cardStyle} />
      </div>
    </div>
  );
}

export default DefaultAltar;
