"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 20 }} // Initial state: invisible and slightly below
            animate={{ opacity: 1, y: 0 }} // Final state: fully visible and in place
            transition={{ duration: 1 }}
          >
            <div className="d-flex justify-content-center justify-content-lg-start mb-3">
              <img src="/vector.png"></img>
            </div>
            <h1 className="mb-3" style={{lineHeight:"1.5em"}}>
              Bespoke Events,
              <br className="d-md-block d-none" /> Beautifully Curated
            </h1>
            <hr className="px-5 col-6 col-md-4 mx-auto mx-md-0"></hr>
            <p className="hero-sub mb-5">
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
          </motion.div>

          {/* Image */}
          <div className="hero-image-wrap">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={slides[index]}
                className="hero-image"
                initial={{ opacity: 0, scale: 1.02 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                alt="Hero"
              />
            </AnimatePresence>
          </div>

          {/* <div className="pagination d-md-none mt-4">
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
          </div> */}
        </div>
      </div>
    </div>
  );
}
