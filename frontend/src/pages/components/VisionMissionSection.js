// import React from "react";

// const VisionMissionSection = () => {
//   return (
//     <section
//       className="relative min-h-[800px] bg-cover bg-center bg-no-repeat p-6"
//       style={{
//         backgroundImage: "url('/images/backgrounds/wheat.avif')",
//       }}
//     >
//       {/* 🔹 Overlay for readability */}
//       <div className="absolute inset-0 bg-green/40"></div>

//       {/* 🔹 Content */}
//       <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 py-10">
//         {/* Main Header */}
//         <div className="text-center mb-12 md:mb-16">
//           <h1
//             className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
//             style={{
//               fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",
//             }}
//           >
//             Our Compass and Commitment
//           </h1>
//         </div>

//         {/* Vision & Mission */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
//           {/* Vision */}
//           <div
//             className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border shadow-md hover:shadow-xl transition-all"
//             data-aos="zoom-in"
//           >
//             <div className="flex justify-center mb-6">
//               <div className="bg-green-100 p-4 rounded-full">
//                 <svg
//                   className="w-10 h-10 text-green-600"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <h3
//               className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4"
//               style={{
//                 fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",
//               }}
//             >
//               Vision
//             </h3>

//             <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
//               <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-medium">
//                 To become one of the most trusted and impactful Agri-Input
//                 organisations, serving farming communities in India and beyond
//                 through scientific, sustainable, and future-ready agriculture.
//               </p>
//             </div>
//           </div>

//           {/* Mission */}
//           <div
//             className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border shadow-md hover:shadow-xl transition-all"
//             data-aos="zoom-in"
//           >
//             <div className="flex justify-center mb-6">
//               <div className="bg-red-100 p-4 rounded-full">
//                 <svg
//                   className="w-10 h-10 text-red-800"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M13 10V3L4 14h7v7l9-11h-7z"
//                   />
//                 </svg>
//               </div>
//             </div>

//             <h3
//               className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4"
//               style={{
//                 fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",
//               }}
//             >
//               Mission
//             </h3>

//             <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-700">
//               <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-medium">
//                 To develop, collaborate, and deliver value-added technologies,
//                 products, and services that empower farmers and enable optimum
//                 agricultural output.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Environmental Policy */}
//         <div
//           className="bg-white rounded-2xl mt-10 p-6 sm:p-8 md:p-12 border shadow-md"
//           data-aos="fade-up"
//         >
//           <div className="flex justify-center mb-6">
//             <div className="bg-green-100 p-4 rounded-full">
//             <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//                      </svg>
//             </div>
//           </div>

//           <h2
//             className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6"
//             style={{
//               fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",
//             }}
//           >
//             Environmental Policy
//           </h2>

//           <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-center">
//             Our company's foundation rests on strong value systems that guide
//             every action we take. We are committed to conducting our business in
//             a socially responsible, ethical, and transparent manner. We respect
//             the law, uphold universal human rights, safeguard the environment,
//             and contribute positively to the communities we serve.
//             <span className="font-bold text-green-700">
//               {" "}
//               To operate in ways that are good for people and for the planet.
//             </span>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VisionMissionSection;

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
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "'Times', 'Times New Roman', serif" }}
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
              className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4"
              style={{
                fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",
              }}
            >
              Vision
            </h3>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-medium">
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
              className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4"
              style={{
                fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",
              }}
            >
              Mission
            </h3>

            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-700">
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-medium">
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
