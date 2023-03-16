import React from "react";
import { Link } from "react-router-dom";
const { useState } = require("react");

const GPA = (props) => {
  return props.trigger ? (
    <div className="details">
      <div className="details-inner">
        <button
          className="close-GPA-cal"
          onClick={() => props.setTrigger(false)}
        >
          close
        </button>
        <h3>GET GPA</h3>

        <button className="get-GPA">TOTAL</button>

        <button className="get-GPA">SEMESTER-WISE</button>

        <h3>GPA after calculation</h3>
      </div>
    </div>
  ) : (
    ""
  );
};

export default GPA;
