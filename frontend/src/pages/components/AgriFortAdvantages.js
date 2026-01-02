import React, { useState } from 'react';
import { Factory, Microscope, Users, Cpu, Handshake, ExternalLink, CheckCircle2 } from 'lucide-react';

const AgriFortAdvantages = () => {
  const [activeTab, setActiveTab] = useState('manufacturing');

  const tabs = [
    { id: 'manufacturing', label: 'Manufacturing', icon: Factory, image: '/images/advantage/manufecturing.png' },
    { id: 'rd', label: 'R&D', icon: Microscope, image: '/images/advantage/rnd.png' },
    { id: 'people', label: 'People at AFT', icon: Users, image: '/images/advantage/people.png' },
    { id: 'tech', label: 'Tech-based Products', icon: Cpu, image: '/images/advantage/tech-based.png' },
    { id: 'partnerships', label: 'Trusted Partnerships', icon: Handshake, image: '/images/backgrounds/partnerships.png' },
  ];

  const serviceCards = [
    {
      id: 'manufacturing',
      label: 'Manufacturing',
      icon: Factory
    },
  
    {
      id: 'rd',
      label: 'R&D',
      icon: Microscope
    },
    {
      id: 'people',
      label: 'People at AFT',
      icon: Users
    },
    {
      id: 'tech',
      label: 'Tech-based Products',
      icon: Cpu
    },
   
    {
      id: 'partnerships',
      label: 'Trusted Partnerships',
      icon: Handshake
    }
  ];

  return (
    <div className="" style={{ backgroundImage: "url('/images/advantage/banner22.jpg')", backgroundSize: 'cover', backgroundPosition: 'center',  }}>
      <div className="relative bg-black/80 backdrop-blur-xs">
        {/* Section Header */}
        <div className="text-center p-16 text-white" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>  The AgriFort Advantages</h1>
        </div>

        {/* Navigation Tabs */}

        {/* Navigation Tabs - Visual Icons */}
        <div className="px-4">
      {/* Main Values Section - Glass Morphism Cards */}
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {serviceCards.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.id}
                onClick={() => setActiveTab(value.id)}
                className={`relative group cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  activeTab === value.id ? 'scale-105' : ''
                }`}
              >
                <div className={`relative transition-all duration-300 ${
                  activeTab === value.id ? 'scale-105' : ''
                }`}>
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-4">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 ${
                      activeTab === value.id
                        ? 'bg-green-500 shadow-lg shadow-green-500/50'
                        : 'bg-white/20 group-hover:bg-white/30'
                    }`}>
                      <Icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                  {/* Label */}
                  <h3 className="text-xl font-bold text-white text-center mb-2">
                    {value.label}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      </div>
        {/* <div className="flex flex-wrap justify-center gap-6 mb-12 px-4" data-aos="fade-up">
  {tabs.map((tab) => (
      <div
      className={`w-16 h-16 flex items-center justify-center rounded-full overflow-hidden transition-all duration-300 ${
        activeTab === tab.id
          ? 'bg-green-600 cursor-pointer'
          : 'bg-gray-50 group-hover:bg-green-100 cursor-pointer'
      }`}
      onClick={() => setActiveTab(tab.id)}
    >
      <img
        src={tab.image}
        alt={tab.label}
        className={`w-10 h-10 object-contain ${
          activeTab === tab.id ? 'brightness-0 invert' : ''
        }`}
      />
    </div>
    
  ))}
</div> */}
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
        <div className="p-8 md:p-12 shadow-sm min-h-[500px]">
          
          {/* 1. Manufacturing */}
          {activeTab === 'manufacturing' && (
          <>
               
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 text-white">
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
                  <h3 className="text-3xl font-bold text-white mb-6"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>Manufacturing</h3>
                  <p
                   className="text-white leading-relaxed mb-6 text-sm"
                   style={{
                     textAlign: "justify",
                     textJustify: "inter-word",
                   }}
                  //  className="text-gray-700 leading-relaxed text-lg mb-6"
                  >
                   
                  At AgriFort, manufacturing stands as one of our core strengths, driven by a relentless focus on precision, consistency and uncompromised quality. Our production ecosystem spans across Sonipat (Delhi NCR), Bhavnagar, Vidisha, Hyderabad and Unnao (UP SCR), strategically chosen for their advanced infrastructure and strong technical expertise. Every product is crafted through a meticulously controlled process supported by modern technology, advanced equipment and standardized processes that ensure consistent product quality. A rigorous multi-stage quality assurance system checks every stage from raw material selection to final packaging. 
                  Our manufacturing capabilities have been further strengthened through the integration of Geekay, a dedicated manufacturing entity within the AgriFort Group, enhancing capacity, operational control and production efficiency across our facilities.
                  <br/>
                  Our approach is reinforced by continuous improvement driven by science-based formulation and field-tested results, ensuring each product performs reliably under real farming conditions. We strictly adhere to all government regulations, legal guidelines and mandated safety protocols throughout the production cycle. This disciplined system enables us to deliver dependable, high-performance agri-inputs that farmers can trust season after season.
                 
                  </p>
                </div>
              </div>
           
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
                  <h3 className="text-3xl font-bold text-white mb-6"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}> R&D</h3>
                  <p 
                   className="text-white leading-relaxed mb-6 text-sm"
                   style={{
                     textAlign: "justify",
                     textJustify: "inter-word",
                   }}
                  // className="text-gray-700 leading-relaxed text-lg mb-6"
                  >
                   
                We have established our own in-house Research & Development Centre—Agrifort Sciences Private Limited—which serves as the innovation engine behind every solution we bring to farmers. Our state-of-the-art facility is equipped with advanced analytical instruments such as HPLC, GC, AAS, Spectrophotometer, along with a fully equipped Pilot Plant for controlled formulation development and scale-up.
                <br/>
                At our R&D Centre, innovation begins with science. Our multidisciplinary team blends biotechnology, fermentation science, plant metabolism, and agronomy to build next-generation biostimulants, advanced nutrient formulations, and precision adjuvants such as super spreaders and stickers. Every formulation we develop goes through a rigorous scientific pathway—from laboratory research to controlled-environment evaluations, followed by extensive multi-location field trials—ensuring consistency, reliability, and real-world performance. Our research programs revolve around pioneering agricultural technologies, including:
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
              </div>
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
                <h3 className="text-3xl font-bold text-white mb-6"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>Trusted partnerships </h3>
                <p className="text-white leading-relaxed mb-6 text-sm">
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