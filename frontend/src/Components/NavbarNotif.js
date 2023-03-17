import React from 'react';

function NavbarNotif() {
  return (
    <div className="notification-card" style={{ display: 'flex', flexGrow: 1 }}>
      <div className="icon-container">
        <i className="fa fa-bell"></i>
      </div>
      <div className="content">
        <h3 className='card-head'>Notification </h3>
        <div className="divider-notif"></div>
        <p id='card-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  );
}

function NavbarNotifContainer() {
  return (
    <div style={{ display: 'flex' }}>
      <NavbarNotif />
      <NavbarNotif />
      <NavbarNotif />
      <NavbarNotif />
      
    </div>
  );
}

export default NavbarNotifContainer;