import React from "react";
import LinkButton from "../components/LinkButton/LinkButton";
import "./styling.css";

export const Home = () => (
  <div className="center">
    <LinkButton to="/searchbycity" ph="Searrch by city" />
    <LinkButton to="/searchbycountry" ph="Searrch by country" />
  </div>
);
