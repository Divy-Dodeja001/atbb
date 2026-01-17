"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../css/globe.css";
import { Icon } from "@iconify/react";

const locations = [
  {
    id: "puglia",
    name: "Puglia, Italy",
    x: 55.5,
    y: 50,
    description:
      "Coastal region famous for white towns, olive groves, and beaches",
  },
  {
    id: "florence",
    name: "Florence, Italy",
    x: 54,
    y: 48.5,
    description: "Cradle of the Renaissance with iconic art and architecture",
  },
  {
    id: "istanbul",
    name: "Istanbul, Turkey",
    x: 57.2,
    y: 49.8,
    description:
      "Historic city connecting Europe and Asia across the Bosphorus",
  },
  {
    id: "thailand",
    name: "Thailand",
    x: 70,
    y: 51,
    description:
      "Tropical country known for beaches, temples, and vibrant street life",
  },
  {
    id: "dubai",
    name: "Dubai, UAE",
    x: 61,
    y: 53.3,
    description:
      "Futuristic desert city with luxury, skyscrapers, and innovation",
  },
  {
    id: "abudhabi",
    name: "Abu Dhabi, UAE",
    x: 60.4,
    y: 53.7,
    description: "UAE capital featuring grand mosques and cultural landmarks",
  },
  {
    id: "budapest",
    name: "Budapest, Hungary",
    x: 56,
    y: 47.5,
    description:
      "Danube-side city famous for thermal baths and historic bridges",
  },
  {
    id: "srilanka",
    name: "Sri Lanka",
    x: 64.7,
    y: 55.6,
    description:
      "Island nation known for tea plantations, beaches, and wildlife",
  },
  {
    id: "vienna",
    name: "Vienna, Austria",
    x: 55,
    y: 47,
    description: "Classical music capital with imperial palaces and cafes",
  },
  {
    id: "mumbai",
    name: "Mumbai, India",
    x: 63.6,
    y: 53.7,
    description: "Financial capital of India and heart of Bollywood",
  },
  {
    id: "chennai",
    name: "Chennai, India",
    x: 64.5,
    y: 54.3,
    description: "Cultural hub of South India with Marina Beach and temples",
  },
  {
    id: "coimbatore",
    name: "Coimbatore, India",
    x: 64,
    y: 54.7,
    description: "Industrial city near the Western Ghats, known for textiles",
  },
  {
    id: "bangalore",
    name: "Bangalore, India",
    x: 64.1,
    y: 54.5,
    description: "India’s Silicon Valley with a vibrant startup ecosystem",
  },
  {
    id: "hyderabad",
    name: "Hyderabad, India",
    x: 64.1,
    y: 54.1,
    description: "Historic city blending tech hubs with royal Nizam heritage",
  },
  {
    id: "jaipur",
    name: "Jaipur, India",
    x: 63.4,
    y: 52.3,
    description: "The Pink City famous for forts, palaces, and royal culture",
  },
  {
    id: "jodhpur",
    name: "Jodhpur, India",
    x: 63.2,
    y: 52.4,
    description: "Blue City dominated by the majestic Mehrangarh Fort",
  },
  {
    id: "jammu",
    name: "Jammu, India",
    x: 64,
    y: 52,
    description: "Gateway to Kashmir and spiritual center with ancient temples",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad, India",
    x: 63.4,
    y: 52.8,
    description:
      "Historic textile city with rich heritage and Sabarmati Ashram",
  },
  {
    id: "udaipur",
    name: "Udaipur, India",
    x: 63.4,
    y: 52.6,
    description: "City of Lakes known for romantic palaces and scenic views",
  },
  {
    id: "coorg",
    name: "Coorg, India",
    x: 63.7,
    y: 54.4,
    description:
      "Hill station famous for coffee plantations and misty landscapes",
  },
];


export default function GlobeSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const currentLocation = locations[currentIndex];

  // Auto-advance every 2 seconds
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  //   }, 2000);

  //   return () => clearInterval(interval);
  // }, []);

  // Calculate map offset to center the current pin
  // The map is 2400px and the circle is 600px, so the map is 4x larger
  // We need to scale the offset accordingly
  const mapOffsetX = (50 - currentLocation.x) * 4;
  const mapOffsetY = (50 - currentLocation.y) * 4;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? locations.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === locations.length - 1 ? 0 : prev + 1));
  };

  const handlePinClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div
      className="relative my-5 overflow-hidden flex flex-col lg:flex-row"
      style={{ overflowX: "hidden" }}
    >
      {/* Globe Section - First on mobile, Right on desktop */}
      <div className="w-full lg:w-[50%] lg:order-2 flex flex-col items-center justify-center relative p-4 pt-12 pb-4 lg:pt-4 h-[50vh] lg:h-screen">
        <div className="relative">
          <div
            className="absolute -inset-3 sm:-inset-6 rounded-full"
            style={{
              background:
                "radial-gradient(circle, transparent 0%, transparent 48%, #E3B3BA 48%, #E7DCC7 70%, #E3B3BA 90%, transparent 100%)",
              opacity: 0.4,
            }}
          />

          <div
            className="relative w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full overflow-hidden shadow-2xl border-4 border-[#E7DCC7]/30"
            style={{
              backgroundColor: "#F5EFE7",
              boxShadow: "0 20px 60px rgba(227, 179, 186, 0.3)",
            }}
          >
            <div
              className="absolute inset-0 transition-transform duration-700 ease-out"
              style={{
                transform: `translate(${mapOffsetX}%, ${mapOffsetY}%)`,
              }}
            >
              <div className="relative w-[3360px] h-[3360px] sm:w-[4800px] sm:h-[4800px] md:w-[6000px] md:h-[6000px] lg:w-[7200px] lg:h-[7200px] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
                {[-1, 0, 1].map((rowOffset) =>
                  [-1, 0, 1].map((colOffset) => (
                    <div
                      key={`${rowOffset}-${colOffset}`}
                      className="absolute w-[1120px] h-[1120px] sm:w-[1600px] sm:h-[1600px] md:w-[2000px] md:h-[2000px] lg:w-[2400px] lg:h-[2400px]"
                      style={{
                        left: `${(colOffset + 1) * 33.333}%`,
                        top: `${(rowOffset + 1) * 33.333}%`,
                      }}
                    >
                      <img
                        src="https://yugo.com/resource/crblob/454388/133cff7b38d923ddfddb6c6ee08edc87/map-export-svg-data.svg"
                        alt="World Map"
                        className="w-full h-full object-contain opacity-90"
                        style={{
                          filter: "sepia(0.2) hue-rotate(320deg) saturate(0.8)",
                        }}
                      />
                    </div>
                  ))
                )}

                <div
                  className="absolute w-[1120px] h-[1120px] sm:w-[1600px] sm:h-[1600px] md:w-[2000px] md:h-[2000px] lg:w-[2400px] lg:h-[2400px]"
                  style={{
                    left: "33.333%",
                    top: "33.333%",
                  }}
                >
                  {locations.map((location, index) => {
                    const isActive = currentIndex === index;

                    return (
                      <button
                        key={location.id}
                        onClick={() => handlePinClick(index)}
                        className={`absolute transition-all duration-700 ease-out hover:scale-110 ${
                          !isActive ? "d-none" : ""
                        }`}
                        style={{
                          left: `${location.x}%`,
                          top: `${location.y}%`,
                          transform: "translate(-50%, -100%)", // keeps the pin tip locked
                          background: "transparent",
                          border: "none",
                          padding: 0,
                        }}
                        aria-label={location.name}
                        type="button"
                      >
                        <div
                          className={`pin-wrap ${
                            isActive ? "pin-active pin-pop" : "pin-idle"
                          }`}
                          title={location.name}
                        >
                          <Icon icon="fa-solid:map-pin" className="pin-icon" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Section - Second on mobile (overlapping), Left on desktop */}
      <div className="w-full lg:w-[50%] lg:order-1 flex flex-col items-center justify-start p-6 sm:p-6 lg:p-12 relative z-20 -mt-[8vh] lg:mt-0 lg:justify-center lg:h-screen">
        <div className="relative">
          <div className="globe-card" key={currentLocation.id}>
            <p className="testi-title font-playfair">
              <em>{currentLocation.name}</em>
            </p>
            <p className="testi-text">{currentLocation.description}</p>
            <div className="card-nav">
              <div
                className="swiper-button-prev"
                onClick={handlePrevious}
              ></div>
              <div className="swiper-button-next" onClick={handleNext}></div>
            </div>
          </div>
        </div>

        {/* <div className="flex gap-1.5 sm:gap-2 mt-4 sm:mt-6 lg:mt-8 flex-wrap justify-center max-w-md">
          {locations.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-6 sm:w-8 lg:w-10 h-1.5 sm:h-2 bg-[#E3B3BA]"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-[#375956]/30 hover:bg-[#375956]/50"
              }`}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
}
