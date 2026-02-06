import React from "react";
import CtaButton from "./CtaButton";

const FounderNote = () => {
  return (
    <div className="hero-wrapper my-5 py-lg-4">
      {/* Pink strip */}
      <div className="founder-pink-strip"></div>

      <div className="container hero-container align-items-start text-start">
        {/* Left Content */}
        <div className="hero-text">
          <h1 className="mb-4 pb-3 mb-lg-4 pb-lg-3 founder-note-heading" style={{lineHeight:"1.5em"}}>
            Our Creative Director <br></br>Aparna Gupta
          </h1>
          <div className="d-md-block d-none founder-note-text">
            <p className="mb-lg-4">
              Aparna Gupta turns every celebration into a memorable experience
              through thoughtful planning, elegant aesthetics, and flawless
              execution. With over 23 years of experience curating events across
              India and beyond—including for the Ambanis and A.R. Rahman—her
              signature style blends creativity with precision, making each
              event feel personal, refined, and effortlessly unforgettable. What
              began as an event management agency has evolved into a brand.
            </p>
            <div className="my-lg-5 my-4">
              <CtaButton link="https://www.linkedin.com/in/aparna-gupta-30048a358/" cta={"Connect with Aparna"} />
            </div>
          </div>
        </div>

        {/* Image */}
        <picture>
          <source media="(max-width: 768px)" srcSet="/about-us/aparna.jpg" />
          <img src="/about-us/aparna.jpg" alt="hero-fold" className="w-100" />
        </picture>

        <div className="d-lg-none">
          <p className="my-4 pb-2 text-center">
            Aparna Gupta turns every celebration into a memorable experience
            through thoughtful planning, elegant aesthetics, and flawless
            execution. With over 23 years of experience curating events across
            India and beyond—including for the Ambanis and A.R. Rahman—her
            signature style blends creativity with precision, making each event
            feel personal, refined, and effortlessly unforgettable. What began
            as an event management agency has evolved into a brand.
          </p>
          <div className="my-lg-5 my-4 d-flex justify-content-center justify-content-md-start">
            <CtaButton link="https://www.linkedin.com/in/aparna-gupta-30048a358/" cta={"Connect with Aparna"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FounderNote;
