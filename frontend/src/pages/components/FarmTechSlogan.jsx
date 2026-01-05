import React from "react";

const slogans = [
  "Innovative technology to transform agriculture",
  "Farmer wins - we win",
  "Trusted products by farmers nationwide",
  "Jai jawan - jai kisan",
];

export default function FarmTechSlogan() {
  return (
    <div className="w-full overflow-hidden bg-transparent">
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max animate-marquee group items-center gap-2">

          {[...Array(2)].map((_, loopIndex) => (
            <div key={loopIndex} className="flex items-center gap-2">
              {slogans.map((text, index) => (
                <div
                key={index}
                className="flex items-center gap-4"
              >
                {/* TEXT */}
                <span
                  className="
                    text-2xl 
                    md:text-2xl 
                    lg:text-2xl
                    font-bold 
                    slogan-text 
                    whitespace-nowrap
                    leading-none
                  "
                  style={{
                    fontFamily: "'Bricolage Grotesque', sans-serif",
                  }}
                >
                  {text}
                </span>
              
                {/* LOGO */}
                <img
                  src="/images/logo/icon.png"
                  alt="logo"
                  className="
                    w-7 h-7
                    flex-shrink-0
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
          animation: marquee 50s linear infinite;
        }

        .slogan-text {
          color: #800000;
          transition: color 0.4s ease;
        }
      `}</style>
    </div>
  );
}
