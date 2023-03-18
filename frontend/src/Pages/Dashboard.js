import React from "react";
import "./Dashboard.css";
import SideBar from "../Components/SideBarStudent";
import NavbarNotif from "../Components/NavbarNotif";
import DashboardDisplay from "../Components/DashboardDisplay";
function Dashboard() {
  return (
    <div id="dashboardbg">
      <SideBar></SideBar>
      <NavbarNotif></NavbarNotif>
      <DashboardDisplay></DashboardDisplay>
    </div>
  );
}

export default Dashboard;
