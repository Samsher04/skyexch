import React from "react";
import "../assets/styles/Cricket.css";
import Menu_select from "../components/Menu_select";
import Menu_Middle from "../components/Menu_Middle";
import Bet_slip from "../components/Bet_slip";

const Multimarket = () => {


  const menuItems = [
    { title: "Sports", isHeader: true },
    { title: "All Sports", isHeader: false },
    { title: "Cricket", isHeader: false },
    { title: "Soccer", isHeader: false },
    { title: "Tennis", isHeader: false },
    { title: "E_soccer", isHeader: false },
    { title: "FancyBet", isHeader: false },
    { title: "Kabaddi", isHeader: false },
  ];

  return (
    <>
      <div className="Cricket-wrap">
        <Menu_select menuItems={menuItems}/>
        <div
          className="Middle-wraper"
          style={{ paddingTop: "8px", fontFamily: "sans-serif" }}
        >
          <h4 style={{ fontSize: "13.8px" }}>Multi Markets</h4>
          <p style={{ fontSize: "12px", marginTop: "5px" }}>
            There are currently no followed multi markets.
          </p>
        </div>
        <Bet_slip />
      </div>
    </>
  );
};

export default Multimarket;
