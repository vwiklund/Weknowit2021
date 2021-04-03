import React from "react";
import { Link } from "react-router-dom";
import "./title.css";

export const Title = () => (
  <div className="title">
    <Link to="/" style={{ color: "black" }}>
      <h1>CityPop</h1>
    </Link>
  </div>
);
