import React from "react";
import HeroImage from "../components/HeroImage";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaButton from "../components/CtaButton";
import ContactFormModal from "../components/ContactFormModal";

const page = () => {
  const careers = [
    { desg: "Photographer", exp: "2 Years", deadline: "2021-05-08" },
    { desg: "Photographer", exp: "2 Years", deadline: "2021-05-08" },
    { desg: "Photographer", exp: "2 Years", deadline: "2021-05-08" },
    { desg: "Photographer", exp: "2 Years", deadline: "2021-05-08" },
  ];
  return (
    <div>
      <Navbar />
      <HeroImage
        images={{
          desktop: "/careers/careerHeroDesktop.jpg",
          mobile: "/careers/careerHeroDesktop.jpg",
        }}
      />
      <div className="container my-5 py-lg-4">
        <div className="text-center mb-5">
          <h1 className="mb-3 font-playfair fw-medium">
            Join the celebration behind the celebrations
          </h1>
          <p>
            At ATBB, every event is a story, crafted with emotion, detail, and
            artistry.Behind every magical moment is a team that dreams
            fearlessly and executes flawlessly
          </p>
        </div>
        <div>
          {careers.map((career, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#FAFAFA",
                  boxShadow:
                    "0 1px 1px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1)",
                }}
                className="p-lg-4 p-3 mb-4 rounded-2"
              >
                <div className="row align-items-center">
                  <div className="col-6 col-md-3 d-flex justify-content-center align-items-center flex-column">
                    <small className="text-muted mb-0">Designation</small>
                    <p className="fw-medium">{career.desg}</p>
                  </div>
                  <div className="col-6 col-md-3 d-flex justify-content-center align-items-center flex-column">
                    <small className="text-muted mb-0">Experience</small>
                    <p className="fw-medium">{career.exp}</p>
                  </div>
                  <div className="col-6 col-md-3 d-flex justify-content-center align-items-center flex-column">
                    <small className="text-muted mb-0">Deadline</small>
                    <p className="fw-medium" cl>
                      {career.deadline}
                    </p>
                  </div>
                  <div className="col-12 col-md-3 d-flex justify-content-center align-items-center flex-column">
                    <ContactFormModal
                      buttonText={"Apply Now"}
                      btnClass={
                        "cta-btn text-decoration-none col-12 col-md-auto"
                      }
                      jobTitle={career.desg}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
