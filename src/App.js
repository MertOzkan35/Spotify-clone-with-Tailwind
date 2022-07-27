import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "./components/SideBar";
import BottomBar from "./components/BottomBar";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <SideBar />
        <Content />
      </div>
      <BottomBar />
    </Router>
  );
}

export default App;
