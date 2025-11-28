import React from "react";
import "../css/homeHeroSlider.css";

const HeroImageWithText = ({ images = {} }) => {
  return (
    <div
      className="position-relative pt-5 pt-md-0"
      style={{ overflow: "hidden" }}
    >
      <div className="d-md-none">
        <div className="hero-text d-flex justify-content-center">
          <h1 className="mb-2 pb-lg-3 text-center text-md-start w-75">
            {images.heading}
          </h1>
        </div>
        <div className="d-flex justify-content-center">
          <hr style={{ width: "35%" }} className="mb-0"></hr>
        </div>
        <p className="hero-sub text-center mb-4">{images.subtext}</p>
      </div>
      <div
        className="d-md-block d-none position-absolute"
        style={images.position}
      >
        <div className="hero-text" style={images.width}>
          <h1 className="pb-lg-3 text-center text-md-start">
            {images.heading}
          </h1>
          <hr style={{ width: "35%" }} className="my-0"></hr>
        </div>
        <p className="hero-sub mb-4" style={{ fontSize: "22px" }}>
          {images.subtext}
        </p>
      </div>
      <picture>
        <source media="(max-width: 768px)" srcSet={images.mobile} />
        <img src={images.desktop} alt="hero-fold" className="w-100" />
      </picture>
    </div>
  );
};

export default HeroImageWithText;
