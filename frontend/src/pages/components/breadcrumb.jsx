import React from "react";

const BreadCrumb = ({ title,clipImage, bgImage }) => {
  return (
    <section className="w-full relative overflow-hidden" style={{ height: "75vh" }}>
      {/* Background Image - Right Side */}
      <div
        className="absolute   inset-0 bg-cover bg-center"
        style={{ 
          marginLeft:'9rem',
          
          backgroundImage: `url(${bgImage})`,
          clipPath: "polygon(35% 0, 100% 0, 100% 100%, 5% 100%)"
        }}
      ></div>

      {/* Diagonal Overlay Sections */}
      <div className="absolute inset-0">
        {/* Green Section */}
        <div
          className="absolute inset-0"
          style={{
           
            background: "#10B981",
            clipPath: "polygon(0 0, 25% 0, 40% 100%, 0 100%)"
          }}
        ></div>
        
        {/* Red Section */}
        <div
          className="absolute inset-0"
          style={{
            background: "#DC2626",
            clipPath: "polygon(25% 0, 40% 0, 50% 100%, 40% 100%)"
          }}
        ></div>

        {/* White/Light Section with Content */}
        <div
          className="absolute inset-0 bg-white"
          style={{
            
            clipPath: "polygon(0 0, 35% 0, 25% 100%, 0 100%)"
          }}
        >
          <div className="flex items-center h-full pl-8 md:pl-20">
            <h1 className="text-5xl md:text-7xl font-bold" style={{ lineHeight: "1.1", letterSpacing: "-0.02em" }}>
              <span style={{ color: "#10B981" }}>{title}</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Decorative Accent Bar - Right */}
      <div 
        className="absolute top-0 right-0 w-12 h-full"
        style={{ 
          
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 100%)"
        }}
      ></div>

      {/* Decorative Pattern - Left Top */}
    </section>
  );
};

export default BreadCrumb;