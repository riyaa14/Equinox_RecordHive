import React from "react";
import { useState, useEffect } from "react";
import StudentForm from "../Components/StudentForm";
import GPA from "../Components/GPA";
import CourseHistory from "../Components/CourseHistory";
import Profile from "../Components/Profile";

function Cards(props) {
  const { userId, name, enrollNo, branch, graduation_year } = props;

  const [popUp, setPopUp] = useState(false);
  const [GPApopUp, setGPAPopUp] = useState(false);
  const [CoursepopUp, setCoursePopUp] = useState(false);
  const [ProfilepopUp, setProfilePopUp] = useState(false);
  const handleGPAPopUp = () => {
    setGPAPopUp(true);
  };

  const handleProfilePopUp = () => {
    setProfilePopUp(true);
  };

  const handleCoursePopUp = () => {
    setCoursePopUp(true);
  };

  return (
    <div className="student-record">
      <div>
        <h4>{name}</h4>
        <p>{enrollNo}</p>
        <p>{graduation_year}</p>
        <p>{branch}</p>
      </div>
      <div>
        <button className="edit-student" onClick={handleGPAPopUp}>
          GPA
        </button>
        <button className="edit-student" onClick={handleCoursePopUp}>
          COURSE HISTORY
        </button>
        <button className="edit-student" onClick={handleProfilePopUp}>
          PROFILE
        </button>
      </div>

      <GPA trigger={GPApopUp} setTrigger={setGPAPopUp} sid={userId} />
      <Profile
        trigger={ProfilepopUp}
        setTrigger={setProfilePopUp}
        sid={userId}
      />
      <CourseHistory
        trigger={CoursepopUp}
        setTrigger={setCoursePopUp}
        sid={userId}
      />
      <StudentForm trigger={popUp} setTrigger={setPopUp} sid={userId} />
    </div>
  );
}

export default Cards;
