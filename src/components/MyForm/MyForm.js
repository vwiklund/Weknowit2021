import React from "react";
import "./MyForm.css";
import { IoMdSearch } from "react-icons/io";

const MyForm = (props) => {
  return (
    <div className="container2">
      <form onSubmit={props.onSubmit}>
        <input
          className="MyForm"
          type="text"
          name="input"
          placeholder={props.ph}
        />

        <div className="center">
          <button className="Button">
            <b>
              <IoMdSearch size="30" />
            </b>
          </button>
        </div>
      </form>
    </div>
  );
};
export default MyForm;
