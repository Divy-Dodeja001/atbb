
"use client";

import React from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion

const EventGallery = ({ eventId }) => {
  const eventGallery = [
    {
      eventId: "bridal_shower",
      eventName: "Bridal Shower",
      gallery: [
        "/events/bridal_shower/1.jpg",
        "/events/bridal_shower/2.jpg",
        "/events/bridal_shower/3.jpg",
        "/events/bridal_shower/4.jpg",
        "/events/bridal_shower/5.jpg",
        "/events/bridal_shower/6.jpg",
        "/events/bridal_shower/7.jpg",
        "/events/bridal_shower/8.jpg",
      ],
    },
    {
      eventId: "cocktail_evening",
      eventName: "Cocktail Evening",
      gallery: [
        "/events/cocktail_evening/1.jpg",
        "/events/cocktail_evening/2.jpg",
        "/events/cocktail_evening/3.jpg",
        "/events/cocktail_evening/4.jpg",
      ],
    },
    {
      eventId: "baby_shower",
      eventName: "Baby Shower",
      gallery: [
        "/events/baby_shower/1.jpg",
        "/events/baby_shower/2.jpg",
        "/events/baby_shower/3.jpg",
      ],
    },
    {
      eventId: "haldi",
      eventName: "Haldi Ceremony",
      gallery: [
        "/events/haldi/1.jpg",
        // "/events/haldi/2.jpg",
        // "/events/haldi/3.jpg",
        "/events/haldi/4.jpg",
        "/events/haldi/5.jpg",
        "/events/haldi/6.jpg",
      ],
    },
    // {
    //   eventId: "formal_dinner",
    //   eventName: "Formal Dinner",
    //   gallery: [
    //     "/events/formal_dinner/1.jpg",
    //     "/events/formal_dinner/2.jpg",
    //     "/events/formal_dinner/3.jpg",
    //     "/events/formal_dinner/4.jpg",
    //   ],
    // },
  ];
  const activeEvent = eventGallery.find((e) => e.eventId === eventId);
  return (
    <div className="container my-5 py-lg-4">
      <div className="row">
        {activeEvent?.gallery?.map((image, index) => {
          return (
            <div key={index} className="col-12 col-md-6 p-2 p-lg-3">
              <motion.img
                className="img-fluid rounded-2"
                src={image}
                alt={`${activeEvent?.eventName || "Event"} ${index + 1}`}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EventGallery;
