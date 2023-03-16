// components
import { useState } from "react";
import Cards from "../Components/Cards";
import StudentForm from "../Components/StudentForm";
import GPA from "../Components/GPA";
import CourseHistory from "../Components/CourseHistory";
import Profile from "../Components/Profile";

function StudentRecords() {
  const [popUp, setPopUp] = useState(false);
  const [GPApopUp, setGPAPopUp] = useState(false);
  const [CoursepopUp, setCoursePopUp] = useState(false);
  const [ProfilepopUp, setProfilePopUp] = useState(false);

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
          <Cards
            setGPAPopUp={setGPAPopUp}
            setCoursePopUp={setCoursePopUp}
            setProfilePopUp={setProfilePopUp}
          />
          <Cards
            setGPAPopUp={setGPAPopUp}
            setCoursePopUp={setCoursePopUp}
            setProfilePopUp={setProfilePopUp}
          />
          <Cards
            setGPAPopUp={setGPAPopUp}
            setCoursePopUp={setCoursePopUp}
            setProfilePopUp={setProfilePopUp}
          />
          <Cards
            setGPAPopUp={setGPAPopUp}
            setCoursePopUp={setCoursePopUp}
            setProfilePopUp={setProfilePopUp}
          />
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
