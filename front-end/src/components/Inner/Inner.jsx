// import React from 'react'
import "./Inner.css";
import cone from "../../../public/assets/cone.png";
import getstarted from "../../../public/assets/getstarted.png";
import Popup from "../Popup/Popup";
import { useState, React } from "react";

const Inner = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="inner-bg">
      <div className="inner-fh"></div>
      <div className="inner-sh"></div>
      <div className="inner">
        <div className="heading">
          <div className="defend">Defend & Dominate with X-Ack</div>
          <div className="reserve">
            Reserve your launch alert by entering your email! Act fast to be
            among the first 100 sign-ups post-launch and receive a free
            subscription.
          </div>
          <div className="signup">
            <div className="email">
              <input type="text" value="name@email.com" />
            </div>

            <div className="image">
              <img src={cone} alt="cone" />
            </div>

            <button
              type="submit"
              class="custom-button"
              onClick={() => setButtonPopup(true)}
            >
              <img src={getstarted} alt="getstarted" className="getstarted" />
            </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}></Popup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inner;
