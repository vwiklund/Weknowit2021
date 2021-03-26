import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.css";

const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <button className="LinkButton">{props.ph}</button>
    </Link>
  );
};
export default LinkButton;
