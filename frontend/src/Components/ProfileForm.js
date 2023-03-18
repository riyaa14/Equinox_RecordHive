import React , { useEffect, useState}  from 'react';
import {useNavigate } from 'react-router-dom';

function ProfileForm() {

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
      <div className="flex-container1" >
      <div className="left">
        <label htmlFor="enrollment-no">Enrollment No:</label>
        <input type="text" id="enrollment-no" name="enrollment-no" placeholder={user ? user.enrollNo : ""} />
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder={user ? user.name : ""}  />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" placeholder="Female" >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" placeholder="General" >
          <option value="general">General</option>
          <option value="obc">OBC</option>
          <option value="sc">SC</option>
          <option value="st">ST</option>
        </select>
        <label htmlFor="region">Region:</label>
        <input type="text" id="region" name="region" placeholder="New Delhi" />
      </div>
      <div className="right">
        <div className="profile-icon"></div>
        <label htmlFor="dob">DOB:</label>
        <input type="text" id="dob" name="dob" placeholder="12-09-2003"  />
        <label htmlFor="sub-category">Sub-Category:</label>
        <select id="sub-category" name="sub-category">
          <option value="none">None</option>
          <option value="a">A</option>
          <option value="b">B</option>
          <option value="c">C</option>
        </select>
        <label htmlFor="student-status">Student Status:</label>
        <div id="student-status">
          <label>
            <input type="radio" name="status" value="active" />
            Active
          </label>
          <label>
            <input type="radio" name="status" value="inactive" />
            Inactive
          </label>
        </div>
      </div>
    </div>
    <div className="flex-container2">
      <div className="left">
        <label htmlFor="enrollment-no">Graduation Year:</label>
        <input type="text" id="enrollment-no" name="enrollment-no" placeholder={user ? user.graduation_year : ""}/>
        
      </div>
      <div className="right">
        
        <label htmlFor="dob">Branch:</label>
        <input type="text" id="dob" name="dob" placeholder={user ? user.branch : ""} />
        
        
      </div>
    </div>
    <div className="flex-container3">
  <div className="left">
    <label htmlFor="aadhar-no">Aadhar No:</label>
    <input type="text" id="aadhar-no" name="aadhar-no" />
    <label htmlFor="nationality">Nationality:</label>
    <input type="text" id="nationality" name="nationality" />
    <label htmlFor="personal-identification">Personal Identification:</label>
    <input type="text" id="personal-identification" name="personal-identification" />
  </div>
  <div className="right">
    <label htmlFor="marital-status">Marital Status:</label>
    <select id="marital-status" name="marital-status">
      <option value="single">Single</option>
      <option value="married">Married</option>
      <option value="divorced">Divorced</option>
      <option value="widowed">Widowed</option>
    </select>
    <label htmlFor="religion">Religion:</label>
    <select id="religion" name="religion">
      <option value="hindu">Hindu</option>
      <option value="muslim">Muslim</option>
      <option value="christian">Christian</option>
      <option value="sikh">Sikh</option>
    </select>
  </div>
</div>
<div className="flex-container4">
  <div className="left">
    <label htmlFor="mobile-no">Mobile No:</label>
    <input type="tel" id="mobile-no" name="mobile-no" />
    <label htmlFor="email-id">Email ID:</label>
    <input type="email" id="email-id" name="email-id" />
  </div>
  <div className="right">
    <label htmlFor="mobile-no2">Mobile No2:</label>
    <input type="tel" id="mobile-no2" name="mobile-no2" />
    <label htmlFor="alternate-email-id">Alternate Email ID:</label>
    <input type="email" id="alternate-email-id" name="alternate-email-id" />
  </div>
</div>
<div className="flex-container5">
  <div className="left">
    <h3>Father's Details</h3>
    <label htmlFor="father-name">Name:</label>
    <input type="text" id="father-name" name="father-name" />
    <label htmlFor="father-mobile-no">Mobile No:</label>
    <input type="tel" id="father-mobile-no" name="father-mobile-no" />
    <label htmlFor="father-occupation">Occupation:</label>
    <input type="text" id="father-occupation" name="father-occupation" />
    <label htmlFor="father-annual-income">Family Annual Income:</label>
    <input type="text" id="father-annual-income" name="father-annual-income" />
  </div>
  <div className="right">
    <h3>Mother's Details</h3>
    <label htmlFor="mother-name">Name:</label>
    <input type="text" id="mother-name" name="mother-name" />
    <label htmlFor="mother-mobile-no">Mobile No:</label>
    <input type="tel" id="mother-mobile-no" name="mother-mobile-no" />
    <label htmlFor="mother-occupation">Occupation:</label>
    <input type="text" id="mother-occupation" name="mother-occupation" />
    <label htmlFor="mother-annual-income">Family Annual Income:</label>
    <input type="text" id="mother-annual-income" name="mother-annual-income" />
  </div>
</div>


    </div>
    
    
  );
}

export default ProfileForm;
