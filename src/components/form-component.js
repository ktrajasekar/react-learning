import React, { Component } from "react";
import Button from "./resuable/button";

class FormComponent extends Component {
  callOclick() {
    console.log("asdasdas");
  }
  handleClick(event) {
    console.log(event.target);
  }
  render() {
    return (
      <div>
        <input type="text"></input>
        <Button name="Test" handleClick={this.handleClick} ></Button>
        <input type="submit" onClick={this.callOclick}></input>
      </div>
    );
  }
}

export default FormComponent;
