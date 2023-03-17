import React from "react";
import { useState } from "react";

function CourseCards(props) {
  return (
    <div>
      {/* <div className="transcript-requests-cards">
        <h4>Course Name: {props.name}</h4>
        <p>Description: {props.desc}</p>
        <p>Course Code: {props.code}</p>
        <p>Credit: {props.credit}</p>
        <div> */}
      <div className="transcript-requests-cards">
        <h4>Course Name: {props.name} </h4>
        <p>Description: {props.desc} </p>
        <p>Course Code: {props.code} </p>
        <p>Credit: {props.credit} </p>
        <div>
          <button className="edit-course-marks">Edit Course</button>
          <button className="edit-course-marks">Remove Course</button>
        </div>
      </div>
    </div>
  );
}

export default CourseCards;
