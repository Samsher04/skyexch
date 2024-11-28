import React from "react";
import "../assets/styles/Menu_Middle.css";
import Footer from "./Footer/Footer";
import banner from "../assets/images/kv_cricket.jpg";
import SportsCard from "./SportsCard";

const Menu_Middle = () => {
  const sportsData = [
    {
      name: "Cricket",
      events: [
        {
          title: "India v England",
          matched: "PTE68,239",
          odds: [
            { back: "1.2", lay: "1.5" },
            { back: "2.0", lay: "2.5" },
            { back: "2.5", lay: "3.0" },
          ],
        },
        {
          title: "Australia v Pakistan",
          matched: "PTE68,240",
          odds: [
            { back: "1.1", lay: "1.3" },
            { back: "2.1", lay: "2.6" },
            { back: "3.0", lay: "3.5" },
          ],
        },
        {
          title: "New Zealand v South Africa",
          matched: "PTE68,241",
          odds: [
            { back: "1.3", lay: "1.6" },
            { back: "2.3", lay: "2.8" },
            { back: "3.5", lay: "4.0" },
          ],
        },
        {
          title: "Sri Lanka v West Indies",
          matched: "PTE68,242",
          odds: [
            { back: "1.4", lay: "1.7" },
            { back: "2.2", lay: "2.9" },
            { back: "4.0", lay: "4.5" },
          ],
        },
        {
          title: "Bangladesh v Afghanistan",
          matched: "PTE68,243",
          odds: [
            { back: "1.0", lay: "1.2" },
            { back: "1.8", lay: "2.4" },
            { back: "3.2", lay: "3.7" },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="Middle-wraper">
        <div className="cricket-banner">
          <img src={banner} alt="" />
        </div>

        <div className="Highlights-Head">
          <h4>Sports Highlights</h4>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <p>View By</p>
            <div class="select">
              <select id="viewType" name="View">
                <option id="competitionName" value="competitionName">
                  Competition
                </option>
                <option id="openDateTime" value="openDateTime" selected="Time">
                  Time
                </option>
                <option id="totalMatched" value="totalMatched">
                  Matched
                </option>
              </select>
            </div>
          </div>
        </div>

        <SportsCard sportsData={sportsData} />

        <Footer />
      </div>
    </>
  );
};

export default Menu_Middle;
