"use client";
import React from "react";
import Navbar from "../components/Navbar";
import HeroImageWithText from "../components/HeroImageWithText";
import TestimonialSlider from "../components/TestimonialSlider";
import GlobeSection from "../components/GlobeSection";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import Link from "next/link";
import Footer from "../components/Footer";

export default function Page() {
  const testimonials = [
    {
      image: "/events/testimonialBg1.jpg",
      mobileImage: "/events/testimonialBg1Mobile.jpg",
      title: "— Sanya & Rohan, Udaipur Wedding",
      text: `"They went above and beyond—not just to plan an event, but to tell our story.
           Every moment felt personal and full of love."`,
    },
    {
      image: "/events/testimonialBg2.jpg",
      mobileImage: "/events/testimonialBg2Mobile.jpg",
      title: "— Rhea & Aman, Mumbai",
      text: `"Our wedding was nothing short of magical. The team understood our vision better than we did."`,
    },
    {
      image: "/events/testimonialBg3.jpg",
      mobileImage: "/events/testimonialBg3Mobile.jpg",
      title: "— Priya & Kabir, Goa",
      text: `"A dream wedding! Every detail was curated beautifully and handled flawlessly."`,
    },
  ];

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
        "/events/haldi/2.jpg",
        "/events/haldi/3.jpg",
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
  return (
    <div>
      <Navbar />
      <HeroImageWithText
        images={{
          desktop: "/events/eventsHeroDesktop.jpg",
          mobile: "/events/eventsHeroMobile.jpg",
          heading: "For Life's Most Significant Celebrations",
          subtext: "Global event design & production",
          position: { top: "30%", left: "5%" },
          width: { width: "85%" },
        }}
      />
      <div className="container my-5 py-lg-5">
        <div className="row">
          {eventGallery?.map((event, index) => {
            return (
              <div key={index} className="col-12 col-md-6 p-2 p-lg-3 mb-3">
                <Link
                  href={`/events/${event.eventId}`}
                  className="text-decoration-none"
                >
                  <div className="mb-2">
                    <motion.img
                      className="img-fluid rounded-2"
                      src={`/events/${event.eventId}.jpg`}
                      alt={`${event?.eventId || "Event"} ${index + 1}`}
                      initial={{ opacity: 0, y: 20, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    />
                  </div>
                  <p
                    className="event-title font-playfair text-decoration-none text-dark"
                    style={{ color: "inherit" }}
                  >
                    <em>{event.eventName}</em>
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <TestimonialSlider testimonials={testimonials} />

      <GlobeSection />
      <Footer />
    </div>
  );
}
