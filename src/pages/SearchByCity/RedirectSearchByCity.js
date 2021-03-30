import React from "react";
import { Redirect } from "react-router-dom";
import "../styling.css";

//evaluating states and rredirecting to resaultspage or render error
const RedirectSearchByCity = (props) => (
  <div>
    {props.error && (
      <div className="center">
        <p className="weather__error">{props.error}</p>
      </div>
    )}
    {props.population && (
      <Redirect
        to={{
          pathname: "/searchbycityresaults",
          state: { population: props.population, city: props.city },
        }}
      />
    )}
  </div>
);
export default RedirectSearchByCity;
