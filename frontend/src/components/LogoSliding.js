import React from 'react';

const LogoSlider = () => {
  const logos = [
    '/images/logo/logo1.png', 
    '/images/logo/logo2.png', 
    '/images/logo/logo3.png', 
    '/images/logo/logo4.png', 
    '/images/logo/logo5.png', 
    '/images/logo/logo6.png', 
    '/images/logo/logo7.png', 
    '/images/logo/logo8.png', 
    '/images/logo/logo9.png', 
    '/images/logo/logo10.png', 
    '/images/logo/logo11.png', 
    '/images/logo/logo12.png', 
  ];

  // Create three different sets for variety
  const row1Logos = logos.slice(0, 8);
  const row2Logos = [...logos.slice(4, 8), ...logos.slice(0, 4)];
  const row3Logos = [...logos.slice(2, 8), ...logos.slice(0, 2)];

  const LogoRow = ({ logos, duration }) => (
    <div className="overflow-hidden py-8 relative">
      <div className="flex animate-scroll gap-10" style={{ animationDuration: `${duration}s` }}>
        {/* First set */}
        {logos.map((logo, index) => (
            <>
            <img src={logo} className='h-40 w-40'/>
            </>
        ))}
        {/* Duplicate set for seamless loop */}
        {logos.map((logo, index) => (
          <>
          <img src={logo} className='h-40 w-40'/>
          </>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll linear infinite;
        }
      `}</style>
    </div>
  );

  return (
    <div className="w-full bg-gradient-to-br from-gray-50 to-gray-100 py-2">
      <div className="max-w-7xl mx-auto">
        {/* <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Our Partners & Certifications
        </h2> */}
        
        {/* Row 1 - Slower */}
        <LogoRow logos={row1Logos} duration={10} />
        
      </div>
    </div>
  );
};

export default LogoSlider;