// components
import { useState, useEffect } from "react";
import CourseCards from "../Components/CourseCards";
import CourseForm from "../Components/CourseForm";

function CourseRecords() {
  const [popUp, setPopUp] = useState(null);
  const [courseRecords, setCourseRecords] = useState(null);

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch("http://localhost:3007/api/course/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        credentials: "include",
      });
      const json = await response.json();
      if (response.ok) {
        setCourseRecords(json);
      }
    };
    fetchRecords();
  }, []);

  return (
    <div className="main-content">
      <div className="home">
        <div>
          <button
            className="addNew"
            onClick={() => {
              setPopUp(true);
            }}
          >
            ADD NEW COURSE
          </button>
          {courseRecords &&
            courseRecords.map((course) => {
              return (
                <CourseCards
                  key={course._id}
                  name={course.name}
                  desc={course.desc}
                  code={course.code}
                  credit={course.credit}
                />
              );
            })}

          {/* <CourseCards
            key="1"
            name="bjwqx"
            desc="qbwjd "
            code="bqj"
            credit="kd"
          /> */}

          <CourseForm trigger={popUp} setTrigger={setPopUp} />
        </div>
      </div>
    </div>
  );
}

export default CourseRecords;
