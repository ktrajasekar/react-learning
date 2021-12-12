import "./App.css";
import "./mediaqueries.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/home";
import FeatureComponent from "./components/feature-component";
import ClassComponent from "./components/class-component";

// import { returnfooter, testexports } from "./utils.js";

function App() {
  return (
    <div className="react-learning-container react-learning-app">
      <Router>
        <div className="side-nav-bar">
          <h1>React Learning Index</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feature-component">Functional Component</Link>
            </li>
            <li>
              <Link to="/class-component">Class Component</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            exact
            path="/feature-component"
            element={<FeatureComponent />}
          ></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route
            exact
            path="/class-component"
            element={<ClassComponent />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
