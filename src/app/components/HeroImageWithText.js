"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "../css/homeHeroSlider.css";

const HeroImageWithText = ({ images = {} }) => {
  return (
    <div
      className="position-relative pt-5 pt-md-0 w-100"
      style={{ overflow: "hidden" }}
    >
      {/* Mobile Version with Motion */}
      <div className="d-md-none">
        <motion.div
          className="hero-text d-flex justify-content-center"
          initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
          animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in place
          transition={{ duration: 1 }} // Transition duration
        >
          <h1 className="mb-2 pb-lg-3 text-center text-md-start w-75">
            {images.heading}
          </h1>
        </motion.div>

        <div className="d-flex justify-content-center">
          <hr style={{ width: "35%" }} className="mb-0"></hr>
        </div>

        <motion.p
          className="hero-sub text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }} // Delay to start fading the subtext
        >
          {images.subtext}
        </motion.p>
      </div>

      {/* Desktop Version with Motion */}
      <div
        className="d-md-block d-none position-absolute z-1"
        style={images.position} 
      >
        <motion.div
          className="hero-text"
          style={images.width}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="pb-lg-3 text-center fw-bold text-md-start text-light">
            {images.heading}
          </h1>
          <hr style={{ width: "35%", color:"white" }} className="my-0"></hr>
        </motion.div>

        <motion.p
          className="hero-sub mb-4 text-light fw-bold"
          style={{ fontSize: "22px" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          {images.subtext}
        </motion.p>
      </div>

      {/* Image with Picture Element for Responsiveness */}
      <picture>
        <source media="(max-width: 768px)" srcSet={images.mobile} />
        <img
          src={images.desktop}
          alt="hero-fold"
          className="w-100"
          style={{opacity:"0.8"}}
          // initial={{ opacity: 0 }}
          // animate={{ opacity: 1 }}
          // transition={{ delay: 0.5, duration: 1 }} // Fade-in delay for the image
        />
      </picture>
    </div>
  );
};

export default HeroImageWithText;
