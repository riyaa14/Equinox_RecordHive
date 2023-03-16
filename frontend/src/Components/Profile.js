import React, { useState, useEffect} from "react";
import EditableField from "./EditableField";

const Profile = (props) => {

  const [user, setUser] = useState(null);

  async function getStudentProfile(e) {
    const res = await fetch(`http://localhost:3007/api/user/profile/6412fc8ee4bb88ae86e0f7fd`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Required for CORS support to work
      },
      credentials: "include",
    });
    const data = await res.json();
    //console.log(data);
    if (data.success === true) {
        setUser(data.user);
        //console.log(user);
    } 
  }

  useEffect(() => {
    getStudentProfile();
  }, []);

  return props.trigger ? (
    <div className="details">
      <div className="details-inner">
        <button
          className="edit-course-marks"
          onClick={() => props.setTrigger(false)}
        >
          close
        </button>
        <h3>STUDENT DETAILS</h3>

        <EditableField label="name" value={user.name} />

        <EditableField label="enroll no" value={user.enrollNo} />

        <EditableField label="branch" value={user.branch} />

        <EditableField label="Graduation Year" value={user.graduation_year} />

        <EditableField label="email" value={user.email} />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Profile;
