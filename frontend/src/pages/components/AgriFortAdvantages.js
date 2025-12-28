import React, { useState } from 'react';
import { Factory, Microscope, Users, Cpu, Handshake, ExternalLink, CheckCircle2 } from 'lucide-react';

const AgriFortAdvantages = () => {
  const [activeTab, setActiveTab] = useState('manufacturing');

  const tabs = [
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory },
    { id: 'rd', label: 'R&D', icon: Microscope },
    { id: 'people', label: 'People at AFT', icon: Users },
    { id: 'tech', label: 'Tech-based Products', icon: Cpu },
    { id: 'partnerships', label: 'Trusted Partnerships', icon: Handshake },
  ];

  return (
    <div className="bg-white pt-6">
      <div className="w-full mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>  The AgriFort Advantages</h1>
        </div>

        {/* Navigation Tabs */}

        {/* Navigation Tabs - Visual Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-12 px-4" data-aos="fade-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center gap-3 p-6 rounded-2xl transition-all duration-300 min-w-[140px] ${
                activeTab === tab.id 
                ? 'bg-green-50 border-2 border-green-600 shadow-xl scale-105' 
                : 'bg-white border-2 border-gray-200 hover:border-green-300 hover:shadow-lg'
              }`}
              style={{outline: 'none'}}
            >
              <div className={`p-4 rounded-full transition-colors duration-300 ${
                activeTab === tab.id 
                ? 'bg-green-600' 
                : 'bg-gray-100 group-hover:bg-green-100'
              }`}>
                <tab.icon 
                  size={32} 
                  className={activeTab === tab.id ? 'text-white' : 'text-gray-600'}
                  strokeWidth={2}
                />
              </div>
              <span 
                className={`text-sm font-semibold text-center leading-tight ${
                  activeTab === tab.id ? 'text-green-700' : 'text-gray-700'
                }`}
                style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}
              >
                {tab.label}
              </span>
            </button>
          ))}
        </div>
        {/* <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id 
                ? 'bg-green-600 text-white shadow-lg scale-105' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div> */}

        {/* Content Area */}
        <div className="p-8 md:p-12 shadow-sm border border-gray-100 min-h-[500px]">
          
          {/* 1. Manufacturing */}
          {activeTab === 'manufacturing' && (
          <>
               
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid lg:grid-cols-2 gap-12 mb-2 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
                    <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 italic">
                      {/* [Photo of R&D House / Agrifort Sciences Private Limited] */}
                      <img src="/images/backgrounds/manufecturing.jpg"
                  alt="Manufacturing"
                  className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>Manufacturing</h3>
                  <p
                   className="text-gray-700 leading-relaxed mb-6 text-lg"
                   style={{
                     textAlign: "justify",
                     textJustify: "inter-word",
                   }}
                  //  className="text-gray-700 leading-relaxed text-lg mb-6"
                  >
                   
                  At AgriFort, manufacturing stands as one of our core strengths, driven by a relentless focus on precision, consistency and uncompromised quality. Our production ecosystem spans across Sonipat (Delhi NCR), Bhavnagar, Vidisha, Hyderabad and Unnao (UP SCR), strategically chosen for their advanced infrastructure and strong technical expertise. Every product is crafted through a meticulously controlled process supported by modern technology, advanced equipment and standardized processes that ensure consistent product quality. A rigorous multi-stage quality assurance system checks every stage from raw material selection to final packaging. 

                 
                  </p>
                </div>
              </div>
              <p   className="text-gray-700 leading-relaxed mb-6 text-lg"
                   style={{
                     textAlign: "justify",
                     textJustify: "inter-word",
                   }}>
                  Our manufacturing capabilities have been further strengthened through the integration of Geekay, a dedicated manufacturing entity within the AgriFort Group, enhancing capacity, operational control and production efficiency across our facilities.
                  <br/>
                  Our approach is reinforced by continuous improvement driven by science-based formulation and field-tested results, ensuring each product performs reliably under real farming conditions. We strictly adhere to all government regulations, legal guidelines and mandated safety protocols throughout the production cycle. This disciplined system enables us to deliver dependable, high-performance agri-inputs that farmers can trust season after season.
              </p>
            </div>
            </>
          )}

          {/* 2. R&D */}
          {activeTab === 'rd' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
                    <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 italic">
                      {/* [Photo of R&D House / Agrifort Sciences Private Limited] */}
                      <img src='/images/backgrounds/rnd.png' />
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}> R&D</h3>
                  <p 
                   className="text-gray-700 leading-relaxed mb-6 text-lg"
                   style={{
                     textAlign: "justify",
                     textJustify: "inter-word",
                   }}
                  // className="text-gray-700 leading-relaxed text-lg mb-6"
                  >
                   
                We have established our own in-house Research & Development Centre—Agrifort Sciences Private Limited—which serves as the innovation engine behind every solution we bring to farmers. Our state-of-the-art facility is equipped with advanced analytical instruments such as HPLC, GC, AAS, Spectrophotometer, along with a fully equipped Pilot Plant for controlled formulation development and scale-up.
                <br/>
                At our R&D Centre, innovation begins with science. Our multidisciplinary team blends biotechnology, fermentation science, plant metabolism, and agronomy to build next-generation biostimulants, advanced nutrient formulations, and precision adjuvants such as super spreaders and stickers. Every formulation we develop goes through a rigorous scientific pathway—from laboratory research to controlled-environment evaluations, followed by extensive multi-location field trials—ensuring consistency, reliability, and real-world performance.
                  </p>
                </div>
              </div>
              <p  className="text-gray-700 leading-relaxed mb-6 text-lg"
                   style={{
                     textAlign: "justify",
                     textJustify: "inter-word",
                   }}>
                     Our research programs revolve around pioneering agricultural technologies, including:
               <strong> Probiotics Technology – Nutriflex
                Kelp Technology – Vikelp 

                Metabolites Technology – Konverter
                </strong>
              APLG Technology (Agrifort Peptide Lacto Gluconate) – NPK, Potash, CaMB, Multimicro
              Protein Hydrolysates Technology – Hortis, Seedfort
              ULST Technology – Herbo 7x, Silfort
              Quality and regulatory integrity are at the core of our R&D philosophy. All our products strictly adhere to FCO (Fertilizer Control Order) specifications and comply with all relevant national regulatory bodies—ensuring transparency, safety, and trust for our growers and partners.
              We continue to strengthen our scientific base through collaborations with leading national and international institutions such as ICAR-IIPR, CSIR-NBRI, U.P. Council of Sugarcane Research, Asian PGPR Society (USA), and multiple Krishi Vigyan Kendras (KVKs). 

                   <br/>
                   Driven by scientific excellence and a commitment to sustainable, farmer-centric innovation, we are constantly developing technologies that enhance nutrient efficiency, boost crop resilience, improve soil health, and help farmers achieve higher productivity and profitability.
              </p>
            </div>
          )}

          {/* 3. People */}
          {activeTab === 'people' && (
            <div className="text-center py-20 animate-in fade-in duration-700">
              <Users size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-400 italic">Comming Soon...</h3>
            </div>
          )}

          {/* 4. Tech Products */}
          {activeTab === 'tech' && (
            <div className="text-center py-20 animate-in fade-in duration-700">
              <Cpu size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold text-gray-400">Explore our products in the sections below</h3>
            </div>
          )}

          {/* 5. Trusted Partnerships */}
          {activeTab === 'partnerships' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-700">

              <div className="relative">

              <div className="rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <img
                src="/images/backgrounds/blue-quardrant.jpg"
                  alt="Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>

              </div>  
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>Trusted partnerships </h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                AgriFort is built on the vision and guidance of Blue Quadrant Limited, a global name in the civil aviation domain, under which they deliver advanced Communication, Navigation and Surveillance solutions. Their expertise spans Emergency Response and Search & Rescue Management, Airside Vehicle Surveillance, Simulators, Mobile Air Traffic Control Towers, Flight Calibration and complete NAVAIDS system integration. In 2015, during strategic meetings in Dubai, Blue Quadrant’s leadership envisioned bringing their technology-first, precision-driven approach into Indian agriculture. Their interest in introducing cutting-edge probiotic and metabolite-based advancements to farming laid the foundation for AgriFort. Since then, their global experience, innovation mindset and strong support have guided our evolution at every step. With their backing, AgriFort continues to adopt scientific breakthroughs and deliver meaningful, future-ready solutions for the agricultural community.
                </p>
                <a 
                  href="https://www.blue-quadrant.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
                >
                  Visit Blue Quadrant <ExternalLink size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgriFortAdvantages;