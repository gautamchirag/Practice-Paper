import React from "react";
import "./Reason.css";

import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import nb from "../../assets/nb.png";
import adidas from "../../assets/adidas.png";
import nike from "../../assets/nike.png";
import tick from "../../assets/tick.png";
function Reson() {
  return (
    <div className="reasons" id="reasons">
      <div className="reasons__left">
        <img src={image1} alt="img" />
        <img src={image2} alt="img" />
        <img src={image3} alt="img" />
        <img src={image4} alt="img" />
      </div>
      <div className="reasons__right">
        <p>some reasons</p>
        <h2>
          <span className="stroke-text">Why</span> choose us?
        </h2>
        <ul className="details">
          <li>
            <img src={tick} alt="tick" />
            <p>over 140+ expert coachs</p>
          </li>
          <li>
            <img src={tick} alt="tick" />
            <p>rain smarter and faster than before</p>
          </li>
          <li>
            <img src={tick} alt="tick" />
            <p>1 free program for new member</p>
          </li>
          <li>
            <img src={tick} alt="tick" />
            <p>reliable partners</p>
          </li>
        </ul>
        <div className="parters">
          <p>OUR PARTNERS</p>
          <div className="img">
            <img src={nb} alt="bnlogo" />
            <img src={nike} alt="nikelogo" />
            <img src={adidas} alt="bnlogo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reson;
