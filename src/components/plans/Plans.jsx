import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import PlanCard from "../planCard/PlanCard";
function Plans() {
  return (
    <div className="plans" id="plans">
      <div className="blur plans__blur"></div>
      <div className="blur plans__blur"></div>
      <div className="plans__header">
        <h2 className="stroke-text">ready to start</h2>
        <h2>your journey</h2>
        <h2 className="strok-text">with us</h2>
      </div>
      <div className="plans__card">
        {plansData.map((plan, index) => {
          return <PlanCard key={index} plan={plan} />;
        })}
      </div>
    </div>
  );
}

export default Plans;
