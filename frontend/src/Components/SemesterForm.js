import React from "react";
import { useState } from "react";

const SemesterForm = (props) => {
  const [err, seterr] = useState(null);
  const [semNo, setsemNo] = useState(null);
  const [semStart, setsemStart] = useState(null);
  const [semEnd, setsemEnd] = useState(null);
  const [semType, setsemType] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const course = { semNo, semStart, semEnd, semType };

    const res = await fetch("http://localhost:3007/api/semester/create", {
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
      setsemNo("");
      setsemStart("");
      setsemEnd("");
      setsemType("");
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
          <h3>ADD A NEW SEMESTER</h3>

          <label>SEMESTER NUMBER:</label>
          <input
            type="text"
            onChange={(e) => {
              setsemNo(e.target.value);
            }}
            value={semNo}
          />

          <label>START DATE:</label>
          <input
            type="text"
            onChange={(e) => {
              setsemStart(e.target.value);
            }}
            value={semStart}
          />

          <label>END DATE: </label>
          <input
            type="text"
            onChange={(e) => {
              setsemEnd(e.target.value);
            }}
            value={semEnd}
          />

          <label>SEMESTER TYPE(ODD/EVEN): </label>
          <input
            type="text"
            onChange={(e) => {
              setsemType(e.target.value);
            }}
            value={semType}
          />

          {err && <div className="error">{err}</div>}
          <button> ADD SEMESTER </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
};

export default SemesterForm;
