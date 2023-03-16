import React from "react";

function TranscriptCards(props) {
  return (
    <div>
      <div className="transcript-requests-cards">
        <h4>Student Id: {props.studentName}</h4>
        <p>Semester: {props.semesterId}</p>
        <p>Type: {props.status}</p>
        <p>message: {props.message}</p>
        <div>
          <button className="edit-course-marks">APPROVE</button>
          <button className="edit-course-marks">REMOVE</button>
        </div>
      </div>
    </div>
  );
}

export default TranscriptCards;
