import { useEffect, useState } from "react";
import Loader from "../ui/Loader";
import styles from "./ReadingOfTheDay.module.css";

function ReadingOfTheDay() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    setError("");

    const script = document.createElement("script");
    script.src = "https://universalis.com/Europe.England/jsonpmass.js";
    script.async = true;

    window.universalisCallback = (json) => {
      setData(json);
      setIsLoading(false);
    };

    script.onerror = () => {
      setError("Could not load the reading");
      setIsLoading(false);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      delete window.universalisCallback;
    };
  }, []);

  if (isLoading) return <Loader />;

  if (!isLoading && !error)
    return (
      <section className={styles["reading-of-the-day"]}>
        <h3>{data.date}</h3>
        <div dangerouslySetInnerHTML={{ __html: data.day }} />

        <h3>Reading 1</h3>
        <div
          className={styles["reading-span"]}
          dangerouslySetInnerHTML={{ __html: data.Mass_R1?.source }}
        />
        <div
          className={styles["reading-paragraph"]}
          dangerouslySetInnerHTML={{ __html: data.Mass_R1?.text }}
        />

        <h3>Responsorial Psalm</h3>
        <div
          className={styles["reading-span"]}
          dangerouslySetInnerHTML={{ __html: data.Mass_Ps?.source }}
        />
        <div
          className={styles["reading-paragraph"]}
          dangerouslySetInnerHTML={{ __html: data.Mass_Ps?.text }}
        />

        {data.Mass_R2 ? (
          <>
            <h3>Reading 2</h3>
            <div
              className={styles["reading-span"]}
              dangerouslySetInnerHTML={{ __html: data.Mass_R2?.source }}
            />
            <div
              className={styles["reading-paragraph"]}
              dangerouslySetInnerHTML={{ __html: data.Mass_R2?.text }}
            />
          </>
        ) : null}

        <h3>Alleluia</h3>
        <div
          className={styles["reading-span"]}
          dangerouslySetInnerHTML={{ __html: data.Mass_GA?.source }}
        />
        <div
          className={styles["reading-paragraph"]}
          dangerouslySetInnerHTML={{ __html: data.Mass_GA?.text }}
        />

        <h3>Gospel</h3>
        <div
          className={styles["reading-span"]}
          dangerouslySetInnerHTML={{ __html: data.Mass_G?.source }}
        />
        <div
          className={styles["reading-paragraph"]}
          dangerouslySetInnerHTML={{ __html: data.Mass_G?.text }}
        />

        <div
          className={styles["reading-paragraph"]}
          dangerouslySetInnerHTML={{ __html: data.copyright?.text }}
        />
      </section>
    );

  if (error) return <p>There was an error : {error}</p>;
}

export default ReadingOfTheDay;
