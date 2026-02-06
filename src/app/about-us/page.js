import React from "react";
import HeroImageWithText from "../components/HeroImageWithText";
import IconsSlider from "../components/IconsSlider";
import QuoteSection from "../components/QuoteSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FounderNote from "../components/FounderNote";

const page = () => {
  return (
    <div>
      <Navbar />
      <HeroImageWithText
        images={{
          desktop: "/about-us/aboutusHeroDesktop.jpg",
          mobile: "/about-us/aboutusHeroMobile.jpg",
          heading: "Bespoke Events Across Continents",
          subtext: "A visionary director",
          position: { top: "30%", left: "5%" },
          width: { width: "85%" },
        }}
      />
      <FounderNote />
      {/* <IconsSlider
        icons={[
          { image: "/about-us/creativity.png", text: "Creativity" },
          { image: "/about-us/emphathy.png", text: "Empathy" },
          { image: "/about-us/excellence.png", text: "Excellence" },
          { image: "/about-us/honesty.png", text: "Honesty" },
          { image: "/about-us/personalisation.png", text: "Personalization" },
          { image: "/about-us/respect.png", text: "Respect" },
        ]}
        heading={"Our core values"}
        mobileView={2.3}
      /> */}
      <QuoteSection
        quote={
          "Backed by decades of experience, each celebration is guided by vision, artistry and precision. Turning moments into lasting memories."
        }
        founder={true}
      />
      <Footer />
    </div>
  );
};

export default page;
