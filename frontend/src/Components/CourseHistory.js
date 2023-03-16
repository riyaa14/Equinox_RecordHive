import React , {useEffect, useState } from "react";
import CardCourses from "./CardCourses";

const CourseHistory = (props) => {
  const { sid } = props

  const [course, setCourse] = useState(null);

  async function getCourseHistory(e) {
    const res = await fetch(`http://localhost:3007/api/course/history/6412fc8ee4bb88ae86e0f7fd`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    const data = await res.json();
    //console.log(data);
    if (data.success === true) {
        setCourse(data.courses);
        // console.log(data);
    } 
  }

  useEffect(() => {
    getCourseHistory();
  }, []);

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

        <div className="homeright">
            {
            course && course.length > 0 ? course.map((cour)=>(
            <div color="white" key={cour._id}>
          <CardCourses
            courseId={cour.name}
            semesterId="2nd" 
            marks={cour.marks}
            credits={cour.credits} 
            sid={sid}
          />
          </div>

)) : <h3 style={{color:"black"}}>No courses yet</h3>
 }
 </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default CourseHistory;
