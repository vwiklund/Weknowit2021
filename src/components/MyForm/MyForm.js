import React from "react";
import "./myForm.css";
import { IoMdSearch } from "react-icons/io";

const MyForm = (props) => {
  return (
    <div className="containerMyForm">
      <form onSubmit={props.onSubmit}>
        <input
          className="myForm"
          type="text"
          name="input"
          placeholder={props.ph}
        />

        <div className="center">
          <button className="button">
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
