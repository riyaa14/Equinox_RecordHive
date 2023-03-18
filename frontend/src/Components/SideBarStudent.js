import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (id) => {
    setSelectedButton(id);
  };

  async function handleLogOut() {
    const res = await fetch("http://localhost:3007/api/user/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    toast.success("Logout Successful");
    navigate("/Login");
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="profile">
          <img src="https://via.placeholder.com/50" alt="Profile" />
          <h4>PRIYA MALIK</h4>
        </div>
      </div>
      <div className="divider"></div>
      <div
        className={`profile-option ${
          selectedButton === "dashboard" ? "selected" : ""
        }`}
        id="dashboard"
        onClick={() => handleButtonClick("dashboard")}
      >
        <span className="button-icon">
          <i className="fa fa-dashboard" style={{ fontSize: "18px" }}></i>
        </span>
        <span style={{ marginLeft: "25px" }}>
          <Link to="/dashboard" className="atag">
            Dashboard
          </Link>
        </span>
      </div>
      <div
        className={`profile-option ${
          selectedButton === "profile" ? "selected" : ""
        }`}
        id="profile"
        onClick={() => handleButtonClick("profile")}
      >
        <span className="button-icon">
          <i className="fa fa-user" style={{ fontSize: "18px" }}></i>
        </span>
        <span style={{ marginLeft: "30px" }}>
          <Link to="/StudentProfile" className="atag">
            Profile
          </Link>
        </span>
      </div>
      <div
        className={`profile-option ${
          selectedButton === "transcript" ? "selected" : ""
        }`}
        id="transcript"
        onClick={() => handleButtonClick("transcript")}
      >
        <span className="button-icon">
          <i className="fa fa-file-text" style={{ fontSize: "18px" }}></i>
        </span>
        <span style={{ marginLeft: "23px" }}>
          <Link to="/generate" className="atag">
            Generate Transcript
          </Link>
        </span>
      </div>
      <div
        className={`profile-option ${
          selectedButton === "request" ? "selected" : ""
        }`}
        id="request"
        onClick={() => handleButtonClick("request")}
      >
        <span className="button-icon">
          <i className="fa fa-address-card" style={{ fontSize: "18px" }}></i>
        </span>
        <span className="option-left" style={{ marginLeft: "18px" }}>
          <Link to="/request" className="atag">
            Request Transcript
          </Link>
        </span>
      </div>
      <div>
        <span className="option-left" style={{ marginLeft: "18px" }}>
          <Link
            to="/logout"
            className="atag"
            Id="logoutbutton"
            onClick={handleLogOut}
          >
            LOGOUT
          </Link>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
