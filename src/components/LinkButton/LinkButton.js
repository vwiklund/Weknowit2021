import React from "react";
import { Link } from "react-router-dom";
import "./LinkButton.css";

const LinkButton = (props) => {
  return (
    <div className="container2">
      <Link to={props.to}>
        <button className="LinkButton">{props.ph}</button>
      </Link>
    </div>
  );
};
export default LinkButton;
