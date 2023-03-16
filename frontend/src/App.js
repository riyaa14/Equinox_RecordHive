import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";

// pages
import StudentRecords from "./Pages/StudentRecords";
import TranscriptRequestTracker from "./Pages/TranscriptRequestTracker";
import LoginForm from "./Components/Loginform/Loginform";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<LoginForm />} />
        <Route
          path="/"
          element={
            <NavBar>
              <StudentRecords />
            </NavBar>
          }
        />
        <Route
          path="/Transcripts"
          element={
            <NavBar>
              <TranscriptRequestTracker />
            </NavBar>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
