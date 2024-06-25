import { ExperimentFilled } from "@ant-design/icons";
import Sidebar from "../../components/Sidebar";
import styles from "./index.module.css";

function Lab() {
  return (
    <Sidebar sidebarContent={<div>hello world</div>}>
      <main
        className="main-container"
        style={{ textAlign: "center", marginTop: "2rem" }}
      >
        <h1>Welcome to the Lab page</h1>
        <p>I will publish some experimental function in this page.</p>
        <ExperimentFilled style={{ fontSize: "20rem" }} />
      </main>
    </Sidebar>
  );
}

export default Lab;
