import classNames from "classnames";
import styles from "./index.module.css";
import { ReactNode, useState } from "react";
import { MenuOutlined, RollbackOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Sidebar({
  children,
  sidebarContent,
  isWithdraw,
}: {
  children: ReactNode;
  sidebarContent: ReactNode;
  isWithdraw?: boolean;
}) {
  const [isHide, setIsHide] = useState<boolean>(false);
  const navigate = useNavigate();

  return (
    <div className="flex relative">
      <div
        className={classNames("full-screen", styles.Sidebar, { "w-0": isHide })}
      >
        {sidebarContent}
      </div>
      {children}
      <div className={styles.MenuBtns}>
        <button className={styles.MenuBtn} onClick={() => setIsHide(!isHide)}>
          <MenuOutlined />
        </button>
        <button
          hidden={!isWithdraw}
          className={styles.WithdrawBtn}
          onClick={() => navigate(-1)}
        >
          <RollbackOutlined />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
