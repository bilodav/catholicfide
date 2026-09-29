import styles from "./EftDetails.module.css";

function EftDetails() {
  return (
    <div className={styles["eft-donation"]}>
      <h2>Bank Details</h2>
      <div className={styles["eft-donation-row"]}>
        <span className={styles["eft-title"]}>Account Holder</span>
        <span className={styles["eft-detail"]}>Sylph Code</span>
      </div>
      <div className={styles["eft-donation-row"]}>
        <span className={styles["eft-title"]}>Account Number</span>
        <span className={styles["eft-detail"]}>63169043907</span>
      </div>
      <div className={styles["eft-donation-row"]}>
        <span className={styles["eft-title"]}>Branch Code</span>
        <span className={styles["eft-detail"]}>201510</span>
      </div>
      <div className={styles["eft-donation-row"]}>
        <span className={styles["eft-title"]}>Swift Code</span>
        <span className={styles["eft-detail"]}>FIRNZAJJ</span>
      </div>
      <div className={styles["eft-donation-row"]}>
        <span className={styles["eft-title"]}>Reference</span>
        <span className={styles["eft-detail"]}>CatholicFide</span>
      </div>
      <p className={styles["eft-important"]}>
        Please ensure the reference states catholicfide, to accurately allocate
        the funds
      </p>
    </div>
  );
}

export default EftDetails;
