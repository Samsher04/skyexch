import React from "react";
import Menu_select from "../../../components/Menu_select";
import Bet_slip from "../../../components/Bet_slip";
import LiveMiddle from "../../../components/LiveBets/LiveMiddle";

const Livebeat = () => {
  const menuItems = [
    { title: "Sports", isHeader: true },
    { title: "All Sports", isHeader: false },
    { title: "Cricket", isHeader: true },
    { title: "Common", isHeader: false },
    { title: "Abu Dhabi T10", isHeader: false },
    { title: "ICC Men's T20 WC Asia Qualifier", isHeader: false },
    { title: "Indian Premier League", isHeader: false },
    { title: "One Day Internationals", isHeader: false },
    { title: "Sheffield Shield", isHeader: false },
    { title: "Test Matches", isHeader: false },
    { title: "Test Matches Series Markets", isHeader: false },
    { title: "Twenty20 Big Bash", isHeader: false },
    { title: "WBBL", isHeader: false },
    { title: "Womens International Twenty20 Matches", isHeader: false },
    { title: "Womens One Day Internationals", isHeader: false },
    { title: "Others", isHeader: false },
  ];

  const marketData = [
    {
      title: "WINNER",
      minMax: "100 - 500000",
      players: [
        { name: "PLAYER A", odds: 1.98, amount: 2822699 },
        { name: "PLAYER B", odds: 1.98, amount: 2822699 },
      ],
    },
    
    
  ];

  return (
    <>
      <div className="Cricket-wrap">
        <Menu_select menuItems={menuItems} />
          <LiveMiddle marketData={marketData}/>
        <Bet_slip />
      </div>
    </>
  );
};



export default Livebeat
