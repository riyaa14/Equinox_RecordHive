import React from "react";
import { Link } from "react-router-dom";
const { useState } = require("react");

const StudentForm = (props) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [enrollNo, setenrollNo] = useState("");
  const [branch, setbranch] = useState("");
  const [graduation_year, setgraduation_year] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const student = { name, email, enrollNo, branch, graduation_year };

    const res = await fetch("http://localhost:3007/api/user/register/student", {
      method: "POST",
      body: JSON.stringify(student),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });

    const json = await res.json();

    if (!res.ok) {
      setErr(json.err);
    }
    if (res.ok) {
      props.setTrigger(false);
      setErr(null);
      setbranch("");
      setemail("");
      setenrollNo("");
      setgraduation_year("");
      setname("");
    }
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form className="create" onSubmit={handleSubmit}>
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            close
          </button>
          <h3 style={{ color: "white" }}>ADD A NEW STUDENT</h3>

          <label>FULL NAME:</label>
          <input
            type="text"
            onChange={(e) => {
              setname(e.target.value);
            }}
            value={name}
          />

          <label>ENROLLMENT NUMBER:</label>
          <input
            type="text"
            onChange={(e) => {
              setenrollNo(e.target.value);
            }}
            value={enrollNo}
          />

          <label>EMAIL ID</label>
          <input
            type="text"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            value={email}
          />

          <label>GRADUATION YEAR</label>
          <input
            type="text"
            onChange={(e) => {
              setgraduation_year(e.target.value);
            }}
            value={graduation_year}
          />

          <label>BRANCH</label>
          <input
            type="text"
            onChange={(e) => {
              setbranch(e.target.value);
            }}
            value={branch}
          />
          {err && <div className="error">{err}</div>}
          <button>ADD STUDENT RECORD</button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default StudentForm;
