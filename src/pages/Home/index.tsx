import classNames from "classnames";
import styles from "./index.module.css";
import { GithubOutlined, MailOutlined } from "@ant-design/icons";
import { message } from "antd";

function Home() {
  return (
    <div className={classNames("full-screen", styles.HomePage)}>
      <h1>Welcome to P0PC0RN's Functional Site!</h1>
      <p>
        This site is building, it's not the final version! Keep follow with my
        colorful site! If you have some good suggestions, please tell me on
        Github!
      </p>
      <ul>
        <li>
          <a
            title="click to visit"
            href="https://github.com/jssosoTo"
            target="_blank"
          >
            <GithubOutlined />
          </a>
        </li>
        <li>
          <a
            title="click to copy my e-mail"
            href="#"
            onClick={(e) => {
              e.preventDefault();
              const temp = document.createElement("input");
              temp.value = "popcornsu@qq.com";
              document.body.appendChild(temp);
              temp.select();
              document.execCommand("copy", true);
              temp.remove();
              message.info("successfully copied");
            }}
          >
            <MailOutlined />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Home;
