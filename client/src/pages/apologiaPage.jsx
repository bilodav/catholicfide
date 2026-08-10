import { useNavigate } from "react-router-dom";

import apologiaHome from "../assets/videos/apologiaHome.mp4";
import apologiaHomeBanner1 from "../assets/apologiaImages/apologia1.png";
import apologiaHomeBanner2 from "../assets/apologiaImages/apologia2.jpeg";
import themeImage1 from "../assets/apologiaImages/apologiaTheme1_aligned.jpg";
import themeImage2 from "../assets/apologiaImages/apologiaTheme2_aligned.jpg";
import themeImage3 from "../assets/apologiaImages/apologiaTheme3_aligned.jpg";
import themeImage4 from "../assets/apologiaImages/apologiaTheme4_aligned.jpg";
import themeImage5 from "../assets/apologiaImages/apologiaTheme5_aligned.jpg";
import themeImage6 from "../assets/apologiaImages/apologiaTheme6_aligned.jpg";
import themeImage1Color from "../assets/apologiaImages/apologiaTheme1Color_aligned.jpg";
import themeImage2Color from "../assets/apologiaImages/apologiaTheme2Color_aligned.jpg";
import themeImage3Color from "../assets/apologiaImages/apologiaTheme3Color_aligned.jpg";
import themeImage4Color from "../assets/apologiaImages/apologiaTheme4Color_aligned.jpg";
import themeImage5Color from "../assets/apologiaImages/apologiaTheme5Color_aligned.jpg";
import themeImage6Color from "../assets/apologiaImages/apologiaTheme6Color_aligned.jpg";
import { useState } from "react";

const apologiaThemes = [
  {
    title: "Core Christian Doctrine",
    id: "core-christian-doctrine",
    image: themeImage1,
    imageColor: themeImage1Color,
  },
  {
    title: "Defending the Faith",
    id: "defending-the-faith",
    image: themeImage2,
    imageColor: themeImage2Color,
  },
  {
    title: "Scriptural Reliability",
    id: "scriptural-reliability",
    image: themeImage3,
    imageColor: themeImage3Color,
  },
  {
    title: "Catholic Distinctives",
    id: "catholic-apologetics",
    image: themeImage4,
    imageColor: themeImage4Color,
  },
  {
    title: "Church History",
    id: "church-history",
    image: themeImage5,
    imageColor: themeImage5Color,
  },
  {
    title: "Resources",
    id: "resources",
    image: themeImage6,
    imageColor: themeImage6Color,
  },
];

function ApologiaPage() {
  const navigate = useNavigate();
  function handleThemeClick(theme) {
    navigate(`/apologia/${theme.id}`, { state: { theme } });
  }
  const [hoveredId, setIsHoveredID] = useState(null);

  return (
    <>
      <section className="apologia">
        <div className="scripture-banner">
          <h2>
            preach the word; be ready in season and out of season; reprove,
            rebuke, and exhort, with complete patience and teaching.{" "}
          </h2>
          <p>2 Timothy 4:2</p>
        </div>
        <div className="apologia-landing-banner">
          <img src={apologiaHomeBanner1} alt="" />
          <video autoPlay muted loop controls>
            <source src={apologiaHome} type="video/mp4" />
          </video>
          <img src={apologiaHomeBanner2} alt="" />
        </div>
        <div className="scripture-banner">
          <h2>
            but in your hearts honor Christ the Lord as holy, always being
            prepared to make a defense to anyone who asks you for a reason for
            the hope that is in you; yet do it with gentleness and respect,{" "}
          </h2>
          <p>1 Peter 3:15</p>
        </div>
      </section>

      <section className="apologia">
        <h1>Be Ready To Give An Answer</h1>
        <div className="navigation-section">
          {apologiaThemes.map((theme, index) => (
            <div
              key={theme.id}
              onMouseEnter={() => setIsHoveredID(theme.id)}
              onMouseLeave={() => setIsHoveredID(null)}
              className="navigation-card"
              onClick={() => handleThemeClick(theme)}
              style={{ position: "relative" }}
            >
              <div
                className="card-bg card-bg-default"
                style={{ backgroundImage: `url(${theme.image})` }}
              />
              <div
                className="card-bg card-bg-hover"
                style={{
                  backgroundImage: `url(${theme.imageColor})`,
                  opacity: hoveredId === theme.id ? 1 : 0,
                }}
              />
              <h3 style={{ position: "relative", zIndex: 1 }}>{theme.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ApologiaPage;
