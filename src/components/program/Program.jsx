import React from "react";
import "./Program.css";
import { programsData } from "../../data/programsData";
import rightArrow from "../../assets/rightArrow.png";
function Program() {
  return (
    <div className="program" id="programs">
      <div className="progarm__header">
        <h2 className="stroke-text">Explore our</h2>
        <h2>Programs</h2>
        <h2 className="strok-text">To shape you</h2>
      </div>

      <div className="program__categories">
        {programsData.map((program, index) => {
          return (
            <>
              <div className="category" key={index}>
                {program.image}
                <span className="heading">{program.heading}</span>
                <span>{program.details}</span>
                <div className="join__now">
                  <span>Join Now</span>
                  <img src={rightArrow} alt="arrow" />
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Program;
