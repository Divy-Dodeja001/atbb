"use client";
import React from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";

const ServicesSlider = () => {
  const services = [
    {
      image: "/services/service1.jpg",
      name: "Full-Service Wedding & Event Direction",
      description: "Personal involvement from start to finish",
    },
    {
      image: "/services/service2.jpg",
      name: "Creative Styling & Design",
      description: "Bespoke designs aligned to personal stories",
    },
    {
      image: "/services/service3.jpg",
      name: "Destination Celebrations",
      description: "International expertise and refined local integration",
    },
    {
      image: "/services/service4.jpg",
      name: "Full-Service Wedding & Event Direction",
      description: "Personal involvement from start to finish",
    },
  ];
  return (
    <div className="my-5 py-lg-4  position-relative">
      <div className="position-absolute" style={{ bottom: "-10%", left: "2%" }}>
        <img src="/butterfly2.png" className="butterfly-2"></img>
      </div>
      <div
        className="position-absolute"
        style={{ top: "0%", right: "5%", zIndex: "1" }}
      >
        <img src="/butterfly3.png" className="butterfly-2"></img>
      </div>
      <div className="container">
        <h3 className="mb-5 pb-2 pb-md-3 section-heading">Services Overview</h3>
        <div className="mt-3 services-pink-strip rounded-3"></div>
        <div>
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            loop={true}
            pagination={{ clickable: true }}
            slidesPerView={1.2}
            spaceBetween={16}
            speed={4000}
            breakpoints={{
              768: {
                slidesPerView: 2.6,
                spaceBetween: 25,
                allowTouchMove: true,
              },
            }}
            allowTouchMove={true} // enabled for mobile by default
            className="secondarySwiper"
          >
            {services.map((service, index) => {
              return (
                <SwiperSlide className="" key={index}>
                  <div className="mb-4 pb-4">
                    <div className="mb-3">
                      <img src={service.image} className="w-100 rounded-3" />
                    </div>
                    <div>
                      <h5 className="fw-bold primary-color">{service.name}</h5>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ServicesSlider;
