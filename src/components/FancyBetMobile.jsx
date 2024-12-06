import React from "react";

const matchData = {
  fancyBets: [
    { bet: "25 Over SL", no: "71", yes: "72" },
    { bet: "21 Over SL", no: "62", yes: "63" },
    { bet: "2nd Wkt SL", no: "84", yes: "84" },
    { bet: "2nd Wkt Pship Boundaries SL", no: "7", yes: "7" },
  ],
};

const FancyBetMobile = () => {
  return (
    <div className="fbm-container">
      <div className="fbm-bet-container">
        <div className="fbm-header-row">
          <div className="line_market-selection"></div>
          <div className="fbm-header-cell">No</div>
          <div className="fbm-header-cell">Yes</div>
        </div>
        {matchData.fancyBets.map((bet, index) => (
          <div key={index} className="fbm-bet-row">
            <div className="fbm-bet-name">
              {bet.bet}
              <span className="fbm-info-icon">ℹ️</span>
            </div>

            <div className="line_market-selection-main">
              <div className="line_market-selection">
                <p>00.5</p>
              </div>
              <div className="fbm-line_market-item">
                <div className="fbm-cell fbm-cell-no">
                  <div>{bet.no}</div>
                  <div className="fbm-small-text">100</div>
                </div>
                <div className="fbm-cell fbm-cell-yes">
                  <div>{bet.yes}</div>
                  <div className="fbm-small-text">100</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FancyBetMobile;
