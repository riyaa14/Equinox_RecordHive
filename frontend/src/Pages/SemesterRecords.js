// components
import { useState, useEffect } from "react";
import SemesterCards from "../Components/SemesterCards";
import SemesterForm from "../Components/SemesterForm";

function SemesterRecords() {
  const [popUp, setPopUp] = useState(null);
  const [semRecords, setSemRecords] = useState(null);

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch("http://localhost:3007/api/semester/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*", // Required for CORS support to work
        },
        credentials: "include",
      });
      const json = await response.json();
      if (response.ok) {
        setSemRecords(json);
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
            ADD NEW SEMESTER
          </button>
          {semRecords &&
            semRecords.map((semester) => {
              return (
                <SemesterCards
                  key={semester._id}
                  semNo={semester.semNo}
                  semStart={semester.semStart}
                  semEnd={semester.semEnd}
                  semType={semester.semType}
                />
              );
            })}

          <SemesterForm trigger={popUp} setTrigger={setPopUp} />
        </div>
      </div>
    </div>
  );
}

export default SemesterRecords;
