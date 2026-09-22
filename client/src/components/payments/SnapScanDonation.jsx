import styles from "./SnapScanDonation.module.css";
import snapCode from "../../assets/snapCode.png";

function SnapScanDonation() {
  return (
    <div className={styles["snap-scan-donation"]}>
      <h2>Donate via SnapScan</h2>
      <p>
        Your donations helps with the upkeep costs of catholicfide and allows us
        to reach more people across the world.
      </p>
      <img src={snapCode} alt="qr-code" />
      <span>God Bless you for your support</span>
    </div>
  );
}

export default SnapScanDonation;
