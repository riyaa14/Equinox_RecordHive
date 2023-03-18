import React from "react";
import { useState } from "react";

function SemesterCards(props) {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:3007/api/semester/delete/${props.semId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        credentials: "include",
      }
    );
    const json = await response.json();

    if (response.ok) {
      setDeleted(true);
    }
    if (json.success === false) {
      console.log(json.message);
    }
  };
  return (
    <div>
      {deleted ? null : (
        <div className="transcript-requests-cards">
          <h4>Semester Number: {props.semNo} </h4>
          <p>Start Date: {props.semStart} </p>
          <p>End Date: {props.semEnd} </p>
          <p>Type: {props.semType} </p>
          <div>
            <button className="edit-course-marks">Edit Semester</button>
            <button className="edit-course-marks" onClick={handleDelete}>
              Remove Semester
            </button>
            <button className="edit-course-marks">View Courses</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SemesterCards;
