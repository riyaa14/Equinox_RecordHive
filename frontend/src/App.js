import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";

// pages
import StudentRecords from "./Pages/StudentRecords";
import TranscriptRequestTracker from "./Pages/TranscriptRequestTracker";
import StudentProfile from "./Pages/StudentProfile";
import TranscriptRequestSubmit from "./Pages/TranscriptRequestSubmit";
import LoginForm from "./Components/Loginform/Loginform";
import Sidebar from "./Components/SideBarAdminSide";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/login" && <Sidebar />}
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/StudentRecords" element={<StudentRecords />} />
        <Route path="/Transcripts" element={<TranscriptRequestTracker />} />
        <Route path="/request" element={<TranscriptRequestSubmit />} />
        <Route path="/profile" element={<StudentProfile />} />
      </Routes>
    </>
  );
}

export default App;
