import React from "react";

function NavbarNotif(props) {
  return (
    <div className="notification-card" style={{ display: "flex", flexGrow: 1 }}>
      <div className="icon-container">
        <i className="fa fa-bell"></i>
      </div>
      <div className="content">
        <h3 className="card-head">Notification </h3>
        <div className="divider-notif"></div>
        <p id="card-text">{props.msg}</p>
      </div>
    </div>
  );
}

function NavbarNotifContainer() {
  return (
    <div style={{ display: "flex" }}>
      <NavbarNotif msg="You have failed in Applied Physics II." />
      <NavbarNotif msg="Deadline for Semester Registration is 30-03-2023" />
      <NavbarNotif msg="Your fee is due" />
      <NavbarNotif msg="Your graduation Requirement: need 5 credits" />
    </div>
  );
}

export default NavbarNotifContainer;
