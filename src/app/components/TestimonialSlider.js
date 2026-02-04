"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../css/testimonialSlider.css";

export default function TestimonialSlider({ testimonials = [] }) {
  return (
    <div className="testimonial-container my-5 py-lg-4 px-md-5 px-3 py-4">
      <h3 className="mb-4 pb-1 pb-md-3 section-heading text-center text-md-start">
        Testimonials
      </h3>
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        // navigation={{
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev",
        // }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        className="mySwiper"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="testimonial-wrapper">
              {/* MOBILE IMAGE */}
              <div className="mobile-img-wrapper">
                <img
                  src={item.mobileImage}
                  alt={item.title}
                  className="img-fluid testimonial-img"
                />
              </div>

              {/* DESKTOP IMAGE */}
              <div className="desktop-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="desktop-img"
                />
              </div>

              {/* CARD */}
              <div className="testimonial-card">
                <p className="testi-title font-playfair">
                  <em>{item.title}</em>
                </p>
                <p className="testi-text">{item.text}</p>

                {/* Navigation on card (desktop only) */}
                {/* <div className="card-nav">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
