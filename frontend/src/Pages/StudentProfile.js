import React from "react";
import "./Profile.css";
import SideBar from "../Components/SideBarStudent";
import ProfileForm from "../Components/ProfileForm";
function StudentProfile() {
  return (
    <div id="profilebg">
      <SideBar></SideBar>
      <ProfileForm></ProfileForm>
    </div>
  );
}

export default StudentProfile;
