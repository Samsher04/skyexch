import React from "react";
import "./Navbar.css";
import { FaUser, FaCog } from "react-icons/fa";
import { MdSearch, MdOutlineLogin } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";
import Logo from "../../../public/logo.png";
import Bach from "../../../public/wireless.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Top Navbar */}
      <div className="navbar-top">
        <div className="logo_search_box">
          <div className="navbar-logo">
            <img src={Logo} alt="Logo" className="logo" />
          </div>

          <div className="search-bar">
            <MdSearch className="search-icon" />
            <input type="text" placeholder="Search Events" />
            <div className="search-close">
              <HiXMark className="close-icon" />
            </div>
          </div>
        </div>

        <div className="auth-container">
          <div className="user-section">
            <FaUser className="user-icon" />
            <input type="text" placeholder="Username" className="auth-input" />
          </div>
          <input
            type="password"
            placeholder="Password"
            className="auth-input"
          />
          <div className="validation">
            <input
              type="text"
              placeholder="Validation"
              className="auth-input"
            />
            <span className="validation-number">6043</span>
          </div>
          <button className="auth-btn login-btn">
            Login <MdOutlineLogin />
          </button>
          <button className="auth-btn signup-btn">Sign Up</button>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="navbar-bottom">
        <ul className="navbar-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/in-play">In-Play</NavLink>
          </li>
          <li>
            <NavLink to="/multi-markets">Multi Markets</NavLink>
          </li>
          <li>
            <NavLink to="/cricket">
              Cricket
              <div className="badge">
                <strong className="bach-box">
                  <img src={Bach} alt="" />
                </strong>
                <span className="badge-text">9</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/soccer">
              Soccer
              <div className="badge">
                <strong className="bach-box">
                  <img src={Bach} alt="" />
                </strong>
                <span className="badge-text">9</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/tennis">Tennis</NavLink>
          </li>
          <li>
            <NavLink to="/virtual-cricket">Virtual Cricket</NavLink>
          </li>
          <li>
            <NavLink to="/e-soccer">
              E-Soccer
              <div className="badge">
                <strong className="bach-box">
                  <img src={Bach} alt="" />
                </strong>
                <span className="badge-text">9</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink to="/kabaddi">
              Kabaddi
              <div className="badge">
                <strong className="bach-box">
                  <img src={Bach} alt="" />
                </strong>
                <span className="badge-text">0</span>
              </div>
            </NavLink>
          </li>
        </ul>

        <div className="navbar-right">
          <span className="time-zone">
            Time Zone: <b style={{ color: "black" }}>GMT +5:30</b>
          </span>
          <button className="btn-one-click">One Click Bet</button>
          <span className="settings">
            Setting <FaCog className="settings-icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
