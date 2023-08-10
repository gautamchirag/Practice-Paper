import React from "react";
import "./PlanCard.css";
import whiteTick from "../../assets/whiteTick.png";
import rightArrow from "../../assets/rightArrow.png";
function PlanCard({ plan }) {
  return (
    <div className="plan">
      {plan.icon}
      <h3>{plan.name}</h3>
      <p>$ {plan.price}</p>
      <div className="features">
        <ul>
          {plan.features.map((featuer, index) => {
            return (
              <li key={index}>
                <img src={whiteTick} alt="tick" />
                {featuer}
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p>See more benifits</p>
        <img src={rightArrow} alt="arrow" />
      </div>
      <button className="btn">join now</button>
    </div>
  );
}

export default PlanCard;
