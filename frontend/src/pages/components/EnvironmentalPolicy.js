import React from 'react';
import { Leaf, Globe, ShieldCheck } from 'lucide-react';

const EnvironmentalPolicy = () => {
  const brandGreen = "#1c5517";

  return (
    <section className="w-full py-12 px-4">
        {/* Main Policy Card */}
        <div className="relative bg-white/95 backdrop-blur-md rounded-3xl overflow-hidden shadow-2xl border border-white/20">
          
          {/* Top accent bar */}
          <div className="h-2 w-full bg-gradient-to-r from-[#0f3d2e] via-[#1c5517] to-[#4caf50]" />

          <div className="p-8 md:p-16">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              
              {/* Left Column: Heading & Branding */}
              <div className="w-full md:w-1/3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 mb-6">
                  <Leaf size={14} className="text-[#1c5517]" />
                  <span className="text-[10px] uppercase tracking-widest font-bold text-[#1c5517]">
                    ESG Commitment
                  </span>
                </div>
                
                <h2 
                  className="text-4xl md:text-5xl font-serif text-[#0f3d2e] leading-tight mb-4"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Environmental <br /> Policy
                </h2>
                <div className="h-1 w-20 bg-[#1c5517] rounded-full" />
              </div>

              {/* Right Column: Policy Content */}
              <div className="w-full md:w-2/3 space-y-8">
                <div className="prose prose-lg text-gray-700">
                  <p className="leading-relaxed">
                    Our company's foundation rests on strong value systems that guide every action we take. We are committed to conducting our business in a socially responsible, ethical, and transparent manner. We respect the law, uphold universal human rights, safeguard the environment, and contribute positively to the communities we serve. To operate in ways that are good for people and for the planet.
                  </p>
                </div>

              </div>
            </div>

            {/* Highlighted Closing Statement */}
            <div className="mt-16 p-8 bg-[#0f3d2e] rounded-2xl relative overflow-hidden group">
              {/* Decorative background element */}
              <div className="absolute top-0 right-0 -mt-8 -mr-8 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                <Leaf size={200} color="white" />
              </div>

              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-white text-lg md:text-xl font-medium text-center md:text-left max-w-xl">
                  We are dedicated to operating in ways that are <span className="text-green-400">good for people</span> and <span className="text-green-400">good for the planet.</span>
                </p>
                <div className="h-px w-full md:w-24 bg-green-500/30 hidden md:block"></div>
                <span className="text-green-200/50 text-xs uppercase tracking-[0.4em] font-bold whitespace-nowrap">
                  AgriFort Technology
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Subtle Footer Note */}
        <p className="text-center mt-8 text-green-100/60 text-xs tracking-widest uppercase">
          Advancing Agriculture • Protecting Nature • Empowering Farmers
        </p>
    </section>
  );
};

export default EnvironmentalPolicy;