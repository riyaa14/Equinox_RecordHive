// components
import { useState, useEffect } from "react";
import CourseCards from "../Components/CourseCards";
import CourseForm from "../Components/CourseForm";
import { Button } from "react-bootstrap";

function CourseRecords() {
  const [popUp, setPopUp] = useState(null);
  const [courseRecords, setCourseRecords] = useState(null);
  const [Name, setName] = useState("");

  const fetchRecords = async (Name = "") => {
    const response = await fetch(
      `http://localhost:3007/api/course/all?keyword=${Name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        credentials: "include",
      }
    );
    const json = await response.json();
    if (response.ok) {
      setCourseRecords(json.courses);
    }
  };

  async function searchHandler(e) {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:3007/api/course/all?keyword=${Name}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        credentials: "include",
      }
    );
    const data = await res.json();
    if (data.success === true) {
      setCourseRecords(data.courses);
    }
  }

  useEffect(() => {
    fetchRecords();
  }, []);

  return (
    <div className="main-content">
      <button
            className="addNew"
            onClick={() => {
              setPopUp(true);
            }}
          >
            ADD NEW COURSE
          </button>
      <div className="home">
        <div>
          
          <form onSubmit={searchHandler}>
            <input
              type="text"
              value={Name}
              placeholder="Search Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Button type="submit">Search</Button>
          </form>
          
          {courseRecords && courseRecords.length > 0 ? (
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
            })
          ) : (
            <h3 style={{ color: "black" }}>No Courses yet</h3>
          )}

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
