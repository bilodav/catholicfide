import fetchJsonp from "fetch-jsonp";
import { useEffect, useState } from "react";

function ReadingOfTheDay() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchJsonp("https://universalis.com/Europe.England/jsonpmass.js")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch(console.error);
  }, []);

  console.log(data);

  if (!data) return <p>Loading...</p>;

  return (
    <section className="reading-of-the-day">
      <h3>{data.date}</h3>
      <div dangerouslySetInnerHTML={{ __html: data.day }} />

      <h3>Reading 1</h3>
      <div
        className="reading-span"
        dangerouslySetInnerHTML={{ __html: data.Mass_R1?.source }}
      />
      <div
        className="reading-paragraph"
        dangerouslySetInnerHTML={{ __html: data.Mass_R1?.text }}
      />

      <h3>Responsorial Psalm</h3>
      <div
        className="reading-span"
        dangerouslySetInnerHTML={{ __html: data.Mass_Ps?.source }}
      />
      <div
        className="reading-paragraph"
        dangerouslySetInnerHTML={{ __html: data.Mass_Ps?.text }}
      />

      {data.Mass_R2 ? (
        <>
          <h3>Reading 2</h3>
          <div
            className="reading-span"
            dangerouslySetInnerHTML={{ __html: data.Mass_R2?.source }}
          />
          <div
            className="reading-paragraph"
            dangerouslySetInnerHTML={{ __html: data.Mass_R2?.text }}
          />
        </>
      ) : null}

      <h3>Alleluia</h3>
      <div
        className="reading-span"
        dangerouslySetInnerHTML={{ __html: data.Mass_GA?.source }}
      />
      <div
        className="reading-paragraph"
        dangerouslySetInnerHTML={{ __html: data.Mass_GA?.text }}
      />

      <h3>Gospel</h3>
      <div
        className="reading-span"
        dangerouslySetInnerHTML={{ __html: data.Mass_G?.source }}
      />
      <div
        className="reading-paragraph"
        dangerouslySetInnerHTML={{ __html: data.Mass_G?.text }}
      />

      <div
        className="reading-paragraph"
        dangerouslySetInnerHTML={{ __html: data.copyright?.text }}
      />
    </section>
  );
}

export default ReadingOfTheDay;
