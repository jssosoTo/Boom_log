import classNames from "classnames";
import Sidebar from "../../components/Sidebar";
import styles from "./index.module.css";
import { Link, useLocation } from "react-router-dom";
import BlogItem, { BlogType } from "../../components/BlogItem";

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
            {blogs.map((blog) => (
              <BlogItem key={blog.id} {...blog} />
            ))}
          </div>
        </main>
      </div>
    </Sidebar>
  );
}

export default Blogs;
