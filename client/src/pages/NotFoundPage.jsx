import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import styles from "./NotFoundPage.module.css";

function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <section className={styles["page-not-found"]}>
      <div className={styles["text-404"]}>
        <p>404</p>
        <p>
          It seems you have explored where we have{" "}
          <span className={styles["text-404-accent"]}>not yet gone</span>
        </p>

        <span className={styles["text-404-end"]}>
          The path ends here but the faith goes further
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

export default NotFoundPage;
