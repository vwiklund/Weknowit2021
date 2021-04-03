import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "../components/LinkButton/LinkButton";
import "./styling.css";

export const SearchByCountryResaults = (props) => (
  <div>
    <div className="Subtitle">
      <header>
        <b>{props.location.state.country}</b>
      </header>
    </div>
    <div className="center">
      <LinkButton
        to={{
          pathname: "/searchbycityresaults",
          state: {
            population: props.location.state.population[0],
            city: props.location.state.city[0],
          },
        }}
        ph={props.location.state.city[0]}
      />
    </div>
    <div className="center">
      <LinkButton
        to={{
          pathname: "/searchbycityresaults",
          state: {
            population: props.location.state.population[1],
            city: props.location.state.city[1],
          },
        }}
        ph={props.location.state.city[1]}
      />
    </div>
    <div className="center">
      <LinkButton
        to={{
          pathname: "/searchbycityresaults",
          state: {
            population: props.location.state.population[2],
            city: props.location.state.city[2],
          },
        }}
        ph={props.location.state.city[2]}
      />
    </div>
  </div>
);
