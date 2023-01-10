import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// local imports
import Home from "./components/Home/Home";
import SideBarNav from "./components/SideBarNav/SideBarNav";
import "./App.scss";

function App() {
  return <div className="app">
  <Router>
    <SideBarNav/>
    <Routes>
      <Route path="/" element={<Home/>} />
    </Routes>
  </Router>
  </div>;
}

export default App;
