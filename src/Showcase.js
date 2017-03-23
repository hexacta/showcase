import React, { Component } from "react";
import { Link } from "react-router-dom";

class Showcase extends Component {
  render() {
    const Exp = ({ experiment }) => (
      <li><Link to={"/" + experiment.name}>{experiment.title}</Link></li>
    );
    const experiments = this.props.experiments.map(exp => (
      <Exp key={exp.name} experiment={exp} />
    ));
    return <ul>{experiments}</ul>;
  }
}

export default Showcase;
