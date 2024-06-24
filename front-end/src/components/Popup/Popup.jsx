import React from "react";
import "./Popup.css";
import ohk from "../../../public/assets/ohk.png";

function Popup(props) {
  return props.trigger ? (
    <div className="popup-container">
      <div className="popup-bg">
        <div className="firsthalf"></div>
        <div className="secondhalf"></div>
        <div className="popup">
          <h3>Thankyou!</h3>
          <p>
            We will notify you soon after the update....
            <br />
            X-ACK brings you the adrenaline rush you were waiting for.
            <br />
            Unbeatable Machines, Intense Events and fastest practical <br />
            learning.
          </p>
          <button onClick={() => props.setTrigger(false)}>
            <img src={ohk} alt="ohk" className="ohk" />
          </button>
          {props.children}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default Popup;
