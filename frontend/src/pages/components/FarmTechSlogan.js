import React from "react";

const slogans = [
  "Innovative technology to transform agriculture",
  "Farmer wins - we win",
  "Trusted products by farmers nationwide",
  "Jai jawan - jai kisan",
];

export default function FarmTechSlogan() {
  return (
    <div className="w-full overflow-hidden py-40 bg-transparent">
      
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee group items-center">

          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex items-center gap-12">
              {slogans.map((text, index) => (
                <div
                  key={index}
                  className="flex items-center gap-6"
                >
                  {/* TEXT */}
                  <span
                    className="
                      text-3xl 
                      md:text-5xl 
                      lg:text-7xl 
                      font-bold 
                      slogan-text 
                      whitespace-nowrap
                      leading-none
                    "
                    style={{
                      fontFamily: "'Bricolage Grotesque', sans-serif",
                      textShadow: "2px 2px 4px rgba(0,0,0,0.08)",
                    }}
                  >
                    {text}
                  </span>

                  {/* LOGO */}
                  <img
                    src="/images/logo/icon.png"
                    alt="logo"
                    className="
                      w-10 
                      h-10 
                      md:w-12 
                      md:h-12
                      flex-shrink-0
                      translate-y-1
                    "
                  />
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 18s linear infinite;
        }

        .slogan-text {
          color: #d1d5db;
          transition: color 0.4s ease;
        }

        .group:hover .slogan-text {
          color: #800000;
        }
      `}</style>
    </div>
  );
}
