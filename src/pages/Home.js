import React from "react";
import LinkButton from "../components/LinkButton/LinkButton";

export const Home = () => (
  <div>
    <LinkButton to="/searchbycity" ph="Searrch by city" />
    <LinkButton to="/searchbycountry" ph="Searrch by country" />
  </div>
);
