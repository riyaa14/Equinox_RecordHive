import React from "react";
import CardCourses from "./CardCourses";

const CourseHistory = (props) => {
  return props.trigger ? (
    <div className="details">
      <div className="details-inner">
        <button
          className="close-course-history"
          onClick={() => props.setTrigger(false)}
        >
          close
        </button>
        <h3>COURSE HISTORY</h3>
        <CardCourses />
        <CardCourses />
      </div>
    </div>
  ) : (
    ""
  );
};

export default CourseHistory;
