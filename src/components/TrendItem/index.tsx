import { CalendarOutlined, EyeOutlined, UserOutlined } from "@ant-design/icons";
import styles from "./index.module.css";
import moment from "moment";

function TrendItem({
  visited,
  title,
  description,
  rank,
  author,
  publishTime,
}: TrendInterface) {
  return (
    <div className={styles.TrendContainer}>
      <div className={styles.RankTitle}>{rank}</div>
      <div className={styles.Content}>
        <p>{title}</p>
        <p>{description}</p>
        <div className={styles.DataContainer}>
          <div>
            <EyeOutlined /> <span>{visited}</span>
          </div>
          <div>
            <UserOutlined /> <span>{author}</span>
          </div>
          <div>
            <CalendarOutlined />{" "}
            <span>{moment(publishTime).format("YYYY-MM-DD HH:mm:ss")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export interface TrendInterface {
  visited: number;
  title: string;
  description: string;
  rank: number;
  author: string;
  publishTime: string;
}

export default TrendItem;
