import React from "react";

export const SearchByCityResaults = (props) => (
  <h1>
    SearchByCityResaults {props.location.state.city}{" "}
    {props.location.state.population}
  </h1>
);
