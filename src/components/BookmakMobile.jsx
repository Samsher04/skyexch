import React, { useState } from "react";
import bookmark from "../../public/bookmark.svg";
import iconChart from "../../public/icon-chart.png";
import btnaddpin from "../../public/btn-add-pin.png";
import icon_irun from "../../public/icon-irun.png";

const matchData = {
  matchOdds: [
    {
      team: "Bangladesh Women",
      back: ["1.27", "1.28", "1.29"],
      lay: ["1.30", "1.31", "1.32"],
    },
    {
      team: "Ireland Women",
      back: ["4.3", "4.4", "4.5"],
      lay: ["4.6", "4.7", "4.8"],
    },
  ],
};

const BookmakMobile = () => {
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedValue, setSelectedValue] = useState("");

  const handleToggle = (index) => {
    setOpenMenu(openMenu === index ? null : index);
  };

  const handleQuickButtonClick = (value) => {
    setSelectedValue(value);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <div className="Bookmaker-Market-head">
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img className="desktop-bookmark" src={btnaddpin} alt="" />
          <h4 style={{ fontSize: "14px" }}>
            <img className="mobile-bookmark" src={bookmark} alt="" />
            Bookmaker Market
            <span
              style={{
                fontSize: "12.5px",
                color: "#bec4c8",
                marginLeft: "5px",
                fontWeight: "400",
              }}
            >
              | Zero Commission
            </span>
          </h4>
        </div>
        <div className="Commission-max-box">
          <div className="Commission-max-item">
            <button>Min</button>
            <p>1.00</p>
          </div>
          <div className="Commission-max-item">
            <button>Max</button>
            <p>3,906.00</p>
          </div>
        </div>
      </div>

    
        <div
          style={{
            border: "1px solid #ddd",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f8f6e1",
              borderBottom:"1px solid #7e97a7",
              paddingLeft:"4px"
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "4vw",
                width: "50%",
              }}
            >
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{
                 
                  width: "18.6666666667vw",
                  cursor: "pointer",
                  padding: "0.8vw",
                  textAlign: "center",
                  
                }}
              >
                <p
                  style={{
               
            
                     borderRadius:"1.0666666667vw",
                
                       fontSize:"3.4666666667vw",
                       fontWeight:"bold",
                       display:"flex",
                       alignItems:"center",
                       justifyContent:"center",
                       
                  }}
                >
                  Back
                </p>
              </div>

              <div
                style={{
                 
                  width: "18.6666666667vw",
                  cursor: "pointer",
                  padding: "0.8vw",
                  textAlign: "center",
                }}
               
              >
                <p
                  style={{
                
                    borderRadius:"1.0666666667vw",
                  
                     fontSize:"3.4666666667vw",
                      fontWeight:"bold",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                  }}
                >
                  Lay
                </p>
              </div>
            </div>
          </div>


        </div>
   

      {matchData.matchOdds.map((team, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#f8f6e1",
              borderBottom:"1px solid #7e97a7",
              paddingLeft:"4px"
            }}
          >
            <div
              style={{
                fontWeight: "bold",
                fontSize: "4vw",
                width: "50%",
              }}
            >
              {team.team}
            </div>

            <div style={{ display: "flex" }}>
              <div
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(151, 199, 234, 0.7) 0%, #97c7ea 65%)",
                  width: "18.6666666667vw",
                  cursor: "pointer",
                  padding: "0.8vw",
                  textAlign: "center",
                  
                }}
                onClick={() => handleToggle(index)}
              >
                <p
                  style={{
                    backgroundColor: "#72bbef",
                    border: "1px solid #fff",
                     borderRadius:"1.0666666667vw",
                     padding:"1.6vw",
                       fontSize:"3.4666666667vw",
                       fontWeight:"bold",
                       minHeight: "11.2vw",
                       display:"flex",
                       alignItems:"center",
                       justifyContent:"center",
                       
                  }}
                >
                  {team.back[2]}
                </p>
              </div>
              <div
                style={{
                  backgroundImage:
                    " linear-gradient(270deg, rgba(247, 205, 214, 0.75) 5%, #f0c0cb 60%)",
                  width: "18.6666666667vw",
                  cursor: "pointer",
                  padding: "0.8vw",
                  textAlign: "center",
                }}
                onClick={() => handleToggle(index)}
              >
                <p
                  style={{
                    backgroundColor: "#faa9ba",
                    border: "1px solid #fff",
                    borderRadius:"1.0666666667vw",
                     padding:"1.6vw",
                     fontSize:"3.4666666667vw",
                      fontWeight:"bold",
                      minHeight: "11.2vw",
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"center",
                  }}
                >
                  {team.lay[0]}
                </p>
              </div>
            </div>
          </div>

          {openMenu === index && (
            <div
              style={{
                padding: "10px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <input
                  type="checkbox"
                  id={`acceptOdds-${index}`}
                  style={{ marginRight: "5px" }}
                />
                <label
                  htmlFor={`acceptOdds-${index}`}
                  style={{ fontWeight: "400" }}
                >
                  Accept Any Odds
                </label>
                <div>
                  <button
                    style={{
                      backgroundColor: "#ddd",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      marginRight: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => setOpenMenu(null)}
                  >
                    Cancel
                  </button>
                  <button
                    style={{
                      backgroundColor: "#4caf50",
                      color: "#fff",
                      border: "none",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                    }}
                  >
                    Place Bets
                  </button>
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                {["4", "30", "50", "200", "500", "1000"].map((value, i) => (
                  <button
                    key={i}
                    style={{
                      backgroundColor: "#f8f8f8",
                      border: "1px solid #ccc",
                      padding: "5px 10px",
                      borderRadius: "4px",
                      cursor: "pointer",
                      flex: "1",
                    }}
                    onClick={() => handleQuickButtonClick(value)}
                  >
                    {value}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default BookmakMobile;
