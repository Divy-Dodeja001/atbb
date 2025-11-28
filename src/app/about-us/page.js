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
          heading: "Behind every iconic event",
          subtext: "A visionary director",
          position: { top: "40%", right: "-8%" },
          width: { width: "85%" },
        }}
      />
      <FounderNote />
      <IconsSlider
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
      />
      <QuoteSection
        quote={
          "Crafting Celebrations with Grace and Precision, forever and ever"
        }
        founder={true}
      />
      <Footer />
    </div>
  );
};

export default page;
