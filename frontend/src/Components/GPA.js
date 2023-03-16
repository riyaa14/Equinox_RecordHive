import React from "react";
import { Link } from "react-router-dom";
const { useState } = require("react");

const GPA = (props) => {
  const { sid } = props;
  const [gpa, setGPA] = useState(null);
  const [sgpa, setSGPA] = useState(null);


  async function gpaCalcHandler(e) {
    e.preventDefault();
    const res = await fetch(`http://localhost:3007/api/course/gpa/${sid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.success === true) {
        setGPA(data.gpa);
    } 
  }

  async function sgpaCalcHandler(e) {
    e.preventDefault();
    const res = await fetch(`http://localhost:3007/api/course/sgpa/6413061cef21d3fc526c93bc/${sid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.success === true) {
        setSGPA(data.sgpa);
    } 
  }

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

        <button className="get-GPA" onClick={gpaCalcHandler}>TOTAL</button>

        <button className="get-GPA" onClick={sgpaCalcHandler}>SEMESTER-WISE</button>

        <h3>{gpa}</h3>
        <h3>{sgpa}</h3>
      </div>
    </div>
  ) : (
    ""
  );
};

export default GPA;
