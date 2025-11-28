"use client";
import React from "react";
import CtaButton from "./CtaButton";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const HomePageIntro = () => {
  return (
    <div className="my-5 py-lg-4">
      <div className="container">
        <div className="d-flex justify-content-center mb-4">
          <img src="/vector.png"></img>
        </div>
        <p
          className="text-center mb-0 home-page-intro-text px-2"
          style={{ fontSize: "20px" }}
        >
          Aparna Gupta transforms celebrations into unforgettable experiences
          through thoughtful orchestration, precise direction, and elegant
          aesthetics. Each event is a bespoke celebration—crafted with curated
          décor, meticulous attention to detail, and tailored experiences that
          reflect your vision, preferences, and budget. With ATBB, every moment
          feels personal, seamless, and effortlessly beautiful
        </p>
        <div className="my-5 d-flex justify-content-center">
          <CtaButton cta={"Meet Aparna"} link="/about-us" />
        </div>
      </div>

      <div>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop={true}
          pagination={{ clickable: true }}
          slidesPerView={1.2}
          spaceBetween={16}
          speed={4000}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 25,
              allowTouchMove: true,
            },
          }}
          allowTouchMove={true} // enabled for mobile by default
          className="secondarySwiper"
        >
          <SwiperSlide className="">
            <div className="">
              <img src="/home/breakerslider1.jpg" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="">
              <img src="/home/breakerslider3.jpg" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="">
              <img src="/home/breakerslider1.jpg" className="w-100" />
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="">
              <img src="/home/breakerslider3.jpg" className="w-100" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomePageIntro;
