import { useState } from "react";
import styles from "./Accordion.module.css";

function Accordion({ content }) {
  const [activeId, setActiveId] = useState(null);
  const handleClick = (index) => {
    console.log(index);

    if (index === activeId) {
      setActiveId(null);
    } else {
      setActiveId(index);
    }
  };
  return (
    <div className={styles["accordion-container"]}>
      {content.map((el, index) => (
        <div key={index} className={styles["accordion"]}>
          <div
            className={styles["title-container"]}
            value={index}
            onClick={() => {
              handleClick(index);
            }}
          >
            <span className={styles["button"]}>
              {index === activeId ? "-" : "+"}
            </span>
            <span className={styles["title"]}>{el.title}</span>
          </div>
          {index === activeId && (
            <div className={styles["content"]}>
              <p>{el.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;
