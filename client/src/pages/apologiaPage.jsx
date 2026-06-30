import apologiaHome from "../assets/videos/apologiaHome.mp4";
import apologiaHomeBanner1 from "../assets/apologiaImages/apologia1.jpeg";
import apologiaHomeBanner2 from "../assets/apologiaImages/apologia2.jpeg";

function ApologiaPage() {
  return (
    <section className="apologia">
      <h2>
        preach the word; be ready in season and out of season; reprove, rebuke,
        and exhort, with complete patience and teaching.{" "}
      </h2>
      <p>2 Timothy 4:2</p>
      <div className="apologia-landing-banner">
        <img src={apologiaHomeBanner1} alt="" />
        <video autoPlay muted loop controls>
          <source src={apologiaHome} type="video/mp4" />
        </video>
        <img src={apologiaHomeBanner2} alt="" />
      </div>
      <h2>
        but in your hearts honor Christ the Lord as holy, always being prepared
        to make a defense to anyone who asks you for a reason for the hope that
        is in you; yet do it with gentleness and respect,{" "}
      </h2>
      <p>1 Peter 3:15</p>
    </section>
  );
}

export default ApologiaPage;
