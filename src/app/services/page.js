import React from "react";
import IconsSlider from "../components/IconsSlider";
import HeroImageWithText from "../components/HeroImageWithText";
import QuoteSection from "../components/QuoteSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSlider from "../components/ServicesSlider";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroImageWithText
        images={{
          desktop: "/services/serviceHeroDesktop.jpg",
          mobile: "/services/serviceHeroMobile.jpg",
          heading: "Artful direction, Seamless Execution",
          subtext: "Crafted Services",
          position: { top: "30%", left:"5%" },
          width: { width: "70%" },
        }}
      />
      <ServicesSlider />
      <IconsSlider
        icons={[
          {
            image: "/services/coordination.png",
            text: "Execution & Co-ordination",
          },
          { image: "/services/enquiry.png", text: "Event Inquiry" },
          { image: "/services/design.png", text: "Design & Planning" },
          { image: "/services/session.png", text: "Vision Session" },
        ]}
        heading={"Our Process"}
        mobileView={2}
      />
      <QuoteSection
        quote={
          "Your story deserves an artful beginning — let’s craft it together."
        }
      />
      <Footer />
    </div>
  );
};

export default page;
