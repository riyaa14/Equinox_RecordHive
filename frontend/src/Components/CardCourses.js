import React from "react";

function Cards(props) {
  return (
    <div className="student-course-history">
      <div>
        <h4>Course Name</h4>
        <p>Marks</p>
        <p>Semester</p>
        <p>Branch</p>
      </div>
      <div>
        <button className="edit-course-marks">Edit Marks</button>
      </div>
    </div>
  );
}

export default Cards;
