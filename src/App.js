import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import NavBar from "./NavBar";
import Showcase from "./Showcase";
import Experiment from "./Experiment";
import EXPERIMENTS from "./experiments";
import "./App.css";

const ShowcaseRoute = () => <Showcase experiments={EXPERIMENTS} />;

const ExperimentRoute = ({ match }) => {
  const exp = EXPERIMENTS.find(e => e.name === match.params.name);
  return exp ? <Experiment info={exp} /> : <div>404</div>;
};

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <NavBar />
            <Route exact path="/" component={ShowcaseRoute} />
            <Route path="/:name" component={ExperimentRoute} />
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
