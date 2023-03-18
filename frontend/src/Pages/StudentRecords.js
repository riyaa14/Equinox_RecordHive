// components
import { useState, useEffect } from "react";
import Cards from "../Components/Cards";
import StudentForm from "../Components/StudentForm";
import GPA from "../Components/GPA";
import CourseHistory from "../Components/CourseHistory";
import Profile from "../Components/Profile";
import { Button } from "react-bootstrap";

function StudentRecords() {
  const [popUp, setPopUp] = useState(false);
  const [GPApopUp, setGPAPopUp] = useState(false);
  const [CoursepopUp, setCoursePopUp] = useState(false);
  const [ProfilepopUp, setProfilePopUp] = useState(false);

  const [users, setAllUsers] = useState(null);
  const [name, setName] = useState(null);

  async function getAllStudents(name = "") {
    const res = await fetch(
      `http://localhost:3007/api/user/users?keyword=${name}`,
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
      setAllUsers(data.users);
    }
  }

  async function searchHandler(e) {
    e.preventDefault();
    const res = await fetch(
      `http://localhost:3007/api/user/users?keyword=${name}`,
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
      setAllUsers(data.users);
    }
  }

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div className="main-content">
      <button
        className="addNew"
        onClick={() => {
          setPopUp(true);
        }}
      >
        ADD NEW STUDENT
      </button>
      <div className="home">
        <div className="students">
          <form onSubmit={searchHandler}>
            <input
              type="text"
              value={name}
              placeholder="Search Name"
              onChange={(e) => setName(e.target.value)}
            />
            <Button type="submit">Search</Button>

            <div className="homeright">
              {users && users.length > 0 ? (
                users.map((user) => (
                  <div color="white" key={user._id}>
                    <Cards
                      setGPAPopUp={setGPAPopUp}
                      setCoursePopUp={setCoursePopUp}
                      setProfilePopUp={setProfilePopUp}
                      userId={user._id}
                      name={user.name}
                      enrollNo={user.enrollNo}
                      branch={user.branch}
                      graduation_year={user.graduation_year}
                    />
                  </div>
                ))
              ) : (
                <h3 style={{ color: "black" }}>No students yet</h3>
              )}
            </div>
          </form>
        </div>

        <GPA trigger={GPApopUp} setTrigger={setGPAPopUp} />
        <Profile trigger={ProfilepopUp} setTrigger={setProfilePopUp} />
        <CourseHistory trigger={CoursepopUp} setTrigger={setCoursePopUp} />
        <StudentForm trigger={popUp} setTrigger={setPopUp} />
      </div>
    </div>
  );
}

export default StudentRecords;
