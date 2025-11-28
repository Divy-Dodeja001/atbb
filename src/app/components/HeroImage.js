import React from "react";

const HeroImage = ({ images = {} }) => {
  return (
    <div>
      <picture>
        <source media="(max-width: 768px)" srcSet={images.mobile} />
        <img src={images.desktop} alt="hero-fold" className="w-100" />
      </picture>
    </div>
  );
};

export default HeroImage;
