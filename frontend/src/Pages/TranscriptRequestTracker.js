// components
import { useState, useEffect } from "react";
import TranscriptCards from "../Components/TranscriptCards";

function TranscriptRecords() {
  const [TransRecords, setTransRecords] = useState(null);

  useEffect(() => {
    const fetchRecords = async () => {
      const response = await fetch(
        "http://localhost:3007/api/transcript/student/trans"
      );
      const json = await response.json();
      if (response.ok) {
        setTransRecords(json);
      }
    };
    fetchRecords();
  }, []);

  return (
    <div className="main-content">
      <div className="home">
        <div>
          {TransRecords &&
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
            })}
        </div>
      </div>
    </div>
  );
}

export default TranscriptRecords;
