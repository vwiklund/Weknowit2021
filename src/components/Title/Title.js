import React from "react";
import { Link } from "react-router-dom";
import "./title.css";

export const title = () => (
  <div className="Title">
    <Link to="/" style={{ color: "black" }}>
      <h1>CityPop</h1>
    </Link>
  </div>
);
