import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 9,
    };
  }
  componentDidMount() {
    console.log("component mounting");
    this.setState((state) => ({
      count: state.count + 11,
    }));
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => console.log(json));
  }
  componentDidUpdate() {
    console.log("component updating");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return <div>Class Component Created {this.state.count}</div>;
  }
}

export default ClassComponent;
