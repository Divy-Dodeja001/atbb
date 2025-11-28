"use client";

import React from "react";
import { Autoplay, FreeMode } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/testimonialSlider.css";
import "../css/homeHeroSlider.css";

const IconsSlider = ({ icons = [], heading = "", mobileView }) => {
  return (
    <div className="my-5 py-lg-4 container">
      <h3 className="text-center mb-4 pb-3 pb-md-4 section-heading">
        {heading}
      </h3>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        centeredSlides={false}
        slidesPerView={mobileView} // roughly 4 visible slides
        spaceBetween={30}
        speed={6000} // higher = slower continuous motion
        autoplay={{
          delay: 2, // continuous effect
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
        }}
        allowTouchMove={false}
        grabCursor={false}
        className="brand-marquee"
        breakpoints={{
          768: {
            slidesPerView: icons.length,
            spaceBetween: 40,
            autoplay: false,
            loop: false,
          },
        }}
      >
        {icons.map((icon, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="d-flex justify-content-center align-items-center flex-column p-2">
                <img src={icon.image} className="col-5 col-md-4 mb-3" />
                <p className="text-center fw-medium">{icon.text}</p>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default IconsSlider;
