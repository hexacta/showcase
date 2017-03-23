import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Showcase from "./Showcase";
import Experiment from "./Experiment";
import EXPERIMENTS from "./experiments";
import "./App.css";

class App extends Component {
  render() {
    const ShowcaseRoute = () => <Showcase experiments={EXPERIMENTS} />;
    const ExperimentRoute = ({ match }) => (
      <Experiment title={match.params.name} />
    );
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={ShowcaseRoute} />
          <Route path="/:name" component={ExperimentRoute} />
        </div>
      </Router>
    );
  }
}

export default App;
