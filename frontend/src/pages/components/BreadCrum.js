import React from 'react';

const PortfolioBanner = () => {
  return (
    <section className="relative w-full h-[350px] md:h-[450px] overflow-hidden">
      {/* Background Image Container */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url("/path-to-your-agri-image.jpg")', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center right'
        }}
      >
        {/* Dark Green Gradient Overlay */}
        {/* Linear gradient from solid-ish dark green on the left to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/80 via-emerald-900/40 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center">
        
        {/* Breadcrumb */}
        <nav className="mb-4">
          <p className="text-white/70 text-sm md:text-base font-medium tracking-wide">
            Home <span className="mx-2">/</span> <span className="text-white">Our Portfolio</span>
          </p>
        </nav>

        {/* Title */}
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            Our Portfolio
          </h1>
          <div className="mt-4 h-1 w-20 bg-lime-400" /> {/* Agriculture accent line */}
        </div>

      </div>
    </section>
  );
};

export default PortfolioBanner;