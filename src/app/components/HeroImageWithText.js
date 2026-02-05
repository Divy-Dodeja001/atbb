"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import "../css/homeHeroSlider.css";

const HeroImageWithText = ({ images = {} }) => {
  return (
    <>
      <div
        className="position-relative pt-5 pt-md-0 w-100"
        style={{ overflow: "hidden" }}
      >
        {/* Mobile Version with Motion */}
        <div className="d-md-none">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
            animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in place
            transition={{ duration: 1 }} // Transition duration
          >
            <div className="d-flex justify-content-center justify-content-lg-start mb-3">
              <img src="/vector.png"></img>
            </div>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <h1 className="mb-2 pb-lg-3 text-center text-md-start w-75">
                {images.heading}
              </h1>
            </div>
          </motion.div>

          <div className="d-flex justify-content-center mb-2">
            <hr style={{ width: "35%" }} className="m-0"></hr>
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
        {images.position && (
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
              <div className="d-flex justify-content-center justify-content-lg-start mb-3">
                <img src="/vector.png" width={25}></img>
              </div>
              <h1 className=" pb-lg-3 text-center fw-bold text-md-start text-light">
                {images.heading}
              </h1>
              <hr
                style={{ width: "35%", color: "white" }}
                className="my-0"
              ></hr>
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
        )}

        {/* Image with Picture Element for Responsiveness */}
        <picture>
          <source media="(max-width: 768px)" srcSet={images.mobile} />
          <img
            src={images.desktop}
            alt="hero-fold"
            className="w-100"
            style={{ opacity: "0.8" }}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ delay: 0.5, duration: 1 }} // Fade-in delay for the image
          />
        </picture>
      </div>
      {!images.position && (
        <div className="d-md-block d-none d-flex justify-content-center align-items-center flex-column mt-5">
          <motion.div
            className="hero-text w-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="mb-3 d-flex justify-content-center align-items-center">
              <img src="/vector.png" width={25}></img>
            </div>
            <h1 className="pb-lg-3 d-flex justify-content-center align-items-center" style={{fontSize:"40px"}}>
              {images.heading}
            </h1>
            <hr style={{ width: "35%" }} className="my-0 mx-auto"></hr>
          </motion.div>

          <motion.p
            className="hero-sub mb-4 d-flex justify-content-center"
            style={{ fontSize: "24px" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            {images.subtext}
          </motion.p>
        </div>
      )}
    </>
  );
};

export default HeroImageWithText;
