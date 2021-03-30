import React from "react";
import "./MyForm.css";

const MyForm = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <input type="text" name="input" placeholder={props.ph} />
        <button>Go</button>
      </form>
    </div>
  );
};
export default MyForm;
