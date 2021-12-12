// import logo from "./logo.svg";
import FunctionalComponent from "./function-component";
import ClassComponent from "../class-component";
import React, { Component } from "react";

class FeatureComponent extends Component {
  render() {
    const dataObj = [
      {
        id: "1",
        title: "Hello Functional Components",
        description:
          "Functional components are stateless, Lifecycle is not possible",
      },
      {
        id: "2",
        title: "Hello Class Components",
        description: "Class Components are stateful, Lifecycle is possible",
      },
    ];
    const data = {
      title: "Hello Functional Components",
      description:
        "Functional components are stateless, Lifecycle is not possible",
    };
    return (
      <div>
        <FunctionalComponent
          name="Rajasekar"
          showColor={true}
          {...data}
          dataObj={dataObj}
        ></FunctionalComponent>
        <ClassComponent></ClassComponent>
      </div>
    );
  }
}

export default FeatureComponent;
