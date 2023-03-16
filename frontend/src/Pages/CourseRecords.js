// components
import { useState, useEffect } from "react";
import CourseCards from "../Components/CourseCards";
import CourseForm from "../Components/CourseForm";

function CourseRecords() {
  const [popUp, setPopUp] = useState(null);
  //   const [TransRecords, setTransRecords] = useState(null);

  //   useEffect(() => {
  //     const fetchRecords = async () => {
  //       const response = await fetch(
  //         "http://localhost:3007/api/transcript/student/trans"
  //       );
  //       const json = await response.json();
  //       if (response.ok) {
  //         setTransRecords(json);
  //       }
  //     };
  //     fetchRecords();
  //   }, []);

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
          {/* {TransRecords &&
            TransRecords.map((trans) => {
              return (
                <TranscriptCards
                  key={trans._id}
                  studentId={trans.studentId}
                  semesterId={trans.semesterId}
                  status={trans.status}
                  message={trans.message}
                />
              );
            })} */}
          <CourseCards />
          <CourseCards />
          <CourseCards />
          <CourseCards />

          <CourseForm trigger={popUp} setTrigger={setPopUp} />
        </div>
      </div>
    </div>
  );
}

export default CourseRecords;
