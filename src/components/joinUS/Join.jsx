import React from "react";
import "./Join.css";

function Join() {
  return (
    <div className="join" id="join-us">
      <div className="join__left">
        <div></div>
        <h2>
          <span className="stroke-text">Ready</span> toLevel up
        </h2>
        <h2>
          your body <span className="stroke-text">with us?</span>
        </h2>
      </div>
      <div className="join__right">
        <form>
          <input type="email" placeholder="enter enail here" />
          <button className="btn">Join Now</button>
        </form>
      </div>
    </div>
  );
}

export default Join;
