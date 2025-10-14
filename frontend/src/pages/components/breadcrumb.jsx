import React from "react";

const BreadCrumb = ({ title, bgImage }) => {
  return (
    <section className="w-full relative overflow-hidden" style={{ height: "75vh" }}>
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600 bg-opacity-85"></div>
      </div>

      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

      {/* Content (Centered Vertically & Horizontally) */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full max-w-7xl mx-auto px-6 md:px-10">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          {title}
          <div className="w-10 h-1 bg-white mt-4 rounded-full"></div>
        </h1>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-12"
        >
          <path
            d="M0 48h1440V0C1440 0 1200 48 720 48S0 0 0 0v48z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default BreadCrumb;
