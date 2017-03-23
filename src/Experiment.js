import React, { Component } from "react";

class Experiment extends Component {
  componentDidMount() {
    document.title = "Hexacta - " + this.props.info.title;
  }

  render() {
    return <div>{this.props.info.title}</div>;
  }
}

export default Experiment;
