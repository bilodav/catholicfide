import { useEffect } from "react";
import styles from "./RosaryCard.module.css";
import Button from "../ui/Button";

function RosaryCard(props) {
  const vibrate = (pattern = 50) => {
    if (navigator.vibrate) {
      navigator.vibrate(pattern);
    }
  };

  useEffect(() => {
    if (!props.beads) return; // Only listen when the beads are shown

    const handleKeyDown = (event) => {
      const tag = event.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (event.target.isContentEditable) return;

      if (event.key === "ArrowLeft") {
        vibrate();
        props.onHandlePrev();
      } else if (event.key === "ArrowRight") {
        vibrate();
        props.onHandleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [props.beads, props.onHandlePrev, props.onHandleNext]);

  return (
    <div className={`${styles["rosary-card"]} ${props.cardClass}`}>
      {props.cardTitle && <h3>{props.cardTitle}</h3>}
      {props.mysteryGroup && <h3>{props.mysteryGroup}</h3>}
      <div className={styles["rosary-card-body"]}>
        {props.image && (
          <img src={props.image} className={props.imgClass} alt="mystery" />
        )}
        {props.verse && <h4 className={props.class}>{props.verse}</h4>}
        {props.scripture && (
          <p dangerouslySetInnerHTML={{ __html: props.scripture }} />
        )}
        {props.date && <p className={styles["date"]}>{props.date}</p>}
        {props.children}

        {props.beads && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              margin: "10% auto",
            }}
          >
            <Button
              className="btn-outline"
              onClick={() => {
                vibrate();
                props.onHandlePrev();
              }}
              text="❮"
            />
            <Button
              className="btn-outline"
              onClick={() => {
                vibrate();
                props.onHandleNext();
              }}
              text="❯"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default RosaryCard;
