import React from "react";
import { Link } from "react-router-dom";

export const SearchByCountryResaults = (props) => (
  <div>
    {" "}
    <header>
      <b>{props.location.state.country}</b>
    </header>
    <Link
      to={{
        pathname: "/searchbycityresaults",
        state: {
          population: props.location.state.population[0],
          city: props.location.state.city[0],
        },
      }}
    >
      <button>
        <b>
          {props.location.state.city[0]} population{": "}
          {props.location.state.population[0]}
        </b>
      </button>
    </Link>
    <Link
      to={{
        pathname: "/searchbycityresaults",
        state: {
          population: props.location.state.population[1],
          city: props.location.state.city[1],
        },
      }}
    >
      <button>
        <b>
          {props.location.state.city[1]} population{": "}
          {props.location.state.population[1]}
        </b>
      </button>
    </Link>
    <Link
      to={{
        pathname: "/searchbycityresaults",
        state: {
          population: props.location.state.population[2],
          city: props.location.state.city[2],
        },
      }}
    >
      <button>
        <b>
          {props.location.state.city[2]} population{": "}
          {props.location.state.population[2]}
        </b>
      </button>
    </Link>
  </div>
);
