// import logo from "./logo.svg";
import "./App.css";
import FeatureComponent from "./components/feature-component";
import {returnfooter,testexports} from './utils.js'

function App() {
  return (
    <div className="App">
      <FeatureComponent></FeatureComponent>
      <footer className="react-learning-footer">{returnfooter()}</footer>
    </div>
  );
}

export default App;
