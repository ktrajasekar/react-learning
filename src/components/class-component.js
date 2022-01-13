import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 9
    };
  }

  componentDidUpdate() {
    console.log("component updating");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    return (
      <div>
        Class Component Created {this.state.count}
        <div>
        </div>
      </div>
    );
  }
}

export default ClassComponent;
