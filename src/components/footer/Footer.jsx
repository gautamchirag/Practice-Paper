import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/logo.png";
function Footer() {
  return (
    <div className="footer">
      <div className="blur footer__blur"></div>
      <div className="footer__break"></div>
      <div className="footer__social">
        <img src={github} alt="social icon" />
        <img src={linkedin} alt="social icon" />
        <img src={instagram} alt="social icon" />
      </div>
      <div className="footer__logo">
        <img src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Footer;
