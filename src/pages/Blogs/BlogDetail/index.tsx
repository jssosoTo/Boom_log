/* eslint-disable @typescript-eslint/no-explicit-any */
import parentStyles from "../index.module.css";
import styles from "./index.module.css";
import Sidebar from "../../../components/Sidebar";
import classNames from "classnames";
import { Button } from "antd";
import {
  DislikeFilled,
  LikeFilled,
  MessageOutlined,
  PlusOutlined,
  ToTopOutlined,
} from "@ant-design/icons";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import { useRef } from "react";

function BlogDetail() {
  const titleDOM = useRef(null);

  return (
    <Sidebar sidebarContent={<div style={{ color: "red" }}>hello</div>}>
      <div
        className={classNames(
          "main-container",
          parentStyles.Container,
          "full-screen"
        )}
      >
        <main className={classNames(parentStyles.MainContainer, styles.Main)}>
          <header className={styles.AuthorFunc}>
            <div className={styles.infoContainer}>
              <img src="/react.svg" alt="photo" />
              <h4 ref={titleDOM}>P0PC0RN</h4>
            </div>
            <Button icon={<PlusOutlined />}>Follow</Button>
          </header>

          <div className={styles.Agree}>
            {985} people agreed with this content
          </div>

          <div className={styles.Contents}>
            <Markdown rehypePlugins={[rehypeHighlight]}>{`## Hello world
            \n### shade color
            \n *ssss* [\`remark-gfm\`](https://github.com/remarkjs/react-markdown#use)
            \n - s  \`dangerouslySetInnerHTML\`
            \n \`\`\`js
            \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n
import React from 'react'
import ReactDOM from 'react-dom'
import Markdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <Markdown rehypePlugins={[rehypeHighlight]}>{markdown}</Markdown>,
  document.querySelector('#content')
)`}</Markdown>
          </div>
        </main>
        <div className={styles.ColorfulContainer}>
          <h3>About Author</h3>
          <div className={styles.ColorfulImg}>
            <img src="/react.svg" alt="photo" />
            <span>P0PC0RN</span>
          </div>
          <div className={styles.ColorfulInfo}>
            <div>
              <h4>Blogs</h4>
              <h4>4</h4>
            </div>
            <div>
              <h4>Followed</h4>
              <h4>999</h4>
            </div>
          </div>
          <div className={styles.ColorfulBtns}>
            <Button icon={<PlusOutlined />}>Follow Him</Button>
            <Button icon={<MessageOutlined />}>Send Message</Button>
          </div>
        </div>
        <div className={styles.BtnFunc}>
          <button title="agree this content">
            <LikeFilled />
          </button>
          <button title="disagree this content">
            <DislikeFilled />
          </button>
          <button
            title="click to scroll to the top"
            onClick={() =>
              (titleDOM.current as any).scrollIntoView({
                behavior: "smooth",
                block: "end",
              })
            }
          >
            <ToTopOutlined />
          </button>
        </div>
      </div>
    </Sidebar>
  );
}

export default BlogDetail;
