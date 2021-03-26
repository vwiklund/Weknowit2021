import React from "react";
import "./MyForm.css";

const MyForm = (props) => {
  return (
    <div className="Title">
      <form onSubmit={props.onSubmit}>
        <input type="text" name="input" placeholder={props.ph} />
        <button>Go</button>
      </form>
    </div>
  );
};
export default MyForm;
