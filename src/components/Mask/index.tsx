import { ReactNode } from "react";
import Backdrop from "../Backdrop";
import styles from "./index.module.css";

function Mask({ children }: { children?: ReactNode }) {
  return (
    <Backdrop>
      <div className={styles.Mask}>{children}</div>
    </Backdrop>
  );
}

export default Mask;
