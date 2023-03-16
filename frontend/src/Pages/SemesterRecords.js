// components
import { useState, useEffect } from "react";
import SemesterCards from "../Components/SemesterCards";
import SemesterForm from "../Components/SemesterForm";

function SemesterRecords() {
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
            ADD NEW SEMESTER
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
          <SemesterCards />
          <SemesterCards />
          <SemesterCards />
          <SemesterCards />

          <SemesterForm trigger={popUp} setTrigger={setPopUp} />
        </div>
      </div>
    </div>
  );
}

export default SemesterRecords;
