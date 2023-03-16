import React from 'react';

function ProfileForm() {
  return (
    <div className="form-container">
      <div className="left-column">
        <div className="form-group">
          <label htmlFor="enrollment-no">Enrollment No</label>
          <input type="text" id="enrollment-no" name="enrollment-no" />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select id="gender" name="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <select id="category" name="category">
            <option value="general">General</option>
            <option value="obc">OBC</option>
            <option value="sc">SC</option>
            <option value="st">ST</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="region">Region</label>
          <input type="text" id="region" name="region" />
        </div>
      </div>
      <div className="right-column">
        <div className="form-group">
          <label htmlFor="profile-icon">Profile Icon</label>
          <input type="file" id="profile-icon" name="profile-icon" accept="image/*" />
        </div>
        <div className="form-group">
          <label htmlFor="dob">DOB</label>
          <input type="date" id="dob" name="dob" />
        </div>
        <div className="form-group">
          <label htmlFor="sub-category">Sub Category</label>
          <input type="text" id="sub-category" name="sub-category" />
        </div>
        <div className="form-group">
          <label htmlFor="student-status">Student Status</label>
          <input type="text" id="student-status" name="student-status" />
        </div>
      </div>
    </div>
  );
}

export default ProfileForm;