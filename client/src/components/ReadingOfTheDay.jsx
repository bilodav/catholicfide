import fetchJsonp from "fetch-jsonp";
import { useEffect, useState } from "react";
import Loader from "./ui/Loader";

function ReadingOfTheDay() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchReading() {
      try {
        setIsLoading(true);
        setError("");
        const res = await fetchJsonp(
          "https://universalis.com/Europe.England/jsonpmass.js",
        );
        if (!res.ok)
          throw new Error("Something went wrong with fetching the reading");
        const data = await res.json();
        setData(data);
      } catch (err) {
        console.error(err.message);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchReading();
  }, []);

  if (isLoading) return <Loader />;

  if (!isLoading && !error)
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

  if (error) return <p>There was an error : {error}</p>;
}

export default ReadingOfTheDay;
