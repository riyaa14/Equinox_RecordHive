import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";

// pages
import StudentRecords from "./Pages/StudentRecords";
import TranscriptRequestTracker from "./Pages/TranscriptRequestTracker";
import LoginForm from "./Components/Loginform/Loginform";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <NavBar />}
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<StudentRecords />} />
        <Route path="/Transcripts" element={<TranscriptRequestTracker />} />
      </Routes>
    </>
  );
}

export default App;
