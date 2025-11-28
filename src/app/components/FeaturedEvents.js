import React from "react";
import CtaButton from "./CtaButton";
import { Icon } from "@iconify/react";

const FeaturedEvents = () => {
  return (
    <div className="hero-wrapper my-5 py-lg-4">
      {/* Pink strip */}
      <div className="container hero-container align-items-start text-start">
        {/* Left Content */}
        <div className="hero-text">
          <h1 className="mb-2 mb-lg-4 pb-lg-3">
            🌸 Whispers of Spring: A Garden Soirée
          </h1>
          <div
            className="d-flex my-4 align-items-center"
            style={{ gap: "0.5em" }}
          >
            <div>
              <Icon
                icon="bytesize:location"
                style={{ width: "20px", height: "20px" }}
              />
            </div>
            <div>
              <h6 className="hero-sub m-0">Pune, Maharashtra</h6>
            </div>
          </div>
          <div className="d-md-block d-none">
            <p className="mb-lg-4">
              Step into a dreamy celebration set in the heart of a private
              botanical garden. &quot;Whispers of Spring&quot; was a curated
              engagement event where every detail—from pastel floral
              arrangements to artisanal food carts—reflected the freshness of
              new beginnings
            </p>
            <div className="my-lg-5 my-4">
              <CtaButton cta={"View Showcase"} />
            </div>
          </div>
        </div>

        {/* Image */}
        <picture>
          <source media="(max-width: 768px)" srcSet="/events/eventMobile.jpg" />
          <img
            src="/events/eventDesktop.jpg"
            alt="hero-fold"
            className="w-100"
          />
        </picture>

        <div className="d-lg-none">
          <p className="my-4 pb-3">
            Step into a dreamy celebration set in the heart of a private
            botanical garden. &quot;Whispers of Spring&quot; was a curated
            engagement event where every detail—from pastel floral arrangements
            to artisanal food carts—reflected the freshness of new beginnings
          </p>
          <div className="my-lg-5 my-4">
            <CtaButton cta={"View Showcase"} />
          </div>
        </div>

        {/* <div className="pagination d-md-none mt-4">
          <div className="page-num">{String(index + 1).padStart(2, "0")}</div>

          <div className="progress-bar">
            <motion.div
              key={index}
              className="progress-inner"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "linear" }}
            />
          </div>

          <div className="page-num">
            {String(slides.length).padStart(2, "0")}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default FeaturedEvents;
