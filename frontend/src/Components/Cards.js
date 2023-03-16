import React from "react";

function Cards(props) {
  const { setGPAPopUp, setCoursePopUp, setProfilePopUp } = props;

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
        <h4>Name</h4>
        <p>Enroll No</p>
        <p>Year</p>
        <p>Branch</p>
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
    </div>
  );
}

export default Cards;
