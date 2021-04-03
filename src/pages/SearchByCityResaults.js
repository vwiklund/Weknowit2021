import React from "react";
import "./styling.css";

//Renders the resaultspage for search by city
export const SearchByCityResaults = (props) => (
  <div>
    <div className="subtitle">
      <header>
        <b>{props.location.state.city}</b>
      </header>
    </div>
    <div className="center">
      <div className="resaultsContainer">
        <div>
          <div className="center">
            <p>population:</p>
          </div>
          <div className="center">
            <h1>{props.location.state.population}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);
