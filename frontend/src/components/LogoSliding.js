import React from 'react';

const LogoSlider = ({logos}) => {
  console.log(logos)
  

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-green-50 py-6">
      <div className="px-4">
        {/* Logo Slider */}
        <div className="overflow-hidden py-8 relative">
          <style>{`
            @keyframes scroll-rtl {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll-rtl {
              animation: scroll-rtl 7s linear infinite;
            }
          `}</style>
          
          <div className="flex gap-10 animate-scroll-rtl">
  {/* First set */}
  {logos.map((logo, index) => (
    <div
      key={`first-${index}`}
      style={{height: '200px', width: '200px'}}
      className="w-60 h-60 flex-shrink-0 rounded-full p-4 flex items-center justify-center"
    >
      <img
        src={logo}
        alt={`Logo ${index + 1}`}
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  ))}

  {/* Duplicate set for seamless loop */}
  {logos.map((logo, index) => (
    <div
      key={`second-${index}`}
      style={{height: '200px', width: '200px'}}
      className="w-60 h-60 flex-shrink-0 rounded-full p-4 flex items-center justify-center"
    >
      <img
        src={logo}
        alt={`Logo ${index + 1}`}
        className="w-full h-full object-contain rounded-full"
      />
    </div>
  ))}
</div>

        </div>
      </div>
    </div>
  );
};

export default LogoSlider;