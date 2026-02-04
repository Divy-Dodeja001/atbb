import React from "react";
import CtaButton from "./CtaButton";
import Link from "next/link";
import ContactFormModal from "./ContactFormModal";

const Footer = () => {
  return (
    <div className="glass-header">
      <div className="d-flex justify-content-start container align-items-lg-end py-4 mb-3 flex-column flex-lg-row align-items-center align-items-lg-start">
        <div className="d-flex align-items-lg-end justify-content-start align-items-center align-items-lg-start justify-content-lg-between col-lg-2 flex-lg-row flex-column">
          <div className="mb-4 mb-lg-0">
            <img src="/logo.png"></img>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="mb-4 mb-lg-0">
            <h5 className="font-playfair text-center">
              Dreaming of an unforgettable event? Were just a message away
            </h5>
          </div>
        </div>
        <div className="col-lg-2 d-flex justify-content-lg-end align-items-center align-items-lg-start mb-lg-0">
          <ContactFormModal btnClass={"cta-btn text-decoration-none"} buttonText={"Get in Touch"} />
        </div>
      </div>
      <hr></hr>
      <div className="py-lg-4 mb-lg-3 container">
        <div className="d-flex justify-content-lg-around justify-content-center flex-column flex-lg-row">
          <div className="d-flex justify-content-center align-items-center flex-column mb-4 mb-lg-0 col-lg-4">
            <p className="mb-2 text-uppercase font-playfair fw-medium">
              Our address
            </p>
            <a
              className="text-decoration-none"
              style={{ color: "inherit" }}
              href=""
            >
              ATBB Studio, South Delhi. India
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column mb-4 mb-lg-0 col-lg-4">
            <p className="mb-2 text-uppercase font-playfair fw-medium">
              Conatct Us
            </p>
            <a
              className="text-decoration-none"
              style={{ color: "inherit" }}
              href="tel: "
            >
              +91 98230 45678
            </a>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column mb-4 mb-lg-0 col-lg-4">
            <p className="mb-2 text-uppercase font-playfair fw-medium">
              Our mail
            </p>
            <a
              className="text-decoration-none"
              style={{ color: "inherit" }}
              href="tel:"
            >
              attb@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <img src="/vector.png"></img>
      </div>
      <div className="py-4 py-lg-5 container px-lg-5">
        <div
          className="d-flex justify-content-center flex-column flex-lg-row align-items-center"
          style={{ gap: "1.5em" }}
        >
          <Link
            className="text-decoration-none font-playfair fw-medium text-uppercase"
            style={{ color: "inherit" }}
            href="/about-us"
          >
            About Us
          </Link>
          <Link
            className="text-decoration-none font-playfair fw-medium text-uppercase"
            style={{ color: "inherit" }}
            href="/contact-us"
          >
            Contact Us
          </Link>
          <a
            className="text-decoration-none font-playfair fw-medium text-uppercase"
            style={{ color: "inherit" }}
            href=" https://www.instagram.com/atbbevents/"
            target="_blank"
          >
            Instagram
          </a>
          <a
            className="text-decoration-none font-playfair fw-medium text-uppercase"
            style={{ color: "inherit" }}
            href="https://www.linkedin.com/in/aparna-gupta-30048a358/"
            target="_blank"
          >
            LinkedIn
          </a>
          <Link
            className="text-decoration-none font-playfair fw-medium text-uppercase"
            style={{ color: "inherit" }}
            href="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
