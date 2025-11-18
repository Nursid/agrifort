import React from "react";

const BreadCrumb = ({ title, bgImage }) => {
  return (
    <section 
      className="w-full relative overflow-hidden" 
      style={{ height: "75vh" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:left-1/4 md:right-0 md:w-3/4"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundPosition: "center center",
          filter: "blur(4px) brightness(0.75)"  // <--- BLUR + DARKEN FOR VISIBILITY
        }}
      ></div>

      {/* Dark overlay to stabilize text visibility */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30"></div>

      {/* Title Section */}
      <div 
        className="absolute inset-0 md:w-1/4 md:left-0 flex items-center justify-center z-10"
      >
        <div className="px-6 md:px-8 text-left w-full">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white"
            style={{
              lineHeight: "1.1",
              letterSpacing: "-0.02em",
              textShadow: "0 4px 14px rgba(0,0,0,0.6)"  // Stronger shadow = readable
            }}
          >
            {title}
          </h1>
        </div>
      </div>

      {/* Decorative Line */}
      <div
        className="hidden md:block absolute top-0 left-1/4 w-1 h-full bg-white/20"
        style={{
          transform: "skewX(-5deg)",
          transformOrigin: "top"
        }}
      ></div>
    </section>
  );
};

export default BreadCrumb;
