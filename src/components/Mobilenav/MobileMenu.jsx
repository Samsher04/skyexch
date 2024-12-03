import React from "react";
import { NavLink } from "react-router-dom";
import "./MobileNav.css";
import { IoMdSearch } from "react-icons/io";
import cri from "../../../public/cri1.svg";
import cr2 from "../../../public/cri2.svg";
import cr3 from "../../../public/cri3.svg";
import cr4 from "../../../public/cri4.svg";
import cr5 from "../../../public/cri5.svg";
import Bach from "../../../public/wireless.svg";

const MobileMenu = () => {
  return (
  <>
      <div className="mobile-menu">
      <ul>
        <li>
          <NavLink to="/cricket">
            <img src={cri} alt="" height={17} /> Cricket
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
            <img src={cr2} alt="" height={17} /> Soccer
            <div className="badge">
              <strong className="bach-box">
                <img src={Bach} alt="" />
              </strong>
              <span className="badge-text">9</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/tennis">
            <img src={cr3} alt="" height={17} /> Tennis
            <div className="badge">
              <strong className="bach-box">
                <img src={Bach} alt="" />
              </strong>
              <span className="badge-text">9</span>
            </div>
          </NavLink>
        </li>
        <li>
          <NavLink to="/e-soccer">
            <img src={cr4} alt="" height={17} /> E-Soccer
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
            <img src={cr5} alt="" height={17} /> Kabaddi
            <div className="badge">
              <strong className="bach-box">
                <img src={Bach} alt="" />
              </strong>
              <span className="badge-text">9</span>
            </div>
          </NavLink>
        </li>
      </ul>
      <div className="mobile-search">
        <IoMdSearch />
      </div>
    </div>

    <div className="wrap-highlight_list">
        <h3>Highlights</h3>
    </div>
  </>
  );
};

export default MobileMenu;
