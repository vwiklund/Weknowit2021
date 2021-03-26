import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Title } from "./components/Title/Title";
import { Home } from "./pages/Home";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Title />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
