import React, { Component } from "react";
import Button from "./Button";
import ExperimentSection from "./ExperimentSection";
import "./Experiment.css";

class Experiment extends Component {
  componentDidMount() {
    document.title = "Hexacta - " + this.props.info.title;
  }

  render() {
    const {
      title,
      description,
      video,
      launch,
      repo,
      sections
    } = this.props.info;
    const secs = sections.map((section, i) => (
      <ExperimentSection key={i} {...section} />
    ));
    return (
      <div className="experiment">
        <header>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <nav>
            <Button href={launch} filled>Launch</Button>
            <Button href={repo}>Get The Code</Button>
          </nav>
        </header>
        <div className="experiment-video landscape">
          <iframe src={video} frameBorder="0" allowFullScreen />
        </div>
        {secs}
      </div>
    );
  }
}

export default Experiment;
