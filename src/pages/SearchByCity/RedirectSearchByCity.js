import React from "react";
import { Redirect } from "react-router-dom";

//evaluating states and rredirecting to resaultspage or render error
const RedirectSearchByCity = (props) => (
  <div>
    {props.error && <p className="weather__error">{props.error}</p>}
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
