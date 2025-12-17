// import React, { useState } from 'react';

// const AgriFortAdvantages = () => {
//   const [activeTab, setActiveTab] = useState('manufacturing');

//   const locations = [
//     { name: 'Sonipat', region: 'Delhi NCR' },
//     { name: 'Bhavnagar', region: 'Gujarat' },
//     { name: 'Vidisha', region: 'Madhya Pradesh' },
//     { name: 'Hyderabad', region: 'Telangana' },
//     { name: 'Unnao', region: 'UP SCR' }
//   ];

//   const technologies = [
//     { name: 'Probiotics Technology', product: 'Nutriflex' },
//     { name: 'Kelp Technology', product: 'Vikelp' },
//     { name: 'Metabolites Technology', product: 'Konverter' },
//     { name: 'APLG Technology', product: 'NPK, Potash, CaMB, Multimicro' },
//     { name: 'Protein Hydrolysates', product: 'Hortis, Seedfort' },
//     { name: 'ULST Technology', product: 'Herbo 7x, Silfort' }
//   ];

//   const partners = [
//     'ICAR-IIPR',
//     'CSIR-NBRI',
//     'U.P. Council of Sugarcane Research',
//     'Asian PGPR Society (USA)',
//     'Krishi Vigyan Kendras (KVKs)'
//   ];

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Tab Navigation */}
//       <div className="sticky top-0 z-50 bg-white shadow-lg border-b-4 border-green-600">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex overflow-x-auto space-x-2 sm:space-x-4 py-4 scrollbar-hide">
//             {[
//               { id: 'manufacturing', label: 'Manufacturing' },
//               { id: 'rnd', label: 'R&D' },
//               { id: 'people', label: 'People at AFT' },
//               { id: 'products', label: 'Tech Products' },
//               { id: 'partnerships', label: 'Partnerships' }
//             ].map((tab) => (
//               <button
//                 key={tab.id}
//                 onClick={() => setActiveTab(tab.id)}
//                 className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg whitespace-nowrap transition-all text-sm sm:text-base font-semibold ${
//                   activeTab === tab.id
//                     ? 'bg-green-600 text-white shadow-xl scale-105'
//                     : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-102'
//                 }`}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Content Sections */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        
//         {/* Manufacturing Section */}
//         {activeTab === 'manufacturing' && (
//           <div className="animate-fadeIn">
//             <div className="text-center mb-8 sm:mb-12">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Manufacturing Excellence</h1>
//               <div className="w-24 sm:w-32 h-1 bg-green-600 mx-auto rounded-full mb-3 sm:mb-4"></div>
//               <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">Precision, consistency, and uncompromised quality across five strategic locations</p>
//             </div>

//             {/* Key Stats */}
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
//               <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border-l-4 border-green-600 hover:shadow-2xl transition-all hover:-translate-y-1">
//                 <div className="text-center">
//                   <div className="text-4xl sm:text-5xl font-bold text-green-600 mb-2">5</div>
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Manufacturing Units</h3>
//                   <p className="text-sm text-gray-600">Strategically located across India</p>
//                 </div>
//               </div>

//               <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border-l-4 border-blue-600 hover:shadow-2xl transition-all hover:-translate-y-1">
//                 <div className="text-center">
//                   <div className="text-4xl sm:text-5xl font-bold text-blue-600 mb-2">100%</div>
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Quality Assured</h3>
//                   <p className="text-sm text-gray-600">Multi-stage quality control</p>
//                 </div>
//               </div>

//               <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border-l-4 border-red-800 hover:shadow-2xl transition-all hover:-translate-y-1">
//                 <div className="text-center">
//                   <div className="text-4xl sm:text-5xl font-bold text-red-800 mb-2">FCO</div>
//                   <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">Compliant</h3>
//                   <p className="text-sm text-gray-600">All regulatory standards met</p>
//                 </div>
//               </div>
//             </div>

//             {/* Main Content */}
//             <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
//               <p className="text-gray-800 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
//                 At AgriFort, manufacturing stands as one of our core strengths, driven by a relentless focus on precision, consistency and uncompromised quality. Our production ecosystem is supported by modern technology, advanced equipment and standardized processes that ensure consistent product quality. A rigorous multi-stage quality assurance system checks every stage from raw material selection to final packaging.
//               </p>

//               <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
//                 Our Manufacturing Locations
//               </h3>
              
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6 sm:mb-8">
//                 {locations.map((location, index) => (
//                   <div key={index} className="bg-green-50 p-5 rounded-xl border-l-4 border-green-600 hover:shadow-lg transition-all hover:-translate-y-1">
//                     <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-1">{location.name}</h4>
//                     <p className="text-sm sm:text-base text-gray-600">{location.region}</p>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-blue-50 p-6 sm:p-8 rounded-xl border-l-4 border-blue-600">
//                 <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-3">Our Commitment</h4>
//                 <p className="text-gray-800 text-base leading-relaxed">
//                   Our approach is strengthened by continuous improvement powered by science-based formulation and field-tested results, ensuring each product performs reliably in real farming conditions. We strictly adhere to all government regulations, legal guidelines and required safety protocols throughout the production cycle.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* R&D Section */}
//         {activeTab === 'rnd' && (
//           <div className="animate-fadeIn">
//             <div className="text-center mb-8 sm:mb-12">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Research & Development</h1>
//               <div className="w-24 sm:w-32 h-1 bg-blue-600 mx-auto rounded-full mb-3 sm:mb-4"></div>
//               <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">Innovation engine behind every solution we bring to farmers</p>
//             </div>

//             {/* R&D Facility Highlights */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
//               <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 border-t-4 border-blue-600">
//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Agrifort Sciences Pvt. Ltd.</h3>
//                 <p className="text-gray-800 mb-4 text-base">Our state-of-the-art in-house R&D Centre equipped with:</p>
//                 <ul className="space-y-3 text-gray-800 text-base">
//                   <li className="flex items-start gap-3">
//                     <span className="text-green-600 font-bold text-xl">•</span>
//                     <span>Advanced HPLC, GC, AAS analyzers</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-green-600 font-bold text-xl">•</span>
//                     <span>Spectrophotometer technology</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-green-600 font-bold text-xl">•</span>
//                     <span>Fully equipped Pilot Plant</span>
//                   </li>
//                   <li className="flex items-start gap-3">
//                     <span className="text-green-600 font-bold text-xl">•</span>
//                     <span>Multi-location field trial facilities</span>
//                   </li>
//                 </ul>
//               </div>

//               <div className="bg-green-50 rounded-2xl shadow-2xl p-6 sm:p-8 border-t-4 border-green-600">
//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Scientific Approach</h3>
//                 <p className="text-gray-800 mb-4 text-base">Our multidisciplinary team specializes in:</p>
//                 <div className="space-y-3">
//                   <div className="bg-white p-4 rounded-lg shadow-md">
//                     <p className="font-semibold text-gray-900 text-base">Biotechnology & Fermentation Science</p>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-md">
//                     <p className="font-semibold text-gray-900 text-base">Plant Metabolism & Agronomy</p>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-md">
//                     <p className="font-semibold text-gray-900 text-base">Advanced Nutrient Formulations</p>
//                   </div>
//                   <div className="bg-white p-4 rounded-lg shadow-md">
//                     <p className="font-semibold text-gray-900 text-base">Precision Adjuvants Technology</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Technologies */}
//             <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 mb-6 sm:mb-8">
//               <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Our Pioneering Technologies</h3>
              
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
//                 {technologies.map((tech, index) => (
//                   <div key={index} className="bg-blue-50 p-5 sm:p-6 rounded-xl border-l-4 border-blue-600 hover:shadow-xl transition-all hover:-translate-y-1">
//                     <h4 className="font-bold text-gray-900 text-lg sm:text-xl mb-2">{tech.name}</h4>
//                     <p className="text-sm sm:text-base text-gray-800">
//                       <span className="font-semibold text-green-700">Products:</span> {tech.product}
//                     </p>
//                   </div>
//                 ))}
//               </div>

//               <div className="bg-red-50 p-6 sm:p-8 rounded-xl border-l-4 border-red-800">
//                 <h4 className="font-bold text-gray-900 mb-3 text-lg sm:text-xl">Quality & Compliance</h4>
//                 <p className="text-gray-800 leading-relaxed text-base">
//                   All our products strictly adhere to <span className="font-bold text-red-800">FCO (Fertilizer Control Order)</span> specifications and comply with all relevant national regulatory bodies—ensuring transparency, safety, and trust for our growers and partners.
//                 </p>
//               </div>
//             </div>

//             {/* Research Partners */}
//             <div className="bg-green-600 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 text-white">
//               <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Research Collaborations</h3>
//               <p className="mb-6 text-base sm:text-lg text-green-50">Strengthening our scientific base through partnerships with leading institutions:</p>
//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                 {partners.map((partner, index) => (
//                   <div key={index} className="bg-white bg-opacity-20 p-4 sm:p-5 rounded-lg border-2 border-white border-opacity-30 hover:bg-opacity-30 transition-all">
//                     <p className="font-semibold text-center text-sm sm:text-base">{partner}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* People Section */}
//         {activeTab === 'people' && (
//           <div className="animate-fadeIn">
//             <div className="text-center">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">People at AgriFort</h1>
//               <div className="w-24 sm:w-32 h-1 bg-green-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
//               <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 md:p-16">
//                 <p className="text-xl sm:text-2xl text-gray-700 font-semibold">Content coming soon...</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Tech Products Section */}
//         {activeTab === 'products' && (
//           <div className="animate-fadeIn">
//             <div className="text-center">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Tech-Based Products</h1>
//               <div className="w-24 sm:w-32 h-1 bg-blue-600 mx-auto rounded-full mb-6 sm:mb-8"></div>
//               <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12 md:p-16">
//                 <p className="text-xl sm:text-2xl text-gray-700 font-semibold">Product catalog available in separate sections...</p>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Partnerships Section */}
//         {activeTab === 'partnerships' && (
//           <div className="animate-fadeIn">
//             <div className="text-center mb-8 sm:mb-12">
//               <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">Trusted Partnerships</h1>
//               <div className="w-24 sm:w-32 h-1 bg-blue-600 mx-auto rounded-full mb-3 sm:mb-4"></div>
//               <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto px-4">Built on the vision and guidance of Blue Quadrant Limited</p>
//             </div>

//             <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12">
//               <div className="mb-6 sm:mb-8 text-center">
//                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Blue Quadrant Limited</h2>
//                 <a 
//                   href="https://www.bluequadrant.com" 
//                   target="_blank" 
//                   rel="noopener noreferrer"
//                   className="inline-block text-blue-600 hover:text-blue-700 font-bold underline text-base sm:text-lg mb-4 sm:mb-6"
//                 >
//                   Visit Website →
//                 </a>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
//                 <div className="bg-blue-50 p-6 sm:p-8 rounded-xl border-l-4 border-blue-600">
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Global Aviation Expertise</h3>
//                   <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
//                     A global name in civil aviation, delivering advanced Communication, Navigation and Surveillance solutions including Emergency Response, Search & Rescue Management, and Airside Vehicle Surveillance.
//                   </p>
//                 </div>

//                 <div className="bg-green-50 p-6 sm:p-8 rounded-xl border-l-4 border-green-600">
//                   <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">Vision for Agriculture</h3>
//                   <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
//                     In 2015, during strategic meetings in Dubai, Blue Quadrant's leadership envisioned bringing their technology-first, precision-driven approach into Indian agriculture.
//                   </p>
//                 </div>
//               </div>

//               <div className="bg-red-50 p-6 sm:p-8 rounded-xl border-l-4 border-red-800">
//                 <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">The AgriFort Foundation</h3>
//                 <p className="text-gray-800 leading-relaxed mb-4 text-base">
//                   Their interest in introducing cutting-edge probiotic and metabolite-based advancements to farming laid the foundation for AgriFort. Since then, their global experience, innovation mindset and strong support have guided our evolution at every step.
//                 </p>
//                 <p className="text-gray-900 leading-relaxed font-bold text-base sm:text-lg">
//                   With their backing, AgriFort continues to adopt scientific breakthroughs and deliver meaningful, future-ready solutions for the agricultural community.
//                 </p>
//               </div>
//             </div>
//           </div>
//         )}

//       </div>

//       <style jsx>{`
//         @keyframes fadeIn {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//         .animate-fadeIn {
//           animation: fadeIn 0.5s ease-out;
//         }
//         .scrollbar-hide::-webkit-scrollbar {
//           display: none;
//         }
//         .scrollbar-hide {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AgriFortAdvantages;


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
    <div className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-bold text-green-600 uppercase tracking-widest mb-2">Our Core Strength</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">The AgriFort Advantage</h1>
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
              <h3 className="text-2xl font-bold text-gray-400 italic">Content to be shared later...</h3>
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