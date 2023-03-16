import React from "react";

function TranscriptCards(props) {
  return (
    <div>
      <div className="transcript-requests-cards">
        <h4>STUDENT NAME</h4>
        <p>ENROLL NUMBER</p>
        <p>Semester</p>
        <p>Branch</p>
        <div>
          <button className="edit-course-marks">APPROVE</button>
          <button className="edit-course-marks">REMOVE</button>
        </div>
      </div>
    </div>
  );
}

export default TranscriptCards;
