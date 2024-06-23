import styles from "./index.module.css";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className={styles.ErrorContainer}>
      <div style={{ textAlign: "center" }}>
        <h2>404 NOT FOUND</h2>
        <Link
          to="/"
          className="boom_btn"
          style={{ display: "inline-block", marginTop: ".8rem" }}
        >
          Back home
        </Link>
      </div>
    </div>
  );
}

export default Error;
