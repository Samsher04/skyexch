import React from "react";
import "../assets/styles/Bet_slip.css";

const Bet_slip = () => {
  return (
    <div className="bet_slip-wrap">
      <h3>
        <a className="to-expand">Bet Slip</a>
      </h3>
      <p className="noBetSlipInfo">Click on the odds to add selections to the betslip.</p>
    </div>
  );
};

export default Bet_slip;
