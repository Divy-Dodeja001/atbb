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
      description: "",
      gallery: [
        "/events/bridal_shower/1.webp",
        "/events/bridal_shower/2.webp",
        "/events/bridal_shower/3.webp",
        "/events/bridal_shower/4.webp",
        "/events/bridal_shower/5.webp",
        "/events/bridal_shower/6.webp",
        "/events/bridal_shower/7.webp",
      ],
      description:
        "Bridal showers are deeply personal celebrations. Designed around intimacy, softness, and thoughtful details, they reflect the bride’s world as it is. Gentle palettes, playful accents, and meaningful moments come together to celebrate her story.",
    },
    {
      eventId: "cocktail_evening",
      eventName: "Cocktail Evening",
      gallery: [
        "/events/cocktail_evening/1.webp",
        "/events/cocktail_evening/2.webp",
        "/events/cocktail_evening/3.webp",
      ],
      description:
        "Cocktail evenings are designed with mood in mind. Bold colour stories, layered lighting, and a setting that invites movement and music. These nights are meant to glow, gather energy, and carry the celebration forward with confidence and drama.",
    },
    {
      eventId: "haldi",
      eventName: "Haldi Ceremony",
      gallery: [
        "/events/haldi/1.webp",
        "/events/haldi/2.webp",
        "/events/haldi/3.webp",
        "/events/haldi/4.webp",
      ],
      description:
        "Haldi at ATBB feels light and soulful. Sunlit palettes, natural textures, and a sense of ease define these mornings. Rooted in tradition yet joyful in expression, each Haldi celebrates warmth, connection, and the beauty of beginnings.",
    },
    {
      eventId: "formal_dinner",
      eventName: "Formal Dinner",
      gallery: [
        "/events/formal_dinner/1.webp",
        "/events/formal_dinner/2.webp",
        "/events/formal_dinner/3.webp",
      ],
      description:
        "Formal dinners at ATBB are understated and composed. Clean layouts, refined textures, and a sense of flow guide the evening. These gatherings feel considered and calm, allowing conversation and connection to shape the experience.",
    },
    {
      eventId: "home_puja",
      eventName: "Home Puja",
      gallery: [
        "/events/home_puja/1.webp",
        "/events/home_puja/2.webp",
        "/events/home_puja/3.webp",
        "/events/home_puja/4.webp",
        "/events/home_puja/5.webp",
        "/events/home_puja/6.webp",
        "/events/home_puja/7.webp",
      ],
      description:
        "Home Pujas are intimate by nature. Soft palettes, fresh florals, and quiet detailing create spaces that feel calm and grounded. Every element is chosen with care, allowing devotion, reflection, and togetherness to take centre stage.",
    },
    {
      eventId: "masked_untamed",
      eventName: "Masked & Untamed",
      gallery: [
        "/events/masked_untamed/1.webp",
        "/events/masked_untamed/2.webp",
        "/events/masked_untamed/3.webp",
      ],
      description:
        "This is where drama takes shape. Strong contrasts, tactile materials, and unexpected elements come together to hold attention and spark curiosity. Masked and Untamed celebrations are immersive, expressive, and unapologetically bold in character.",
    },
    {
      eventId: "mehendi_sangeet",
      eventName: "Mehendi & Sangeet",
      gallery: [
        "/events/mehendi_sangeet/1.webp",
        "/events/mehendi_sangeet/2.webp",
        "/events/mehendi_sangeet/3.webp",
        "/events/mehendi_sangeet/4.webp",
        "/events/mehendi_sangeet/5.webp",
        "/events/mehendi_sangeet/6.webp",
        "/events/mehendi_sangeet/7.webp",
        "/events/mehendi_sangeet/8.webp",
        "/events/mehendi_sangeet/9.webp",
      ],
      description:
        "Joy leads the way here. Colour, rhythm, and personality come together in celebrations that feel expressive and free. Whether playful or rooted in tradition, every Mehendi and Sangeet reflects the couple’s spirit, brought to life through vibrant details and an effortless festive flow.",
    },
    {
      eventId: "reception",
      description:
        "Receptions are where emotion softens into celebration. Thoughtful settings, warm palettes, and an energy shaped by the people in the room. These evenings unfold naturally, filled with laughter, movement, and moments that stay long after the night ends.",
      eventName: "Reception",
      gallery: ["/events/reception/1.webp", "/events/reception/2.webp"],
    },
    {
      eventId: "wedding",
      eventName: "Wedding",
      description:
        "Weddings at ATBB are about belonging. Even when they unfold far from home, every ritual feels familiar, thoughtful, and deeply personal. From intimate mandaps to layered celebrations that move seamlessly into the night, each wedding is designed to honour tradition while embracing the couple’s world as it is.",
      gallery: ["/events/wedding/1.webp", "/events/wedding/2.webp"],
    },
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
                  <div className="mb-3">
                    <motion.div
                      className="image-container position-relative" // Position the container relative
                      initial={{ opacity: 0, y: 20, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <motion.img
                        className="img-fluid rounded-2"
                        src={`/events/${event.eventId}.webp`}
                        alt={`${event?.eventId || "Event"} ${index + 1}`}
                      />

                      {/* White box div */}
                      <div className="white-box position-absolute w-75">
                        <h3 className="font-playfair mb-3" style={{fontSize:"23px"}}><em>"{event.eventName}"</em></h3>
                        <p>{event.description}</p>
                      </div>
                    </motion.div>
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
