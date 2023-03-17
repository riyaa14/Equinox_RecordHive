import React from 'react'

function DashboardDisplay() {
  return (
    <div>
      <div className="flex-containerdis" >
      <div className="left">
        <label htmlFor="enrollment-no">Enrollment No:</label>
        <input type="text" id="enrollment-no" name="enrollment-no" disabled/>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" disabled />
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" disabled>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <label htmlFor="category">Category:</label>
        <select id="category" name="category" disabled>
          <option value="general">General</option>
          <option value="obc">OBC</option>
          <option value="sc">SC</option>
          <option value="st">ST</option>
        </select>
        <label htmlFor="region">Region:</label>
        <input type="text" id="region" name="region" disabled />
      </div>
      <div className="right">
        <div className="profile-icon"></div>
        <label htmlFor="dob">DOB:</label>
        <input type="text" id="dob" name="dob" disabled/>
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
            <input type="radio" name="status" value="active" disabled/>
            Active
          </label>
          <label>
            <input type="radio" name="status" value="inactive" disabled/>
            Inactive
          </label>
        </div>
      </div>
    </div>
    </div>
  )
}