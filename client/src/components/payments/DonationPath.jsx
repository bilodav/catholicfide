import Button from "../ui/Button";
import SnapScanDonation from "./SnapScanDonation";
import YocoTestForm from "./YocoTestForm";
import styles from "./DonationPath.module.css";
import { useState } from "react";

function DonationPath() {
  const [pathway, setPathway] = useState(null);

  const handleClick = (value) => {
    console.log(value);

    setPathway(value);
  };

  return (
    <div className={styles["donation-path-container"]}>
      {!pathway && (
        <div className={styles["path-choice"]}>
          <h2>How would you like to give?</h2>
          <div
            onClick={(e) => {
              handleClick("snapscan");
            }}
            className={styles["path-card"]}
          >
            <h3>SnapScan</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="rgb(1, 1, 1)"
                d="M64 160l64 0 0-64-64 0 0 64zM0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48L0 80zM64 416l64 0 0-64-64 0 0 64zM0 336c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96zM320 96l0 64 64 0 0-64-64 0zM304 32l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-26.5 21.5-48 48-48zM288 352a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm0 64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm96 32c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm32-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm-32 32a32 32 0 1 1 -64 0 32 32 0 1 1 64 0z"
              />
            </svg>
          </div>
          <div
            onClick={(e) => {
              handleClick("card");
            }}
            className={styles["path-card"]}
          >
            <h3>Card</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="rgb(1, 1, 1)"
                d="M448 112c8.8 0 16 7.2 16 16l0 32-416 0 0-32c0-8.8 7.2-16 16-16l384 0zm16 112l0 160c0 8.8-7.2 16-16 16L64 400c-8.8 0-16-7.2-16-16l0-160 416 0zM64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zM80 344c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zm144 0c0 13.3 10.7 24 24 24l64 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-64 0c-13.3 0-24 10.7-24 24z"
              />
            </svg>
          </div>
          <div
            onClick={(e) => {
              handleClick("snapscan");
            }}
            className={styles["path-card"]}
          >
            <h3>EFT</h3>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path
                fill="rgb(1, 1, 1)"
                d="M271.9 20.2c-9.8-5.6-21.9-5.6-31.8 0l-224 128c-12.6 7.2-18.8 22-15.1 36S17.5 208 32 208l32 0 0 208 0 0-51.2 38.4C4.7 460.4 0 469.9 0 480 0 497.7 14.3 512 32 512l448 0c17.7 0 32-14.3 32-32 0-10.1-4.7-19.6-12.8-25.6l-51.2-38.4 0-208 32 0c14.5 0 27.2-9.8 30.9-23.8s-2.5-28.8-15.1-36l-224-128zM400 208l0 208-64 0 0-208 64 0zm-112 0l0 208-64 0 0-208 64 0zm-112 0l0 208-64 0 0-208 64 0zM256 96a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"
              />
            </svg>
          </div>
        </div>
      )}
      {pathway && (
        <Button
          text="Go Back"
          onClick={() => handleClick(null)}
          className="btn-secondary"
        />
      )}
      {pathway === "snapscan" && <SnapScanDonation />}
      {pathway === "card" && <YocoTestForm />}
    </div>
  );
}

export default DonationPath;
