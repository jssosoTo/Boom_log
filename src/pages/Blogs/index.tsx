import classNames from "classnames";
import Sidebar from "../../components/Sidebar";
import styles from "./index.module.css";
import { Link, useLocation } from "react-router-dom";
import BlogItem, { BlogType } from "../../components/BlogItem";
import TrendItem, { TrendInterface } from "../../components/TrendItem";

function Blogs() {
  const classifyRoutes: { path: string; title: string }[] = [
    {
      path: "/blogs",
      title: "Recommend",
    },
    {
      path: "/blogs/follow",
      title: "Follow",
    },
    {
      path: "/blogs/trend",
      title: "Trend",
    },
  ];
  const blogs: BlogType[] = [
    {
      id: "sdad7wxg34ada",
      title: "Just for testing",
      description:
        "this blog is for testing, and this content is unreal. do not believe in it!",
      agree: 821,
      disagree: 20,
      comments: 9,
      author: "su",
    },
    {
      id: "sdaghghggaada",
      title: "Just for testing",
      description:
        "this blog is for testing, and this content is unreal. do not believe in it!",
      agree: 821,
      disagree: 20,
      comments: 9,
      author: "su",
    },
    {
      id: "sdada3433ada",
      title: "Just for testing",
      description:
        "this blog is for testing, and this content is unreal. do not believe in it!",
      agree: 821,
      disagree: 20,
      comments: 9,
      author: "su",
    },
    {
      id: "sdadadswwwa",
      title: "Just for testing",
      description:
        "this blog is for testing, and this content is unreal. do not believe in it!",
      agree: 821,
      disagree: 20,
      comments: 9,
      author: "su",
    },
    {
      id: "sdadadaada",
      title: "Just for testing",
      description:
        "this blog is for testing, and this content is unreal. do not believe in it!",
      agree: 821,
      disagree: 20,
      comments: 9,
      author: "su",
    },
    {
      id: "sdadasasdadaaasdada",
      title: "It's my information",
      description:
        "Hello, everyone! This is P0PC0RN who build this site. blablablablablablablablablablablabla blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla bla",
      agree: 999999,
      disagree: 888,
      comments: 543,
      author: "su",
    },
  ];
  const location = useLocation();

  const mockTrendData: Array<TrendInterface> = [
    {
      title:
        "Just for Testingsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
      rank: 1,
      publishTime: "2020-10-20 20:33:00",
      author: "P0PC0RN",
      visited: 998,
      description:
        "Hello rankihave so manytimestolearn the front-end developer's skillbutineverlearnnkihave so manytimestolearn the front-end developer's skillbutineverlearnnkihave so manytimestolearn the front-end developer's skillbutineverlearnnkihave so manytimestolearn the front-end developer's skillbutineverlearnnkihave so manytimestolearn the front-end developer's skillbutineverlearnnkihave so manytimestolearn the front-end developer's skillbutineverlearnittoomuchimsohouhuiaaaaaaaaaaa",
    },
  ];

  return (
    <Sidebar sidebarContent={<div style={{ color: "red" }}>hello</div>}>
      <div
        className={classNames(
          "main-container",
          styles.Container,
          "full-screen"
        )}
      >
        <main className={classNames(styles.MainContainer)}>
          <ul className={styles.ClassifyContainer}>
            {classifyRoutes.map(({ path, title }) => (
              <li key={`Blogs-${path}`}>
                <Link
                  to={path}
                  style={
                    location.pathname === path
                      ? {
                          color: "#1772f6",
                        }
                      : {}
                  }
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
          <div className={styles.BlogsContainer}>
            {location.pathname !==
            (
              classifyRoutes.find((item) => item.title === "Trend") as {
                path: string;
              }
            ).path
              ? blogs.map((blog) => <BlogItem key={blog.id} {...blog} />)
              : mockTrendData.map((item) => (
                  <TrendItem key={item.rank} {...item} />
                ))}
          </div>
        </main>
      </div>
    </Sidebar>
  );
}

export default Blogs;
