import { LoadingOutlined } from "@ant-design/icons";
import Backdrop from "../Backdrop";
import styles from "./index.module.css";

function Loading() {
  return (
    <Backdrop className="rgba-black-bg">
      <div className={styles.LoadingContainer}>
        <LoadingOutlined />
      </div>
    </Backdrop>
  );
}

export default Loading;
