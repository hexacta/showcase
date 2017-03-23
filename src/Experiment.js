import React, { Component } from "react";
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
          <div>
            <a href={launch}>Launch</a>
            <a href={repo}>Get The Code</a>
          </div>
        </header>
        <div className="experiment-video landscape">
          <iframe src={video} frameBorder="0" allowFullScreen />
        </div>
      </div>
    );
  }
}

export default Experiment;
