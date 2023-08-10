import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";
function Header() {
  const [toggle, setToggle] = useState(false);

  const handelToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="header">
      <img src={Logo} alt="logo" className="header__logo" />
      <img src={Bars} alt="icon" onClick={handelToggle} className="bar__icon" />

      <ul className={`header__links ${toggle ? "" : "hidden"}`}>
        <li className="link" onClick={handelToggle}>
          <Link to="home">Home</Link>
        </li>
        <li className="link" onClick={handelToggle}>
          <Link to="programs">Programs</Link>
        </li>
        <li className="link" onClick={handelToggle}>
          <Link to="reasons">Why US</Link>
        </li>
        <li className="link" onClick={handelToggle}>
          <Link to="plans">Plans</Link>
        </li>
        <li className="link" onClick={handelToggle}>
          <Link to="join-us">Join now</Link>
        </li>
        <li className="link" onClick={handelToggle}>
          <Link to="testimonials">Testimonials</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
