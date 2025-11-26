"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/homeHeroSlider.css";

export default function HeroSlider({ slides = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-wrapper">
      {/* Pink strip */}
      <div className="pink-strip"></div>

      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-text">
          <motion.h1
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Events directed
            <br /> beautifully
          </motion.h1>

          <p className="hero-sub">By Aparna Gupta – Wedding director</p>

          <button className="cta-btn">Discover the Difference</button>

          {/* Pagination — Desktop vertical / Mobile horizontal */}
          <div className="pagination">
            <div className="page-num">{String(index + 1).padStart(2, "0")}</div>

            <div className="progress-bar">
              <motion.div
                key={index}
                className="progress-inner"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "linear" }}
              />
            </div>

            <div className="page-num">
              {String(slides.length).padStart(2, "0")}
            </div>
          </div>
        </div>

        {/* Image */}
        <motion.img
          key={index}
          src={slides[index]}
          className="hero-image"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
      </div>
    </div>
  );
}
