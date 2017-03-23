import React, { Component } from "react";

class Experiment extends Component {
  componentDidMount() {
    document.title = "Hexacta - " + this.props.title;
  }

  render() {
    return <div>{this.props.title}</div>;
  }
}

export default Experiment;
