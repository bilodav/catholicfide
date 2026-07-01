import apologiaHome from "../assets/videos/apologiaHome.mp4";
import apologiaHomeBanner1 from "../assets/apologiaImages/apologia1.png";
import apologiaHomeBanner2 from "../assets/apologiaImages/apologia2.jpeg";
import themeImage1 from "../assets/apologiaImages/apologiaTheme1.jpeg";
import themeImage2 from "../assets/apologiaImages/apologiaTheme2.jpeg";
import themeImage3 from "../assets/apologiaImages/apologiaTheme3.jpeg";

const apologiaThemes = [
  {
    title: "Core Christian Doctrine",
    image: themeImage1,
  },
  {
    title: "Defending the Faith",
    image: themeImage2,
  },
  {
    title: "Scriptural Reliability",
    image: themeImage3,
  },
];

function ApologiaPage() {
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
              style={{ backgroundImage: `url(${theme.image})` }}
              key={index}
              className="navigation-card"
            >
              <h3>{theme.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default ApologiaPage;
