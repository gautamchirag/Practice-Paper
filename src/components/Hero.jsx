import React from "react";
import "./Hero.css";

import Header from "./header/Header";

import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";

import { motion } from "framer-motion";

function Hero() {
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="hero" id="home">
      <div className="blur hero__blur"></div>
      <div className="hero__left">
        <Header />
        {/* the best club add  */}
        <div className="hero__left__bestClub">
          <motion.div
            initial={{ left: "200px" }}
            whileInView={{ left: "12px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in town</span>
        </div>
        {/* hero heading  */}
        <div className="hero__left__heroHeading">
          <h1>
            <span>
              <span className="stroke-text">shape</span> your
            </span>
            <span>ideal body</span>
          </h1>
        </div>

        {/* get started section  */}
        <div className="hero__left__getStarted">
          <p>
            In here we will help you to shape and build your ideal body and live
            up your life to fullest
          </p>

          {/* figures */}
          <div className="figures">
            <div>
              <span>+ 150</span>
              <span>expert coaches</span>
            </div>
            <div>
              <span>+ 150</span>
              <span>Members joined</span>
            </div>
            <div>
              <span>+ 150</span>
              <span>fitness programs</span>
            </div>
          </div>

          {/* hero butons */}
          <div className="heroButtuns">
            <button className="btn1">get Started</button>
            <button className="btn2">learn More</button>
          </div>
        </div>
      </div>

      {/* right section  */}
      <div className="hero__right">
        <button className="btn">Join now</button>
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="hero__right__heart__rat"
        >
          <img src={heart} alt="heart-rate" />
          <p>Heart rate</p>
          <p>116 bpm</p>
        </motion.div>
        <div className="hero__right__hero__images">
          <img src={hero_image} alt="hero_image" />
          <motion.img
            initial={{ right: "11rem" }}
            whileInView={{ right: "22rem" }}
            transition={transition}
            src={hero_image_back}
            alt="hero_image_back"
          />
        </div>
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "32rem" }}
          transition={transition}
          className="hero__right__hero__calories"
        >
          <img src={calories} alt="calories" />
          <div>
            <span>Calories Burn</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
