import React from "react";
import SideBar from "../Components/SideBarStudent";
import "./Request.css";
import OfficialScriptReq from "../Components/OfficialScriptReq";
function Request() {
  return (
    <div id="requestbg">
      
      <OfficialScriptReq></OfficialScriptReq>
      <SideBar></SideBar>
    </div>
  );
}

export default Request;
