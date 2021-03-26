import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { NoMatch } from "./pages/NoMatch";
import SearchByCity from "./pages/SearchByCity/SearchByCity";
import SearchByCountry from "./pages/SearchByCountry/SearchByCountry";
import title from "./components/title/title";
import { SearchByCityResaults } from "./pages/SearchByCityResaults";
import { SearchByCountryResaults } from "./pages/SearchByCountryResaults";
import myForm from "./components/myForm/myForm";

class App extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <h1>sd</h1>
          <title />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/searchbyCity" component={SearchByCity} />
            <Route exact path="/searchbyCountry" component={SearchByCountry} />
            <Route exact path="/" component={Home} />
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
