import React from "react";
import { useState } from "react";

function SemesterCards(props) {
  return (
    <div>
      <div className="transcript-requests-cards">
        <h4>Semester Number: {props.semNo} </h4>
        <p>Start Date: {props.semStart} </p>
        <p>End Date: {props.semEnd} </p>
        <p>Type: {props.semType} </p>
        <div>
          <button className="edit-course-marks">Edit Semester</button>
          <button className="edit-course-marks">Remove Semester</button>
          <button className="edit-course-marks">View Courses</button>
        </div>
      </div>
    </div>
  );
}

export default SemesterCards;
