<<<<<<< HEAD
=======
import React from "react";
import { useState, useEffect } from "react";
import StudentForm from "../Components/StudentForm";
import GPA from "../Components/GPA";
import CourseHistory from "../Components/CourseHistory";
import Profile from "../Components/Profile";
import GradRequirements from "./GradRequirements";

function Cards(props) {
  const { userId, name, enrollNo, branch, graduation_year } = props;

  const [popUp, setPopUp] = useState(false);
  const [GPApopUp, setGPAPopUp] = useState(false);
  const [CoursepopUp, setCoursePopUp] = useState(false);
  const [ProfilepopUp, setProfilePopUp] = useState(false);
  const [GradReqPopUp, setGradReqPopUp] = useState(false);
  const handleGPAPopUp = () => {
    setGPAPopUp(true);
  };

  const handleProfilePopUp = () => {
    setProfilePopUp(true);
  };

  const handleCoursePopUp = () => {
    setCoursePopUp(true);
  };

  const handleGradReqPopUp = () => {
    setGradReqPopUp(true);
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
        <button className="edit-student" onClick={handleGradReqPopUp}>
          Grad Req
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
      <GradRequirements
        trigger={GradReqPopUp}
        setTrigger={setGradReqPopUp}
        sid={userId}
      />
      <StudentForm trigger={popUp} setTrigger={setPopUp} sid={userId} />
    </div>
  );
}

export default Cards;
>>>>>>> bbfdd8c193d8903b3cf6ed2d260b12f2f2f0f49e
