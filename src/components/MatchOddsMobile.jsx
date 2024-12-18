import React from "react";
import topIcon from '../../public/betlimit.svg'
import grow from '../../public/grow.svg'


const matchData = {
  matchOdds: [
    {
      team: "Australia Women",
      back: ["1.06", "1.07", "1.29"],
      lay: ["1.09", "1.10", "1.11"],
    },
    {
      team: "India Women",
      back: ["13.5", "14.0", "14.5"],
      lay: ["15.0", "16.0", "17.0"],
    },
  ],
};

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    overflow: "hidden",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f1f5f9",
    borderBottom: "1px solid #ddd",
    fontSize: "14px",
    fontWeight: "bold",
    color: "#333",
  },
  matchedSection: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    width: "60%",
  },
  icon: {
    width: "10.4vw",
    height: "9.3333333333vw",
    backgroundColor: "#e0e6e6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  backLaySection: {
    display: "flex",
    height: "100%",
  },
  matchOddsSection: {
    display: "flex",
    flexDirection: "column",
  },
  teamRow: {
    display: "flex",
    alignItems: "center",
    borderBottom: "1px solid #7e97a7",
    backgroundColor: "#fff",
    justifyContent: "space-between",
  },
  teamName: {
    fontWeight: "600",
    width: "60%",
    fontSize: "4vw",
    paddingLeft: "10px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },

  oddsContainerMain: {
    display: "flex",
  },

  oddsContainer: {
    display: "flex",
    gap: "5px",
  },
  oddsBox: {
    textAlign: "center",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "3.4666666667vw",
    width: "18.6666666667vw",
  },
  backOdds: {
    backgroundColor: "#72bbef",
    borderRight: "1px solid #ffff",
    fontWeight: "bold",
    fontSize: "3.4666666667vw",
    padding:" 1.6vw",
    color:"#1e1e1e"
  },
  layOdds: {
    backgroundColor: "#faa9ba",
    fontWeight: "bold",
    fontSize: "12px",
      padding:" 1.6vw",
        color:"#1e1e1e"
  },
  oddsVolume: {
    fontSize: "10px",
    color: "black",
    fontWeight: "400",
  },
  matchedItem: {
    display: "flex",
    flexDirection: "column",
  },
  BackSection: {
    textAlign: "center",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "12px",
    width: "18.6666666667vw",
    marginTop: "10px",
  },
  LaySection: {
    textAlign: "center",
    padding: "5px 10px",
    cursor: "pointer",
    fontSize: "12px",
    width: "18.6666666667vw",
    marginTop: "10px",
  },
  Matched1:{
    fontSize: "10px",
  },
  Matched1Item:{
    fontSize: "11px",
  }
};

const MatchOddsMobile = () => {
  const handleDataClick = (team, odds, type) => {
    console.log(`Team: ${team}, Odds: ${odds}, Type: ${type}`);
  };

  return (
    <div className="mobile-odds" style={styles.container}>
      {/* Header Section */}
      <div style={styles.header}>
        {/* Matched Section */}
        <div style={styles.matchedSection}>
          <div style={styles.icon} className="topIcon-Box">
            <img
              src={topIcon}
              alt="icon"
              style={{ width: "6.6666666667vw", height: "6.6666666667vw" }}
            />
          </div>
          <div style={{display:"flex", gap:"5px", paddingLeft:"5px"}}>
            <img style={{width:"6.6666666667vw", height:"6.6666666667vw"}}  src={grow} alt="" />
           <div style={styles.matchedItem}>
           <span style={styles.Matched1}>Matched</span>
           <span style={styles.Matched1Item}>PTE 5,332,843</span>
           </div>
          </div>
        </div>

        {/* Back & Lay Section */}
        <div style={styles.backLaySection}>
          <span style={styles.BackSection}>Back</span>
          <span style={styles.LaySection}>Lay</span>
        </div>
      </div>

      {/* Match Odds Section */}
      <div style={styles.matchOddsSection}>
        {matchData.matchOdds.map((team, index) => (
          <div key={index} style={styles.teamRow}>
            {/* Team Name */}
            <div style={styles.teamName}>{team.team}</div>

            <div style={styles.oddsContainerMain}>
              {/* Back Odds */}
              <div style={styles.oddsContainer}>
                {team.back.map(
                  (odds, i) =>
                    // Check to hide the first 2 elements of 'back'
                    i !== 0 &&
                    i !== 1 && (
                      <div
                        key={`back-${i}`}
                        style={{ ...styles.oddsBox, ...styles.backOdds }}
                        onClick={() => handleDataClick(team.team, odds, "Back")}
                      >
                        {odds}
                        <br />
                        <span style={styles.oddsVolume}>24,094</span>
                      </div>
                    )
                )}
              </div>

              {/* Lay Odds */}
              <div style={styles.oddsContainer}>
                {team.lay.map(
                  (odds, i) =>
                    // Check to hide the last 2 elements of 'lay'
                    i !== team.lay.length - 2 &&
                    i !== team.lay.length - 1 && (
                      <div
                        key={`lay-${i}`}
                        style={{ ...styles.oddsBox, ...styles.layOdds }}
                        onClick={() => handleDataClick(team.team, odds, "Lay")}
                      >
                        {odds}
                        <br />
                        <span style={styles.oddsVolume}>7</span>
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchOddsMobile;
