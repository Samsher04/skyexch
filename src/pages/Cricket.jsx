import React from "react";
import "../assets/styles/Cricket.css";
import Menu_select from "../components/Menu_select";
import Menu_Middle from "../components/Menu_Middle";
import Bet_slip from "../components/Bet_slip";

const Cricket = () => {
  return (
    <>
      <div className="Cricket-wrap">
        <Menu_select />
        <Menu_Middle />
        <Bet_slip />
      </div>
    </>
  );
};

export default Cricket;
