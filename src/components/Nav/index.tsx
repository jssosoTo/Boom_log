import { Link } from "react-router-dom";
import styles from "./index.module.css";
import {
  ExperimentOutlined,
  HomeOutlined,
  MessageOutlined,
  MoonOutlined,
  ReadOutlined,
  SunOutlined,
} from "@ant-design/icons";
import { ReactElement } from "react";

function Nav({
  isDark,
  changeTheme,
}: {
  isDark: boolean;
  changeTheme: () => void;
}) {
  const Links: { icon: ReactElement; title: string; path: string }[] = [
    {
      icon: <HomeOutlined />,
      title: "Home",
      path: "/",
    },
    {
      icon: <ReadOutlined />,
      title: "Blogs",
      path: "/blogs",
    },
    {
      icon: <MessageOutlined />,
      title: "Chat",
      path: "/chat",
    },
    {
      icon: <ExperimentOutlined />,
      title: "Lab",
      path: "/lab",
    },
  ];

  return (
    <nav>
      <section className={styles.NavLogo}>
        <img
          src="/boom_logo.png"
          alt="boom logo"
          style={{ borderRadius: "2px" }}
        />
        <span>Boom VLog</span>
      </section>
      <section className={styles.LinksContainer}>
        <ul>
          {Links.map((item) => {
            const { icon, title, path } = item;

            return (
              <li key={path}>
                <Link to={path}>
                  {icon} <span>{title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className={styles.funcBtn}>
        <button onClick={changeTheme}>
          {isDark ? <MoonOutlined /> : <SunOutlined />}
        </button>
      </section>
    </nav>
  );
}

export default Nav;
