import React , { useEffect, useState } from "react";
import EditableField from "./EditableField";

function Cards(props) {
  const {courseId, semesterId, marks, credits, sid} = props


  return (
    <div className="student-course-history">
      <div>
        <h4> {courseId}</h4>
        <p>
          Marks: <EditableField label="edit marks" value={marks} />
        </p>
        <p>{semesterId}</p>
        <p>{credits}</p>
      </div>
      <div>
        {/* <button className="edit-course-marks">Edit Marks</button> */}
      </div>
    </div>
  );
}

export default Cards;
