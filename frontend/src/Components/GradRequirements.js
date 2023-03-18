import React, { useState } from "react";

const GradRequirements = (props) => {
  const { sid } = props;
  const [requirements, setRequirements] = useState("");

  async function getRequirementsHandler(e) {
    e.preventDefault();
    const res = await fetch(`http://localhost:3007/api/gr/gradReq/${sid}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.success === true) {
      setRequirements(data.message);
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

        <h3>Graduation Requirements</h3>
        <button onClick={getRequirementsHandler}>View Requirements</button>
      </div>
      <h3>{requirements}</h3>
    </div>
  ) : (
    ""
  );
};

export default GradRequirements;
