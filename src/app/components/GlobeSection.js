"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "../css/globe.css";

const locations = [
  {
    id: "florence",
    name: "Florence, Italy",
    x: 51.5,
    y: 37,
    imageUrl:
      "https://images.unsplash.com/photo-1706286997196-d541025ac6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxGbG9yZW5jZSUyMEl0YWx5JTIwZHVvbW98ZW58MXx8fHwxNzYzOTY4MjQ4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Renaissance art and architecture capital of Tuscany",
  },
  {
    id: "puglia",
    name: "Puglia, Italy",
    x: 52,
    y: 38,
    imageUrl:
      "https://images.unsplash.com/photo-1661695439925-a569bdbac101?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQdWdsaWElMjBJdGFseSUyMGNvYXN0fGVufDF8fHx8MTc2Mzk2ODI0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Beautiful coastal region with white-washed towns and stunning beaches",
  },
  {
    id: "vienna",
    name: "Vienna",
    x: 53,
    y: 32,
    imageUrl:
      "https://images.unsplash.com/photo-1713725217905-ad9364b54caa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWVubmElMjBhdXN0cmlhJTIwYXJjaGl0ZWN0dXJlfGVufDF8fHx8MTc2Mzk2ODI1MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Imperial city known for classical music and elegant palaces",
  },
  {
    id: "budapest",
    name: "Budapest",
    x: 54,
    y: 33,
    imageUrl:
      "https://images.unsplash.com/photo-1545736665-490a1c07a432?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxCdWRhcGVzdCUyMHBhcmxpYW1lbnQlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjM5NjgyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Pearl of the Danube with thermal baths and grand architecture",
  },
  {
    id: "istanbul",
    name: "Istanbul",
    x: 58,
    y: 36,
    imageUrl:
      "https://images.unsplash.com/photo-1613221357276-8fe60524973d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJc3RhbmJ1bCUyMHR1cmtleSUyMG1vc3F1ZXxlbnwxfHx8fDE3NjM5NjgyNDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Historic city bridging Europe and Asia with stunning mosques",
  },
  {
    id: "dubai",
    name: "Dubai",
    x: 63,
    y: 47,
    imageUrl:
      "https://images.unsplash.com/photo-1706798636444-d4eb076fb63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxEdWJhaSUyMGJ1cmolMjBraGFsaWZhfGVufDF8fHx8MTc2MzkwMjIyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Futuristic city with world's tallest building and luxury destinations",
  },
  {
    id: "abudhabi",
    name: "Abu Dhabi",
    x: 63.5,
    y: 48,
    imageUrl:
      "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBYnUlMjBEaGFiaSUyMG1vc3F1ZXxlbnwxfHx8fDE3NjM5NjgyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Capital of UAE featuring the magnificent Sheikh Zayed Grand Mosque",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    x: 67,
    y: 52,
    imageUrl:
      "https://images.unsplash.com/photo-1625731226721-b4d51ae70e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNdW1iYWklMjBJbmRpYSUyMGdhdGV3YXl8ZW58MXx8fHwxNzYzOTY4MjUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "India's financial capital and home to Bollywood",
  },
];

export default function App() {
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
      className="relative h-screen bg-[#FFFEFB] overflow-hidden flex flex-col lg:flex-row"
      style={{ overflowX: "hidden" }}
    >
      {/* Decorative gradient blurs - matching Figma design */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-50"
          style={{
            background: "radial-gradient(circle, #E3B3BA 0%, transparent 70%)",
            left: "-200px",
            top: "10%",
          }}
        />
        <div
          className="absolute w-[800px] h-[800px] rounded-full blur-[120px] opacity-40"
          style={{
            background: "radial-gradient(circle, #E7DCC7 0%, transparent 70%)",
            right: "-200px",
            bottom: "10%",
          }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full border-2 border-[#E3B3BA]/20"
          style={{
            left: "15%",
            top: "60%",
          }}
        />
        <div
          className="absolute w-[200px] h-[200px] rounded-full border border-[#E7DCC7]/30"
          style={{
            right: "10%",
            top: "15%",
          }}
        />
      </div>

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
                  {locations.map((location, index) => (
                    <button
                      key={location.id}
                      onClick={() => handlePinClick(index)}
                      className="absolute transition-all duration-700 ease-out hover:scale-110"
                      style={{
                        left: `${location.x}%`,
                        top: `${location.y}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      <div
                        className={`relative transition-all duration-700 ease-out ${
                          currentIndex === index
                            ? "w-10 h-10 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ring-2 sm:ring-3 lg:ring-4 ring-[#E3B3BA] ring-offset-2 sm:ring-offset-3 lg:ring-offset-4 ring-offset-[#F5EFE7]"
                            : "w-7 h-7 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ring-2 ring-[#375956]"
                        } rounded-full overflow-hidden shadow-xl`}
                      >
                        <img
                          src={location.imageUrl}
                          alt={location.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card Section - Second on mobile (overlapping), Left on desktop */}
      <div className="w-full lg:w-[50%] lg:order-1 flex flex-col items-center justify-start p-6 sm:p-6 lg:p-12 relative z-20 -mt-[8vh] lg:mt-0 lg:justify-center lg:h-screen">
        <div className="relative">
          <button
            onClick={handlePrevious}
            style={{ borderRadius: "25px" }}
            className="absolute -left-6 sm:-left-8 lg:-left-20 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-[#375956] hover:bg-[#2F4A46] shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
          >
            <ChevronLeft className="size-4 sm:size-5 lg:size-6 text-white" />
          </button>

          <button
            onClick={handleNext}
            style={{ borderRadius: "25px" }}
            className="absolute -right-6 sm:-right-8 lg:-right-20 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-[#375956] hover:bg-[#2F4A46] shadow-lg flex items-center justify-center transition-all hover:scale-110 z-10"
          >
            <ChevronRight className="size-4 sm:size-5 lg:size-6 text-white" />
          </button>

          <div
            key={currentLocation.id}
            className="relative p-3 p-lg-5 shadow-2xl overflow-hidden border-2 border-[#E7DCC7]/40"
            style={{
              boxShadow: "0 20px 60px rgba(227, 179, 186, 0.3)",
            }}
          >
            <div className="" />

            <div className="p-3 sm:p-5 lg:p-8">
              <h2 className=" transition-all duration-700 ease-out font-['Playfair_Display',serif] mb-0.5 sm:mb-2 text-base sm:text-xl lg:text-2xl">
                {currentLocation.name}
              </h2>
              <p className=" text-[10px] sm:text-sm lg:text-base line-clamp-2">
                {currentLocation.description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-1.5 sm:gap-2 mt-4 sm:mt-6 lg:mt-8 flex-wrap justify-center max-w-md">
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
        </div>
      </div>
    </div>
  );
}
