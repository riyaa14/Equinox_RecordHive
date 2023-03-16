// components
import { useState } from "react";
import Cards from "../Components/Cards";
import TranscriptCards from "../Components/TranscriptCards";

function StudentRecords() {
  return (
    <div className="main-content">
      <div className="home">
        <div className="students">
          <TranscriptCards />
          <TranscriptCards />
          <TranscriptCards />
          <TranscriptCards />
        </div>
      </div>
    </div>
  );
}

export default StudentRecords;
