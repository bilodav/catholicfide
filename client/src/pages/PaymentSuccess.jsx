import styles from "./PaymentSuccess.module.css";
import Button from "../components/ui/Button";
import { useNavigate } from "react-router-dom";

function PaymentSuccess() {
  const navigate = useNavigate();
  return (
    <section className={styles["payment-success"]}>
      <div className={styles["success-msg"]}>
        <p>Success</p>
        <p>Thank you for your donation</p>

        <span className={styles["success-msg-end"]}>
          Your contribution helps to advance the mission of Catholic Fide
        </span>
      </div>
      <div className={styles["btn-div"]}>
        <Button text="Go Back Home" onClick={() => navigate("/")} />
        <Button
          text="Explore Prayers"
          className={"btn-accent"}
          onClick={() => navigate("/oremus")}
        />
      </div>
    </section>
  );
}

export default PaymentSuccess;
