import React from 'react';
import { Quote, User, Briefcase, ChevronRight } from 'lucide-react';

const LeadershipMessages = () => {
  return (
    <div className="bg-slate-50 py-6 md:py-6">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>  Leadership Insights</h1>
          
          {/* <div className="w-20 h-1 bg-green-500 mx-auto mt-4 rounded-full"></div> */}
        </div>

        <div className="space-y-20">
          
          {/* Chairman Section */}
          <div className="relative group" data-aos="fade-right">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 bg-white p-8 md:p-12 rounded-3xl border border border-gray-100">
              <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
                {/* <div className="absolute inset-0 bg-green-100 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-500"></div> */}
                <div className="relative w-full h-full bg-gray-200 rounded-2xl overflow-hidden shadow-md flex items-center justify-center">
                  {/* <User size={80} className="text-gray-400" /> */}
                  <img src="/Team/DK Chopra.jpg" alt="DK Chopra" className="w-full h-full object-cover" />
                </div>
                <div className="text-center mt-6">
                  <h4 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">DK Chopra</h4>
                  <p className="text-green-600 font-medium">Honorary Chairman</p>
                  <p className="text-green-600 font-medium"> AgriFort Technologies</p>
                </div>
              </div>
              
              <div className="flex-1">
                <Quote className="text-green-200 w-12 h-12 mb-4" />
                <div className="prose prose-lg text-gray-700 leading-relaxed italic">
                  <p className="mb-4">
                    It’s indeed my pleasure to welcome you to our digital platform — our website to give you a glimpse of our progressive vibrant company Agrifort Technologies.
                  </p>
                  <p className="mb-4">
                    During the last about 10 years or so, besides the business achievements, Agrifort has emerged and consolidated its position as a dynamic Company offering innovative solutions and services to empower farmers to reap full potential in productivity and quality of produce of different crops they grow.
                  </p>
                  <p className="mb-4">
                    India is at the cusp of technological revolution in the field of Agriculture. As a country we are well poised to be the 3rd largest economy in not a very distant future. With increasing incomes, growing population, we have to focus on introducing new technologies to boost farm productivity and ensure food security for all.
                  </p>
                  <p className="mb-4">
                    We believe that collaboration, research and innovation are the keys to overcome diverse challenges faced by our farmers.
                  </p>
                  <p className="mb-4">
                    As we look ahead, our focus shall be to provide our unwavering support to the farming community with effective and exceptional products, thus contributing in promoting responsible and eco friendly growth and a self reliant agricultural ecosystem.
                  </p>
                  <p className="mb-6 font-semibold text-gray-900">
                    Team Agrifort is committed and deeply passionate as a modest stakeholder, to help build a future where Agriculture thrives and every farmer succeeds!
                  </p>
                  <p className="text-sm not-italic mb-6">
                    I will encourage you to explore our website to learn more about the company, its products, services and the new initiatives. We shall certainly welcome and value any feedback or suggestions that you may have.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Section */}
          <div className="relative group" data-aos="fade-left">
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 bg-white p-8 md:p-12 rounded-3xl border border-gray-100">
              <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0 relative">
                {/* <div className="absolute inset-0 bg-blue-100 rounded-2xl -rotate-6 group-hover:-rotate-12 transition-transform duration-500"></div> */}
                <div className="relative w-full h-full bg-gray-200 rounded-2xl overflow-hidden shadow-md flex items-center justify-center text-gray-500">
                   <Briefcase size={80} className="text-gray-400" />
                   {/* <img src="/ceo-photo.jpg" alt="Sharad Awasthi" className="w-full h-full object-cover" /> */}
                </div>
                <div className="text-center mt-6">
                  <h4 className="text-2xl font-bold text-gray-900 uppercase tracking-tight">Sharad Awasthi</h4>
                  <p className="text-green-600 font-medium">Group CEO</p>
                  <p className="text-green-600 font-medium">AgriFort Group of companies</p>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="prose prose-lg text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    Every milestone AgriFort achieves is rooted in the people who believe in us—our farmers, customers, partners, and team. Their trust and support inspire us to innovate consistently and deliver value where it matters most.
                  </p>
                  <p className="mb-4">
                    Our commitment to empowering farmers guides everything we do. Through science-driven Biostimulants, Bio-fertilizers, Crop Protection solutions, and other advanced technologies, we strive to enhance productivity, quality, and sustainability across diverse crops. As agriculture evolves, we are also preparing to expand into NextGen Hybrid Seeds and Aquaculture technologies to further support farming communities.
                  </p>
                  <p className="mb-4">
                    Innovation remains central to our purpose. By developing research-led products that meet global standards and staying closely connected to the needs of farmers and partners, we ensure our solutions address real challenges and encourage new ideas.
                  </p>
                  <p className="mb-4 font-medium text-gray-800">
                    We believe technology will continue to transform agriculture—strengthening food security, crop health, and long-term economic growth in rural India. Customer satisfaction stays at the heart of our approach, from product quality to dependable service, aligned with our Quality Policy and Environmental commitments.
                  </p>
                  <p className="mb-4">
                    Above all, AgriFort’s greatest strength is its people. Their dedication and belief in our vision drive us to pursue excellence and build a future where agriculture thrives and every farmer progresses.
                  </p>
                  <p className="text-lg font-bold text-green-700">
                    Together—with our farmers, customers, partners, and team—we move forward with confidence toward shared growth and prosperity.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Closing Footer Badge */}
        {/* <div className="mt-16 text-center" data-aos="zoom-in">
           <div className="inline-flex items-center gap-2 px-6 py-2 bg-green-600 text-white rounded-full font-bold shadow-lg">
             With commitment to progress <ChevronRight size={18} />
           </div>
        </div> */}

      </div>
    </div>
  );
};

export default LeadershipMessages;