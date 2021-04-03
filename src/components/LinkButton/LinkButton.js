import React from "react";
import { Link } from "react-router-dom";
import "./linkButton.css";

const LinkButton = (props) => {
  return (
    <div className="containerLinkButton">
      <Link to={props.to}>
        <button className="linkButton">{props.ph}</button>
      </Link>
    </div>
  );
};
export default LinkButton;
