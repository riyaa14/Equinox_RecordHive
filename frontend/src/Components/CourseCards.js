import React from "react";
import { useState } from "react";

function CourseCards(props) {
  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    const response = await fetch(
      `http://localhost:3007/api/course/delete/${props.courseId}`,
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
          <h4>Course Name: {props.name} </h4>
          <p>Description: {props.desc} </p>
          <p>Course Code: {props.code} </p>
          <p>Credit: {props.credit} </p>
          <div>
            <button className="edit-course-marks">Edit Course</button>
            <button className="edit-course-marks" onClick={handleDelete}>
              Remove Course
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CourseCards;
