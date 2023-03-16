import React from "react";
import { Link } from "react-router-dom";
const { useState } = require("react");

const CourseForm = (props) => {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form className="create">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          <h3>ADD A NEW COURSE</h3>

          <label>COURSE NAME:</label>
          <input type="text" />

          <label>DESCRIPTION:</label>
          <input type="text" />

          <label>CODE: </label>
          <input type="text" />

          <label>CREDITS: </label>
          <input type="text" />

          <button> ADD COURSE </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default CourseForm;
