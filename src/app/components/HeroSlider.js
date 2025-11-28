"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../css/homeHeroSlider.css";
import CtaButton from "./CtaButton";

export default function HeroSlider({ slides = [] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="hero-wrapper">
      {/* Pink strip */}
      <div className="pink-strip"></div>
      <div className="container">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-text">
            <div className="d-flex justify-content-center justify-content-lg-start mb-4">
              <img src="/vector.png"></img>
            </div>
            <h1 className="mb-4 pb-lg-3">
              Events directed
              <br /> beautifully
            </h1>

            <p className="hero-sub mb-lg-4">
              By Aparna Gupta – Wedding director
            </p>

            <div className="my-lg-5 my-4">
              <CtaButton cta={"Discover the Difference"} />
            </div>
            {/* Pagination — Desktop vertical / Mobile horizontal */}
            <div className="d-md-block d-none">
              <div className="pagination">
                <div className="page-num">
                  {String(index + 1).padStart(2, "0")}
                </div>

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
          </div>

          {/* Image */}
          <motion.img
            key={index}
            src={slides[index]}
            className="hero-image"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          <div className="pagination d-md-none mt-4">
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
      </div>
    </div>
  );
}
