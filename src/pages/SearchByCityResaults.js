import React from "react";
import "./styling.css";
export const SearchByCityResaults = (props) => (
  <div className="center">
    <div className="resaultsContainer">
      <div className="centerColumn">
        <p className="center">{props.location.state.city}</p>
        <h1 className="center">{props.location.state.population}</h1>
      </div>
    </div>
  </div>
);
