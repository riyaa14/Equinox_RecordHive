import React from "react";
import EditableField from "./EditableField";

const Profile = (props) => {
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

        <EditableField label="name" value="Riya" />

        <EditableField label="enroll no" value="00901022021" />

        <EditableField label="branch" value="ECE" />

        <EditableField label="Semester" value="4th" />

        <EditableField label="email" value="riyagarg@gmail.com" />
      </div>
    </div>
  ) : (
    ""
  );
};

export default Profile;
