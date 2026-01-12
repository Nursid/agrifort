import React, { useEffect, useRef, useState } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

const VisionMissionSection = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          backgroundColor: 0x1c5517, // 🌿 DARK GREEN
          color: 0x4caf50,
          points: 12,
          spacing: 18,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <section
      ref={vantaRef}
      className="relative w-full overflow-hidden"
    >
      {/* 🌿 Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c5517]/70 to-[#0f3d2e]/85"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-14 text-white">
        {/* Header */}
        <div className="text-center mb-16">
          <h1
            className="text-3xl md:text-4xl font-heading" 
          >
            Our Compass and Commitment
          </h1>
          <p className="mt-4 text-green-200">
            Vision, Mission & Environmental Responsibility
          </p>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white/95 text-gray-900 rounded-2xl p-8 shadow-xl  shadow-md hover:shadow-xl transition-all"   data-aos="zoom-in">
            <div className="flex justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-full">
                <svg
                  className="w-10 h-10 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
            </div>

            <h3
              className="text-2xl sm:text-3xl font-heading-alt text-center text-gray-900 mb-4"
            >
              Vision
            </h3>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                To become one of the most trusted and impactful Agri-Input
                organisations, serving farming communities in India and beyond
                through scientific, sustainable, and future-ready agriculture.
              </p>
            </div>
          </div>  

          <div className="bg-white/95 text-gray-900 rounded-2xl p-8 shadow-xl shadow-md hover:shadow-xl transition-all" data-aos="zoom-in">
            {/* <h3 className="text-2xl font-bold text-center mb-4">Mission</h3>
            <p className="leading-relaxed">
              To deliver value-added technologies that empower farmers and
              enable optimum agricultural output.
            </p> */}
            <div className="flex justify-center mb-6">
              <div className="bg-red-100 p-4 rounded-full">
                <svg
                  className="w-10 h-10 text-red-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
            </div>

            <h3
              className="text-2xl sm:text-3xl font-heading-alt text-center text-gray-900 mb-4"
            >
              Mission
            </h3>

            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-700">
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed">
                To develop, collaborate, and deliver value-added technologies,
                products, and services that empower farmers and enable optimum
                agricultural output.
              </p>
        </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;




// import React from 'react';

// const InterlockingCurves = () => {
//   return (
//     <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] lg:h-[400px] bg-white overflow-hidden">
  
//   {/* Vision (Purple) Shape */}
//   <div
//     className="
//       absolute overflow-hidden
//       left-1/2 -translate-x-1/2
//       lg:left-[15%] lg:translate-x-0
//       w-[90%] sm:w-[85%] md:w-[760px]
//       h-[220px] sm:h-[260px] md:h-[282px]
//       top-[10px] sm:top-[16px] md:top-[19px]
//     "
//   >
//     {/* Top line */}
//     <div className="w-[75%] h-full border-[#392992] border-t-[40px] sm:border-t-[45px] md:border-t-[50px] rounded-tr-[35px]">
      
//       {/* Arc container */}
//       <div className="
//         relative
//         w-[300px] h-[300px]
//         sm:w-[360px] sm:h-[360px]
//         md:w-[420px] md:h-[420px]
//       ">
//         <div
//           className="
//             absolute inset-0
//             rounded-full
//             border-[40px]
//             sm:border-[45px]
//             md:border-[50px]
//             border-[#392992]
//             border-l-transparent
//             border-b-transparent
//             rotate-[50deg]
//           "
//           style={{
//             top: "-75px",
//             right: "-232px",
//             left: "292px",
//           }}
//         />
//       </div>

//     </div>
//   </div>


//       {/* Container for the Mission (Red/Orange) Shape */}
//       <div 
//         style={{
//           width: '718.21px',
//           height: '282.89px',
//           top: '18%',
//           right: '15%',
//         }}
//         className="absolute overflow-hidden"
//       >
//         <div className="w-full h-full ml-auto border-[#E3360F] border-b-[50px] rounded-bl-[55px]" style={{marginLeft: '100px'}}>


//         <div className="
//         relative
//         w-[300px] h-[300px]
//         sm:w-[360px] sm:h-[360px]
//         md:w-[420px] md:h-[420px]
//       ">
//         <div
//           className="
//             absolute inset-0
//             rounded-full
//             border-[40px]
//             sm:border-[45px]
//             md:border-[50px]
//             border-[#E3360F]
//             border-l-transparent
//             border-b-transparent
//             rotate-[-161deg]
//           "
//           style={{
//             top: "-9%",
//             right: "-53px",
//             left: "-90px",
//             bottom: "74px"
//           }}
//         />
//       </div>

//         </div>
//       </div>


//       {/* Optional: Central Logo placeholder to show the intersection */}
//       <div className="absolute top-[130px] left-[665px] w-32 h-32 bg-white rounded-full shadow-lg flex items-center justify-center z-10 border-4 border-gray-50"
      
//       style={{    width: "204px",
//         position: "absolute",
//         height: "200px",
//         left: "44%",
//         top: "21%"
//       }}
//       >
//         <span className="text-[10px] font-bold text-gray-400">LOGO</span>
//       </div>
//     </div>
//   );
// };

// export default InterlockingCurves;