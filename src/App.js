import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Title } from "./components/Title/Title";
import { Home } from "./pages/Home";
import SearchByCity from "./pages/SearchByCity/SearchByCity";
import { SearchByCityResaults } from "./pages/SearchByCityResaults";
import SearchByCountry from "./pages/SearchByCountry/SearchByCountry";
import { SearchByCountryResaults } from "./pages/SearchByCountryResaults";
import { NoMatch } from "./pages/NoMatch";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Title />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/searchbycity" component={SearchByCity} />
            <Route exact path="/searchbycountry" component={SearchByCountry} />
            <Route
              exact
              path="/searchbycityresaults"
              component={SearchByCityResaults}
            />
            <Route
              exact
              path="/searchbycountryresaults"
              component={SearchByCountryResaults}
            />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
