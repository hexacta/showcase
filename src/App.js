import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Showcase from "./Showcase";
import Experiment from "./Experiment";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Showcase} />
          <Route path="/:name" component={Experiment} />
        </div>
      </Router>
    );
  }
}

export default App;
