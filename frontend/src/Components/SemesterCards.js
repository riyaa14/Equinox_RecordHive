import React from "react";
import { useState } from "react";

function SemesterCards(props) {
  return (
    <div>
      {/* <div className="transcript-requests-cards">
        <h4>Course Name: {props.semNo}</h4>
        <p>Description: {props.semStart}</p>
        <p>Course Code: {props.semEnd}</p>
        <p>Credit: {props.semType}</p>
        <div> */}
      <div className="transcript-requests-cards">
        <h4>Semester Number: </h4>
        <p>Start Date: </p>
        <p>End Date: </p>
        <p>Type: </p>
        <div>
          <button className="edit-course-marks">Edit Semester</button>
          <button className="edit-course-marks">Remove Semester</button>
        </div>
      </div>
    </div>
  );
}

export default SemesterCards;
