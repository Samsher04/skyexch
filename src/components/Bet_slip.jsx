import React from "react";
import "../assets/styles/Bet_slip.css";
import dots from "../../public/dots.png";
import del from "../../public/del.png";

const Bet_slip = () => {
  return (
    <div className="bet_slip-wrap">
      <h3>
        <a className="to-expand">Bet Slip</a>
      </h3>

      <div className="bet-slip-section">

        <div className="bet-row">
          <div className="bet-title">
            <p className="match-back">Back (Bet For)</p>
            <div className="bet-title-odds">
              <p>Odds</p>
              <p>Stake</p>
            </div>
            <span>Profit</span>
          </div>
          <div className="bet-item">
            <p className="bet-match">
              <img src={dots} alt="" /> Northern Warriors v New York Strikers
            </p>
            <div className="bet-card bet-back">
              <div className="Match-Odds-title">
                <div className="Match-Odds-inner">
                  <img src={del} alt="" /> Northern Warriors{" "}
                  <span> Match Odds</span>
                </div>
                <div className="MatchOdds-input">
                  <input type="number" />
                  <input type="number" />
                </div>
              </div>
            </div>
            <div className="bet-buttons">
              <button>4</button>
              <button>30</button>
              <button>50</button>
              <button>200</button>
              <button>400</button>
              <button>700</button>
            </div>
            <div className="min-bet">
              <p>
                Min Bet: <b>1</b>
              </p>
            </div>
          </div>
        </div>

           <div className="bet-row">
          <div className="bet-title">
            <p className="match-back">Back (Bet For)</p>
            <div className="bet-title-odds">
              <p>Odds</p>
              <p>Stake</p>
            </div>
            <span>Profit</span>
          </div>
          <div className="bet-item">
            <p className="bet-match">
              <img src={dots} alt="" /> Northern Warriors v New York Strikers
            </p>
            <div className="bet-card bet-back">
              <div className="Match-Odds-title">
                <div className="Match-Odds-inner">
                  <img src={del} alt="" /> Northern Warriors{" "}
                  <span> Match Odds</span>
                </div>
                <div className="MatchOdds-input">
                  <input type="number" />
                  <input type="number" />
                </div>
              </div>
            </div>
            <div className="bet-buttons">
              <button>4</button>
              <button>30</button>
              <button>50</button>
              <button>200</button>
              <button>400</button>
              <button>700</button>
            </div>
            <div className="min-bet">
              <p>
                Min Bet: <b>1</b>
              </p>
            </div>
          </div>
        </div>

        <div className="bet-actions">
          <p className="Liability">
            Liability <span> 500.00</span>
          </p>
          <div className="bet-actions-btn">
            <button className="cancel-btn">Cancel All</button>
            <button className="place-btn">Place Bets</button>
          </div>
        </div>
        <div className="confirm-bet">
          <input type="checkbox" id="confirm" />
          <label htmlFor="confirm">Please confirm your bets.</label>
        </div>

      </div>
    </div>
  );
};

export default Bet_slip;
