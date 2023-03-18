import React from "react";
import { useState, useEffect } from "react";
import StudentForm from "../Components/StudentForm";
import GPA from "../Components/GPA";
import CourseHistory from "../Components/CourseHistory";
import Profile from "../Components/Profile";
import GradRequirements from "./GradRequirements";

function Cards(props) {
  // const { userId, name, enrollNo, branch, graduation_year } = props;

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
        <h4>{props.name}</h4>
        <p>{props.enrollNo}</p>
        <p>{props.graduation_year}</p>
        <p>{props.branch}</p>
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

      <GPA trigger={GPApopUp} setTrigger={setGPAPopUp} sid={props.userId} />
      <Profile
        trigger={ProfilepopUp}
        setTrigger={setProfilePopUp}
        sid={props.userId}
      />
      <CourseHistory
        trigger={CoursepopUp}
        setTrigger={setCoursePopUp}
        sid={props.userId}
      />
      <GradRequirements
        trigger={GradReqPopUp}
        setTrigger={setGradReqPopUp}
        sid={props.userId}
      />
      <StudentForm trigger={popUp} setTrigger={setPopUp} sid={props.userId} />
    </div>
  );
}

export default Cards;
