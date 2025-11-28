"use client";
import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const HeroImage = ({ images = {} }) => {
  return (
    <div>
      <picture>
        <source media="(max-width: 768px)" srcSet={images.mobile} />
        <motion.img
          src={images.desktop}
          alt="hero-fold"
          className="w-100"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }} // Fade-in delay for the image
        />
      </picture>
    </div>
  );
};

export default HeroImage;
