import "./App.css";
import "./mediaqueries.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from "./components/home";
import FeatureComponent from "./components/feature-component";
import ClassComponent from "./components/class-component";
import DataFetch from "./components/data-fetch";
import FormComponent from "./components/form-component";

// import { returnfooter, testexports } from "./utils.js";

function App() {
  return (
    <div className="react-learning-container react-learning-app">
      <Router>
        <div className="side-nav-bar">
          <h1>React Learning Index</h1>
          <ul>
            <li>
              <NavLink to="/" activeclassname="active-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/feature-component" activeclassname="active-link">
                Functional Component
              </NavLink>
            </li>
            <li>
              <NavLink to="/class-component" activeclassname="active-link">
                Class Component
              </NavLink>
            </li>
            <li>
              <NavLink to="/data-fetch" activeclassname="active-link">
                Data Fetch
              </NavLink>
              </li>
              <li>
              <NavLink to="/forms" activeclassname="active-link" >Forms</NavLink>
            </li>
          </ul>
        </div>
        <Routes>
          <Route
            path="/feature-component"
            element={<FeatureComponent />}
          ></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/class-component" element={<ClassComponent />}></Route>
          <Route path="/data-fetch" element={<DataFetch />}></Route>
          <Route path="/forms" element={<FormComponent/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
