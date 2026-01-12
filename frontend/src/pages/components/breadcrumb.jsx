import React from "react";

const BreadCrumb = ({ title, bgImage }) => {
  return (
    <section
    className="w-full relative overflow-hidden flex items-center"
    style={{ height: "75vh" }}
  >
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-top"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    />
  

      {/* Optional dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="text-left">
          <h1 className="text-white text-3xl md:text-4xl font-heading">
            {title}
          </h1>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
