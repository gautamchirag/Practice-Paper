import React, { useState } from "react";
import "./Testimonial.css";
import { testimonialsData } from "../../data/testimonialsData";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
function Testimonial() {
  const [reviewindex, setReviewindex] = useState(0);
  const tLength = testimonialsData.length;

  const handleLeft = () => {
    reviewindex === 0
      ? setReviewindex(tLength - 1)
      : setReviewindex(reviewindex - 1);
  };
  const handleRight = () => {
    reviewindex === tLength - 1
      ? setReviewindex(0)
      : setReviewindex(reviewindex + 1);
  };

  const transition = { type: "spring", duration: 3 };
  return (
    <div className="testimonials" id="testimonials">
      <div className="testimonials__left">
        <p>Testimonials</p>
        <h2 className="stroke-text">what they</h2>
        <h2>say about us </h2>
        <motion.p
          key={reviewindex}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: -100,
          }}
          transition={transition}
        >
          {testimonialsData[reviewindex].review}
        </motion.p>
        <h3>
          <span>{testimonialsData[reviewindex].name}</span>{" "}
          {`- ${testimonialsData[reviewindex].status}`}
        </h3>
      </div>
      <div className="testimonials__right">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
          className="border_back"
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
          className="filled_back"
        ></motion.div>
        <motion.img
          key={reviewindex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{
            opacity: 0,
            x: -100,
          }}
          transition={transition}
          src={testimonialsData[reviewindex].image}
          alt="img"
        />
      </div>
      <div className="arrows">
        <button className="btn" onClick={handleLeft}>
          <img src={leftArrow} alt="leftArrow" />
        </button>
        <button className="btn">
          <img src={rightArrow} alt="rightArrow" onClick={handleRight} />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
