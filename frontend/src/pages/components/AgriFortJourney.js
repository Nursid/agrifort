import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sprout, ShieldCheck } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AgriFortJourney = () => {
  // Initialize AOS for scroll animations
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const primaryDark = "#0f3d2e";
  const accentGreen = "#1c5517";

  return (
    <section className="relative min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden">
      
      {/* LEFT COLUMN: VISUALS */}
      <div className="relative w-full md:w-6/12 h-[50vh] md:h-screen p-6 md:8 lg:12">
      <motion.div
        // initial={{ opacity: 0, x: -120, scale: 0.98 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        // transition={{
        //   duration: 1,
        //   ease: [0.22, 1, 0.36, 1], // cinematic ease
        //   delay: 0.2
        // }}

        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-[50vh] md:h-screen p-6 md:8 lg:12"
      >
        <img
          src="/images/journey/first.jpg"
          alt="Sustainable Farming"
          className="w-full h-full object-cover"
        />
      </motion.div>

        {/* Modern decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
        
        {/* Floating Badge (Extra Polish) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-10 left-10 bg-white p-4 shadow-xl hidden lg:flex items-center gap-3 border-l-4 border-[#1c5517]"
        >
          <Sprout className="text-[#1c5517]" size={32} />
          <div>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">AgriFort technology</p>
            <p className="text-sm font-serif italic text-[#0f3d2e]">Future-Ready Farming</p>
          </div>
        </motion.div>
      </div>

      {/* RIGHT COLUMN: CONTENT */}
      <div className="w-full md:w-6/12 flex items-center justify-center p-4 md:p-8 lg:p-12 bg-white relative">
        
        {/* Decorative Leaf Background Icon */}
        <div className="absolute top-10 right-10 pointer-events-none 
                opacity-5 rotate-12
                group-hover:opacity-100
                transition-all duration-500">
  <Leaf
    size={200}
    className="text-[#1c5517]"
  />
</div>


        <div className="max-w-2xl relative z-10">
          <header className="mb-8" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6" style={{ color: primaryDark, fontFamily: 'serif' }}>
              AgriFort <span className="text-[#1c5517] italic text-5xl md:text-6xl">Journey</span>
            </h2>
          </header>

          <div className="space-y-6 text-gray-700 text-sm leading-relaxed">
            <p data-aos="fade-up" data-aos-delay="100">
              <strong className="text-[#0f3d2e]">AgriFort Technologies</strong> was born from a vision at Blue Quadrant, Dubai—to build a strong, future-ready agriculture company, and what better place to begin this journey than in the heart of Indian farming. What started as a single idea has today grown into one of the fastest-rising groups in the sustainable agriculture space, driven by innovation, science and a deep commitment to farmers.
            </p>

            <p data-aos="fade-up" data-aos-delay="200">
            As the world shifts towards environmentally responsible, low-chemical and nutrition-focused farming, AgriFort stands at the forefront with advanced, technology-backed solutions designed to increase yields and enhance farm income. Over the years, our journey has expanded beyond agriculture into a robust ecosystem of companies: BlueFort Healthcare in the pharmaceutical sector, Vetsburg in veterinary sector, Sutantra in information technology, AgriFort Sciences as our dedicated research and development arm, Geekay as our manufacturing unit and AgriFort Seedex, registered for our future seed innovation endeavours. Together, they represent our belief in building a group that solves real problems across agriculture, health and technology—strengthening the lives of people we serve.
            </p>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6" data-aos="fade-up" data-aos-delay="300">
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                 <ShieldCheck className="text-[#1c5517] shrink-0" />
                 <span className="text-sm font-medium text-[#0f3d2e]">Research Driven (AgriFort Sciences)</span>
              </div>
              <div className="flex items-start gap-3 p-4 bg-green-50 rounded-lg border border-green-100">
                 <Sprout className="text-[#1c5517] shrink-0" />
                 <span className="text-sm font-medium text-[#0f3d2e]">Future Seed Innovation</span>
              </div>
            </div> */}

            <p data-aos="fade-up" data-aos-delay="400">
            With a wide range of eco-friendly and cost-effective products, a distribution network that reaches the deepest pockets of India, and global collaborations supporting our growth, we have earned the trust of millions of farmers who consistently share exceptional results on the field. Their success stories inspire us daily and validate the science and passion behind everything we create.
            </p>
            <p data-aos="fade-up" data-aos-delay="400">
            As an organisation, we remain committed to society and every stakeholder—working responsibly, innovating relentlessly and striving to bring more smiles to the farmer’s face. For us, the philosophy is simple and eternal: when farmers win – we win.
            </p>

            {/* Signature Block */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="h-px w-12 bg-[#1c5517] hidden sm:block"></div>
              <p className="text-xl font-serif italic text-[#1c5517] font-semibold text-center sm:text-left">
                "When farmers win – we win."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Mobile-only background element */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#1c5517] opacity-10 rounded-tl-full md:hidden"></div>
    </section>
  );
};

export default AgriFortJourney;