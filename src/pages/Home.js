import React from "react";
import LinkButton from "../components/LinkButton/LinkButton";
import "./styling.css";
//Renders homepage
export const Home = () => (
  <div className="center">
    <LinkButton to="/searchbycity" ph="Search by city" />
    <LinkButton to="/searchbycountry" ph="Search by country" />
  </div>
);
