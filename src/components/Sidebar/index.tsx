import classNames from "classnames";
import styles from "./index.module.css";
import { ReactNode, useState } from "react";
import { MenuOutlined } from "@ant-design/icons";

function Sidebar({
  children,
  sidebarContent,
}: {
  children: ReactNode;
  sidebarContent: ReactNode;
}) {
  const [isHide, setIsHide] = useState<boolean>(false);

  return (
    <div className="flex relative">
      <div
        className={classNames("full-screen", styles.Sidebar, { "w-0": isHide })}
      >
        {sidebarContent}
      </div>
      {children}
      <button className={styles.MenuBtn} onClick={() => setIsHide(!isHide)}>
        <MenuOutlined />
      </button>
    </div>
  );
}

export default Sidebar;
