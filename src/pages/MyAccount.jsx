import React from "react";
import "../assets/styles/MyAccount.css";

const MyAccount = () => {
  return (
    <div className="my-account-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h3 className="sidebar-title">My Account</h3>
        <ul className="sidebar-menu">
          <li>My Profile</li>
          <li>Balance Overview</li>
          <li>Account Statement</li>
          <li>My Bets</li>
        </ul>
      </div>

      {/* Account Details */}
      <div className="account-details">
        <h4 className="section-title">Account Details</h4>

        <div className="account-details-inner">
          <div className="section">
            <div className="subsection">
              <h5 className="subsection-title">About You</h5>
              <ul>
                <li>First Name <span>null</span></li>
                <li>Last Name <span>null</span></li>
                <li>Birthday <span>null</span></li>
                <li>Password <span>null</span></li>
              </ul>
            </div>
          </div>

          <div className="section">
            <h5 className="subsection-title">Setting</h5>

            <div className="subsection">
              <h5 className="subsection-title">Commission</h5>
            </div>
          </div>

          <div className="section">
            <h5 className="subsection-title">Address</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
