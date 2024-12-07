import React, { useState } from "react";
import "../assets/styles/User.css";
import { Link } from "react-router-dom";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { MdArrowForwardIos } from "react-icons/md";
import profileUser from "../../public/profileUser.svg";

function Profile() {
  return (
    <div>
      <div className="user-main-box">
        <div className="saidebox ">
          <div className="saide-header ">
            <div className="box one spotrsone">
              <div className="marquee-box">
                <h4>News</h4>
                <div className="marquee">
                  <div className="js-marquee">
                    <a>
                      <span>07 Dec 2024</span> Event :- New Zealand v England :
                      Market :- 30 Over NZ '96.300.500' (IST 03:46:09 -
                      03:47:12) Bets Voided Because Wrong Rate Offered By
                      Mistake .. Sorry for the Inconvenience Caused
                    </a>
                    <a>
                      <span>07 Dec 2024</span> Event :- New Zealand v England :
                      Market :- 5 Over ENG (2) '20 - 21' (IST 04:42:23 -
                      04:42:27) Bets Voided Because Wrong Rate Offered By
                      Mistake .. Sorry for the Inconvenience&nbsp;Caused
                    </a>
                    <a>
                      <span>07 Dec 2024</span> Event :- New Zealand v England :
                      Market :-29 Over ENG (2) ''Whole Market Voided Because
                      Wrong Rate Offered By Mistake .. Sorry for the
                      Inconvenience&nbsp;Caused
                    </a>
                    <a>
                      <span>07 Dec 2024</span> Event :- Victoria v Rangpur
                      Riders .. Market :- 11 Over VIC ' 89.75.125 ' (IST
                      07:32:54 - 07:33:10) Bets Voided Because of wrong Rate
                      Offered By Mistake .. Sorry for the
                      Inconvenience&nbsp;Caused
                    </a>
                    <a>
                      <span>07 Dec 2024</span> Event :- Australia v India ....
                      Market :- 36 Over AUS '91-92' (IST 09:40:00 - 09:40:14)
                      Bets Voided Because 35.3rd Ball ( NO BALL Shown Late In TV
                      ) .. Sorry for the Inconvenience&nbsp;Caused
                    </a>
                    <a>
                      <span>07 Dec 2024</span> Event :- Australia v India ....
                      Market :- 40 Over AUS '102-103' (IST 09:49:50 - 09:50:08)
                      &amp; 38 Over AUS '97-98' (IST 09:49:53 - 09:50:08) Bets
                      Voided Because 37.1st Ball ( NO BALL Shown Late In TV ) ..
                      Sorry for the Inconvenience&nbsp;Caused
                    </a>
                    <a>
                      <span>07 Dec 2024</span> Event :- Australia v India ....
                      Market :-39 Over AUS '97.75.125' (IST 09:55:40 - 09:55:48)
                      Bets Voided Because 38.3rd Ball ( NO BALL Shown Late In TV
                      ) .. Sorry for the Inconvenience&nbsp;Caused
                    </a>
                  </div>
                </div>
              </div>
              <div className="path-wrap">
                <div className="user-info">
                  <img src={profileUser} alt="" />
                  <h4>Shamsher</h4>
                  <span>Demo</span>
                </div>
                <div className="time-zone2">GMT-5:30</div>
              </div>
              <ul className="leful User">
                <li>
                  <Link to="/myAccount/profile">
                    My Profile
                    <div className="downarrow">
                      <MdArrowForwardIos />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/myAccount/summary">
                    Balance Overview{" "}
                    <div className="downarrow">
                      <MdArrowForwardIos />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/myAccount/current_bets">
                    MY Bets{" "}
                    <div className="downarrow">
                      <MdArrowForwardIos />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/myAccount/bets-history">
                    Bets History
                    <div className="downarrow">
                      <MdArrowForwardIos />
                    </div>
                  </Link>
                </li>

                <li>
                  <Link to="/myAccount/profit-loss">
                    Profit & Loss
                    <div className="downarrow">
                      <MdArrowForwardIos />
                    </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="Account-btn mobile-logout-btn">
            <button>
              LOGOUT <RiLogoutBoxRLine />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
