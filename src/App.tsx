import { Fragment, ReactNode, useState } from "react";
import Nav from "./components/Nav";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import Error from "./pages/Error";
import { ConfigProvider, theme } from "antd";
import useGlobalContext from "./components/Context/useGlobalContext";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/Blogs/BlogDetail";

type RouteProps = {
  element: ReactNode;
  path: string;
  children?: RouteProps[];
  exact?: boolean;
};

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);
  const location = useLocation();
  const routes: RouteProps[] = [
    {
      element: <Home />,
      path: "/",
    },
    {
      element: <Blogs />,
      path: "/blogs",
      exact: true,
      children: [
        {
          element: <BlogDetail />,
          path: "/blogs/detail/:id",
        },
        {
          element: <Blogs />,
          path: "/blogs/*",
        },
      ],
    },
    {
      element: <Error />,
      path: "*",
    },
  ];
  const { color, switchTheme } = useGlobalContext();

  const createRouterElement = (item: RouteProps): ReactNode => {
    const { children = [], ...spread } = item;
    const wrapperSpread = {
      ...spread,
      element: (
        <Fragment>
          {(!spread.exact || spread.path === location.pathname) &&
            spread.element}
          <Outlet></Outlet>
        </Fragment>
      ),
    };

    return (
      <Route key={wrapperSpread.path} {...wrapperSpread}>
        {children.map(createRouterElement)}
      </Route>
    );
  };

  return (
    <ConfigProvider
      theme={{
        token: { ...color },
      }}
    >
      <div className={isDarkTheme ? "dark-theme" : ""}>
        <Nav
          isDark={isDarkTheme}
          changeTheme={() => {
            setIsDarkTheme(!isDarkTheme);
            switchTheme!(!isDarkTheme);
          }}
        />
        <div className="flow-scroll">
          <Routes>{routes.map(createRouterElement)}</Routes>
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
