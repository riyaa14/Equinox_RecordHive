import React from "react";
import { Link } from "react-router-dom";
const { useState } = require("react");

const CourseForm = (props) => {
  const [err, seterr] = useState(null);
  const [name, setname] = useState(null);
  const [desc, setDesc] = useState(null);
  const [code, setcode] = useState(null);
  const [credit, setcredit] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const course = { desc, name, code, credit };

    const res = await fetch("http://localhost:3007/api/course/create", {
      method: "POST",
      body: JSON.stringify(course),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });

    const json = res.json();

    if (!res.ok) {
      seterr(json.err);
    }
    if (res.ok) {
      props.setTrigger(false);
      setDesc("");
      setcode("");
      setcredit("");
      setname("");
      seterr(null);
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form className="create" onSubmit={handleSubmit}>
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          <h3>ADD A NEW COURSE</h3>

          <label>COURSE NAME:</label>
          <input
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
            value={name}
          />

          <label>DESCRIPTION:</label>
          <input
            type="text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            value={desc}
          />

          <label>CODE: </label>
          <input
            type="text"
            onChange={(e) => {
              setcode(e.target.value);
            }}
            value={code}
          />

          <label>CREDITS: </label>
          <input
            type="text"
            onChange={(e) => {
              setcredit(e.target.value);
            }}
            value={credit}
          />
          {err && <div className="error">{err}</div>}
          <button> ADD COURSE </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default CourseForm;
