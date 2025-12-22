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
    <div className="bg-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">The AgriFort Journey</h1>
          <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === tab.id 
                ? 'bg-green-600 text-white shadow-lg scale-105' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 min-h-[500px]">
          
          {/* 1. Manufacturing */}
          {activeTab === 'manufacturing' && (
            <div className="grid lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Precision Manufacturing</h3>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  At AgriFort, manufacturing is driven by precision, consistency, and uncompromised quality. 
                  Our ecosystem spans across <strong>Sonipat, Bhavnagar, Vidisha, Hyderabad, and Unnao</strong>.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {['Geekay Integration', 'Multi-stage QA', 'Modern Technology', 'Strict Safety Protocols'].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle2 className="text-green-500" size={20} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <img
                  src="/images/backgrounds/manufecturing.jpg"
                  alt="Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>

            </div>
          )}

          {/* 2. R&D */}
          {activeTab === 'rd' && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="grid lg:grid-cols-2 gap-12 mb-12 items-center">
                <div className="order-2 lg:order-1">
                  <div className="bg-white p-4 rounded-2xl shadow-xl border border-gray-200">
                    <div className="aspect-video bg-gray-200 rounded-xl flex items-center justify-center text-gray-400 italic">
                      {/* [Photo of R&D House / Agrifort Sciences Private Limited] */}
                      <img src='/images/backgrounds/rnd.png' />
                    </div>
                  </div>
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Agrifort Sciences (R&D)</h3>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Our in-house R&D centre is the innovation engine. Equipped with HPLC, GC, AAS, and Spectrophotometers, 
                    we blend biotechnology and agronomy to build next-generation formulations.
                  </p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[
                  { t: 'Probiotics', d: 'Nutriflex' },
                  { t: 'Kelp Technology', d: 'Vikelp' },
                  { t: 'Metabolites', d: 'Konverter' },
                  { t: 'APLG Tech', d: 'NPK, Potash, CaMB' },
                  { t: 'Protein Hydrolysates', d: 'Hortis, Seedfort' },
                  { t: 'ULST Tech', d: 'Herbo 7x, Silfort' }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-xl border-b-4 border-green-500 shadow-sm">
                    <h4 className="font-bold text-green-700">{item.t}</h4>
                    <p className="text-gray-600">{item.d}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 mb-4 uppercase tracking-widest">Our Collaborators</p>
                <div className="flex flex-wrap justify-center gap-8 grayscale opacity-70 hover:grayscale-0 transition-all">
                   {/* Add Logos Here */}
                   <span className="font-bold text-gray-400">ICAR-IIPR</span>
                   <span className="font-bold text-gray-400">CSIR-NBRI</span>
                   <span className="font-bold text-gray-400">UPCSR</span>
                   <span className="font-bold text-gray-400">ASIAN PGPR</span>
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
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-4">
                  Strategic Global Partner
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Blue Quadrant Limited</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  AgriFort is built on the vision of Blue Quadrant Limited, a global leader in civil aviation. 
                  In 2015, they envisioned bringing their precision-driven approach into Indian agriculture, 
                  introducing probiotic and metabolite-based advancements.
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
              <div className="relative">

              <div className="rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <img
                src="/images/backgrounds/blue-quardrant.jpg"
                  alt="Manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AgriFortAdvantages;