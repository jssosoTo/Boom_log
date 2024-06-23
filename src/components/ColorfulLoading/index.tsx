import classNames from "classnames";
import Backdrop from "../Backdrop";
import styles from "./index.module.css";

function ColorfulLoading({ isLoading }: { isLoading: boolean }) {
  return (
    <Backdrop
      className={classNames(styles.LoadingContainer, {
        [styles.Colorful]: isLoading,
      })}
    >
      {isLoading && <img src="/recycle.svg" />}
    </Backdrop>
  );
}

export default ColorfulLoading;
