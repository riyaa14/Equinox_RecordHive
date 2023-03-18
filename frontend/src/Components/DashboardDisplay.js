import React, { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";


function DashboardDisplay() {

  const navigate = useNavigate();
  const [user, setUser] = useState();


  async function getUser() {
    const res = await fetch("http://localhost:3007/api/user/whoami", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //"Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    const data = await res.json();
    if (data.success === true) {
      setUser(data.user);
    } else {
      navigate("/Login");
    }
  }

  useEffect(() => {
    getUser();
  });

  return (
    <div>
      <div className="flex-containerdis">
        <div className="left">
          <label htmlFor="enrollment-no">Enrollment No:</label>
          <input type="text" id="enrollment-no" name="enrollment-no" placeholder={user ? user.enrollNo : ""} disabled />
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder={user ? user.name : ""} disabled />
          <label htmlFor="gender">Gender:</label>
          <select id="gender" name="gender" placeholder="Female" disabled>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          <label htmlFor="category">Category:</label>
          <select id="category" name="category" placeholder="General" disabled>
            <option value="general">General</option>
            <option value="obc">OBC</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
          </select>
          <label htmlFor="region">Region:</label>
          <input type="text" id="region" name="region" placeholder="New Delhi" disabled />
        </div>
        <div className="right">
          <div className="profile-icon"></div>
          <label htmlFor="dob">DOB:</label>
          <input type="text" id="dob" name="dob" placeholder="12-09-2003" disabled />
          <label htmlFor="sub-category">Sub-Category:</label>
          <select id="sub-category" name="sub-category" disabled>
            <option value="none">None</option>
            <option value="a">A</option>
            <option value="b">B</option>
            <option value="c">C</option>
          </select>
          <label htmlFor="student-status">Student Status:</label>
          <div id="student-status">
            <label>
              <input type="radio" name="status" value="active" disabled />
              Active
            </label>
            <label>
              <input type="radio" name="status" value="inactive" disabled />
              Inactive
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardDisplay;
