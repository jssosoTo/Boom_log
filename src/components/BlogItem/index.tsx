import {
  CommentOutlined,
  DislikeOutlined,
  LikeOutlined,
} from "@ant-design/icons";
import styles from "./index.module.css";
import { useState } from "react";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export type BlogType = {
  id?: string;
  title: string;
  description: string;
  agree: number;
  disagree: number;
  comments: number;
  author: string;
};

function BlogItem({
  id,
  title,
  description,
  agree,
  disagree,
  comments,
  author,
}: BlogType) {
  const [isHide, setIsHide] = useState<boolean>(true);
  const navigate = useNavigate();

  return (
    <div className={styles.BlogContainer}>
      <h2
        className={styles.Author}
        onClick={() => navigate(`/blogs/detail/${id}`)}
      >
        {title}
      </h2>
      <p>
        {description.length > 200 ? (
          <div className={styles.HideContainer}>
            <span>
              {isHide ? `${description.slice(0, 200)}...` : description}
            </span>
            <button onClick={() => setIsHide(!isHide)}>
              {isHide ? "Extend" : "Hide"}
            </button>
          </div>
        ) : (
          description
        )}
      </p>
      <div className={styles.Btns}>
        <div className={styles.Btn}>
          <LikeOutlined /> {agree}
        </div>
        <div className={styles.Btn}>
          <DislikeOutlined /> {disagree}
        </div>
        <div className={styles.Btn}>
          <CommentOutlined /> {comments}
        </div>
        <div className={classNames(styles.Btn, styles.Author)}>
          Author: {author}
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
