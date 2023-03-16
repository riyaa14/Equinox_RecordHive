import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";

// pages
import StudentRecords from "./Pages/StudentRecords";
import TranscriptRequestTracker from "./Pages/TranscriptRequestTracker";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element=<StudentRecords /> />
          <Route path="/Transcripts" element=<TranscriptRequestTracker /> />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
