import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Title } from "./components/Title/Title";
class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Title />
          <h1>sdf</h1>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
