import React, { Component } from "react";

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 9,
      data: [],
      isLoading: true,
    };
  }
  componentDidMount() {
    console.log("component mounting");
    this.setState((state) => ({
      count: state.count + 11,
    }));
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }))
      .catch((e) => console.log("Error while fetch data", e));
  }
  componentDidUpdate() {
    console.log("component updating");
  }
  componentWillUnmount() {
    console.log("component will unmount");
  }
  render() {
    let dataTodisplay;
    if (this.state.data.length > 0) {
      dataTodisplay = this.state.data.map((item, i) => {
        return (
            <div key={item.id}>
              {i + 1}. {item.title}
            </div>
        );
      });
    } else {
      dataTodisplay = <div className="loader"></div>;
    }
    return (
      <div>
        Class Component Created {this.state.count}
        <div>
          <h2>Data Count {this.state.data.length}</h2>
          {dataTodisplay}
        </div>
      </div>
    );
  }
}

export default ClassComponent;
