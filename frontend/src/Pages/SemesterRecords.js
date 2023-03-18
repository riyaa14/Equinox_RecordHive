// components
import { useState, useEffect } from "react";
import SemesterCards from "../Components/SemesterCards";
import SemesterForm from "../Components/SemesterForm";
import { Button } from "react-bootstrap";

function SemesterRecords() {
  const [popUp, setPopUp] = useState(null);
  const [semRecords, setSemRecords] = useState(null);
  const [Name, setName] = useState("");

  const fetchRecords = async (Name = "") => {
    const response = await fetch(
      `http://localhost:3007/api/semester/all?keyword=${Name}`,
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
      setSemRecords(json.sems);
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
      setSemRecords(data.sems);
    }
  }

  useEffect(() => {
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
          <form onSubmit={searchHandler}>
            <input
              type="text"
              value={Name}
              placeholder="Search Name"
              onChange={(e) => setName(e.target.value)}
            />
          </form>
          <Button type="submit">Search</Button>
          {semRecords && semRecords.length > 0 ? (
            semRecords.map((semester) => {
              return (
                <SemesterCards
                  key={semester._id}
                  semId={semester._id}
                  semNo={semester.semNo}
                  semStart={semester.semStart}
                  semEnd={semester.semEnd}
                  semType={semester.semType}
                />
              );
            })
          ) : (
            <h3 style={{ color: "black" }}>No Semester Records yet</h3>
          )}

          <SemesterForm trigger={popUp} setTrigger={setPopUp} />
        </div>
      </div>
    </div>
  );
}

export default SemesterRecords;
