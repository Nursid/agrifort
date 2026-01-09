import React from 'react';

const VisionMissionSymmetry = () => {
  return (
    <section className="relative w-full py-20 bg-gray-50 overflow-hidden font-sans">
      {/* Background Image Overlay (Optional based on image) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000" 
          alt="agri-bg" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Main Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-[#3d2a70] mb-20">
          Our Compass and Commitment
        </h2>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-y-0 items-center">
          
          {/* --- VISION SIDE (Top Left) --- */}
          <div className="relative z-20">
            {/* The Vision Bar */}
            <div className="flex items-center bg-[#3d2a70] text-white py-4 px-8 rounded-l-full md:w-[110%] shadow-lg">
              <span className="mr-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </span>
              <h3 className="text-3xl font-bold">Vision</h3>
            </div>
            
            {/* Vision Description Text */}
            <div className="mt-8 md:pr-12 md:max-w-md">
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                To become one of the most trusted and impactful Agri-Input organisations, 
                serving farming communities in India and beyond through scientific, 
                sustainable, and future-ready agriculture.
              </p>
            </div>
          </div>

          {/* --- MISSION SIDE (Bottom Right) --- */}
          <div className="relative z-20 md:mt-48 flex flex-col items-end">
            {/* The Mission Bar */}
            <div className="flex items-center justify-end bg-[#e33e33] text-white py-4 px-8 rounded-r-full md:w-[110%] shadow-lg text-right">
              <h3 className="text-3xl font-bold">Mission</h3>
              <span className="ml-4">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
            </div>
            
            {/* Mission Description Text */}
            <div className="mt-8 md:pl-12 md:max-w-md text-right">
              <p className="text-gray-700 leading-relaxed text-lg font-medium">
                To develop, collaborate, and deliver value-added technologies, 
                products, and services that empower farmers and enable 
                optimum agricultural output.
              </p>
            </div>
          </div>

          {/* --- CENTER INTERLOCKING LOGO (Desktop only) --- */}
          <div className="hidden md:flex absolute inset-0 items-center justify-center z-10">
            {/* The "S" Curve Connector */}
            <div className="relative w-80 h-80">
              {/* Top half circle (Purple) */}
              <div className="absolute top-0 right-0 w-1/2 h-full border-[20px] border-[#3d2a70] border-l-0 rounded-r-full pointer-events-none"></div>
              {/* Bottom half circle (Red) */}
              <div className="absolute bottom-0 left-0 w-1/2 h-full border-[20px] border-[#e33e33] border-r-0 rounded-l-full pointer-events-none"></div>
              
              {/* Central White Logo Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 bg-white rounded-full shadow-2xl border-8 border-gray-50 flex flex-col items-center justify-center p-4">
                   <div className="text-center">
                    <span className="text-green-600 font-black text-2xl italic tracking-tighter">AGRI<span className="text-red-600">FORT</span></span>
                    <p className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Technologies</p>
                   </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSymmetry;