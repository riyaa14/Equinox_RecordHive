import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="profile">
          <img src="https://via.placeholder.com/50" alt="Profile" />
          <h4>PRIYA MALIK</h4>
        </div>
      </div>
      <div className="divider"></div>
      <div className="profile-option" id="selectedbutton">
        <span className="button-icon">
          <i className="fa fa-dashboard" style={{ fontSize: "18px" }}></i>
        </span>
        <span style={{ marginLeft: "25px" }}>
          <Link to="/StudentRecords" className="atag">
            Student Records
          </Link>
        </span>
      </div>
      <div className="profile-option">
        <span className="button-icon">
          <i className="fa fa-user" style={{ fontSize: "18px" }}></i>
        </span>
        <span style={{ marginLeft: "30px" }}>
          <Link to="/CourseRecords" className="atag">
            Course Records
          </Link>
        </span>
      </div>

      <div className="profile-option">
        <span className="button-icon">
          <i className="fa fa-file-text" style={{ fontSize: "18px" }}></i>
        </span>
        <span style={{ marginLeft: "25px" }}>
          <Link to="/SemesterRecords" className="atag">
            Semester Records
          </Link>
        </span>
      </div>

      <div className="profile-option">
        <span className="button-icon">
          <i className="fa fa-address-card" style={{ fontSize: "18px" }}></i>
        </span>
        <span className="option-left" style={{ marginLeft: "18px" }}>
          <Link to="/Transcripts" className="atag">
            Transcript Requests
          </Link>
        </span>
      </div>
      <div className="profile-option" id="logoutbutton">
        <span className="option-left" style={{ marginLeft: "18px" }}>
          <a href="#" className="atag">
            LOGOUT
          </a>
        </span>
      </div>
    </div>
  );
}

export default Sidebar;
