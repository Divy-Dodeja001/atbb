"use client";
import React, { useState } from "react";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaButton from "../components/CtaButton";

const Page = () => {
  // State for each input field
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstName,
      lastName,
      phoneNumber,
      email,
      message,
    };

    try {
      const response = await fetch("/api/contactUs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Your message has been sent!");
        // Reset form fields after submission
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        setEmail("");
        setMessage("");
      } else {
        alert("There was an error. Please try again.");
      }
    } catch (error) {
      alert(`${error.message}. Please try again.`);
    }
  };

  return (
    <div>
      <Navbar />
      <HeroImage
        images={{
          desktop: "/contact-us/contactUsHeroDesktop.jpg",
          mobile: "/contact-us/contactUsHeroMobile.jpg",
        }}
      />
      <div className="d-flex justify-content-between container p-0 w-100 flex-column flex-md-row my-5 py-lg-5">
        <div className="col-12 p-3 d-flex justify-content-center flex-column align-items-center">
          <h1 className="font-playfair fw-medium mb-4 text-center">
            Let’s create something beautiful together
          </h1>
          <p className="text-center mb-4">
            Share your vision with us, we’ll bring it to life with creativity,
            care, and timeless detail
          </p>
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <div className="d-flex mb-2" style={{ gap: "0.7em" }}>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  required
                />
              </div>
              <div className="mb-2">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-2">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="my-4 pt-2 mx-auto d-flex justify-content-center">
                <button type="submit" className="cta-btn text-decoration-none w-100 py-3">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* <div className="col-12 col-md-6 p-3 px-md-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.03133624569293!2d77.26871001692123!3d28.563222355149303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce30199d52a8d%3A0xfd7bef443c1ca0c1!2sMOYDOM%20Bed%20And%20Breakfast!5e0!3m2!1sen!2sin!4v1764289799287!5m2!1sen!2sin"
            style={{
              border: "none",
              width: "100%",
              height: "500px",
              borderRadius: "10px",
            }}
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
