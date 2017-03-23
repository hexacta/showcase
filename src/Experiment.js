import React, { Component } from "react";
import Button from "./Button";
import "./Experiment.css";

class Experiment extends Component {
  componentDidMount() {
    document.title = "Hexacta - " + this.props.info.title;
  }

  render() {
    const { title, description, video, launch, repo } = this.props.info;
    return (
      <div className="experiment">
        <header>
          <div>
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
          <nav>
            <Button href={launch}>Launch</Button>
            <Button href={repo}>Get The Code</Button>
          </nav>
        </header>
        <div className="experiment-video landscape">
          <iframe src={video} frameBorder="0" allowFullScreen />
        </div>
      </div>
    );
  }
}

export default Experiment;
