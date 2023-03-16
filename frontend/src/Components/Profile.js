import React from "react";
import { Link } from "react-router-dom";
const { useState } = require("react");

const Profile = (props) => {
  return props.trigger ? (
    <div className="details">
      <div className="details-inner">
        <form className="create">
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          <h3>ADD A NEW STUDENT</h3>

          <label>FULL NAME:</label>
          <input type="text" />

          <label>ENROLLMENT NUMBER:</label>
          <input type="text" />

          <label>YEAR</label>
          <input type="text" />

          <label>BRANCH</label>
          <input type="text" />

          <button>ADD STUDENT RECORD</button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Profile;
