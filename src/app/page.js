import TestimonialSlider from "./components/TestimonialSlider";
import HeroSlider from "./components/HeroSlider";
import HomePageIntro from "./components/HomePageIntro";
import FeaturedEvents from "./components/FeaturedEvents";
import GlobeSection from "./components/GlobeSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
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

  const heroSlides = [
    {
      desktopImage: "/home/hero-desktop.jpg",
      mobileImage: "/public/home/hero-mobile.jpg",
      heading: "Events directed beautifully",
      subtext: "By Aparna Gupta – Wedding director",
      ctaText: "Discover the Difference",
      ctaLink: "/about",
    },
    {
      desktopImage: "/hero/slide2-desktop.jpg",
      mobileImage: "/hero/slide2-mobile.jpg",
      heading: "Events directed beautifully",
      subtext: "By Aparna Gupta – Wedding director",
      ctaText: "Discover the Difference",
      ctaLink: "/about",
    },
  ];
  return (
    <div>
      <Navbar />
      <HeroSlider
        slides={[
          "home/hero-desktop1.jpg",
          "home/hero-desktop2.jpg",
          "home/hero-desktop3.jpg",
        ]}
      />
      <HomePageIntro />
      {/* <FeaturedEvents /> */}
      <TestimonialSlider testimonials={testimonials} />
      <GlobeSection />
      <Footer />
    </div>
  );
}
