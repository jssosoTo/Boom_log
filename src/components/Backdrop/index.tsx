import { ReactNode } from "react";
import ReactDOM from "react-dom";
import styles from "./index.module.css";
import classNames from "classnames";

const backdrop = document.getElementById("global-backdrop") as HTMLElement;

export default function Backdrop({
  children,
  className = "",
}: {
  children?: ReactNode;
  className?: string;
}) {
  return ReactDOM.createPortal(
    <div className={classNames(styles.BackdropContainer, className)}>
      {children}
    </div>,
    backdrop
  );
}
