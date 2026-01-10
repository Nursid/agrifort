import React, { useState, useEffect } from "react";
import { Factory, Microscope, Users, Cpu, Handshake,ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence  } from 'framer-motion';
import { Leaf, Sprout, ShieldCheck } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useNavigate } from "react-router-dom";


const AgrifortPage = () => {

  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("manufacturing");
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  

  const tabs = [
    {
      id: "manufacturing",
      title: "Manufacturing",
      icon: Factory,
      color: "#E54B2D",
    },
    {
      id: "rnd",
      title: "R&D",
      icon: Microscope,
    },
    {
      id: "people",
      title: "People at AFT",
      icon: Users,
    },
    {
      id: "tech",
      title: "Tech-Based Products",
      icon: Cpu,
    },
    {
      id: "partners",
      title: "Trusted Partnerships",
      icon: Handshake,
    },
  ];

  const images = [
    "/manufecturing/1.jpeg",
    "/manufecturing/2.jpeg",
    "/manufecturing/3.jpeg",
  ];

  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="w-full font-sans">
      {/* 1. Header Section */}
      <div className="bg-[#E54B2D] p-2 flex gap-4 items-center justify-center text-white">
        {/* <div className="bg-white p-2 rounded-full"> */}
          {/* Placeholder for the Leaf Logo */}
          {/* <div className="w-8 h-8 bg-[#E54B2D] rounded-full flex items-center justify-center">
            <span className="text-white text-xs">🍃</span>
          </div> */}
         <div className="w-8 h-8 bg-[#E54B2D] rounded-full flex items-center justify-center">
          <Leaf size={48} className="text-white" />
        </div>

        {/* </div> */}
        <h1 className="font-heading text-5xl md:text-6xl">Environmental Policy</h1>
      </div>

      {/* 2. Policy Content Section */}
      <div 
        className="relative py-6 px-6 md:px-12 text-center bg-white"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto space-y-4">
          <p className="text-gray-800 text-lg leading-relaxed font-medium">
            Our company's foundation rests on strong value systems that guide every action we take. 
            We are committed to conducting our business in a socially responsible, ethical, and transparent manner. 
            We respect the law, uphold universal human rights, safeguard the environment, and contribute positively to the communities we serve.
          </p>
          <p className="text-[#649564] text-xl font-bold">
            To operate in ways that are good for people and for the planet.
          </p>
        </div>
      </div>

      {/* 3. Advantages Section (Green Footer) */}
      <div className="bg-[#5F8D5F] py-12 px-4 text-white">
        <h2 className="text-center font-heading text-5xl md:text-6xl mb-12">The Agrifort Advantages</h2>
        
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
        {tabs.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <div
              key={item.id}
              onClick={() => {
                  if (item.id === 'people') {
                    navigate('/leaders-&-people');
                  } else if (item.id === 'tech') {
                    navigate('/Portfolio');
                  } else {
                    setActiveTab(item.id);
                  }
                }}
              className="flex flex-col items-center gap-4 cursor-pointe r"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#E54B2D] text-white shadow-lg"
                      : "bg-white text-[#5F8D5F] border border-[#E54B2D]/30"
                  }`}
              >
                <Icon size={32} />
              </div>

              <span
                className={`text-sm font-heading-alt `}
              >
                {item.title}
              </span>
            </div>
          );
        })}
  </div>
      </div>

      {activeTab === 'manufacturing' && (
          <>
            <section className="relative min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden">
            
            <div className="relative w-full md:w-6/12 h-[50vh] md:h-screen md:8 lg:12">
            <AnimatePresence>
              <motion.img
                key={index}
                src={images[index]}
                alt="Journey Slide"
                className="absolute w-full h-full object-cover"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </AnimatePresence>
                {/* LEFT ICON */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 z-10
                   bg-black/40 hover:bg-black/70
                   p-3 rounded-full text-white transition"
      >
        <ChevronLeft size={28} />
      </button>

      {/* RIGHT ICON */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 z-10
                   bg-black/40 hover:bg-black/70
                   p-3 rounded-full text-white transition"
      >
        <ChevronRight size={28} />
      </button>

              {/* Modern decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
            </div>

            {/* RIGHT COLUMN: CONTENT */}
            <div className="w-full md:w-6/12 flex items-center justify-center p-4 md:p-8 lg:p-12 bg-white relative group">

              
              {/* Decorative Leaf Background Icon */}
              <div
        className="absolute top-10 right-10 rotate-12
                  transition-all duration-500
                  scale-95"
      >
        <Leaf
          size={200}
          className="text-[#1c5517]
                    opacity-20 
                    stroke-[1.5]
                    transition-all duration-500"
        />
      </div>


              <div className="max-w-2xl relative z-10">
                <header className="mb-8" data-aos="fade-up">
                  <h2 className="text-5xl md:text-6xl font-heading-alt mb-6" style={{ color: "#1c5517"}}>
                    Manufacturing
                  </h2>
                </header>

                <div className="space-y-6 text-gray-700 text-sm md:text-md lg:text-lg leading-relaxed">
                <p data-aos="fade-up" data-aos-delay="100">                
                At AgriFort, manufacturing stands as one of our core strengths, driven by a relentless focus on precision, consistency and uncompromised quality. Our production ecosystem spans across Sonipat (Delhi NCR), Bhavnagar, Vidisha, Hyderabad and Unnao (UP SCR), strategically chosen for their advanced infrastructure and strong technical expertise. Every product is crafted through a meticulously controlled process supported by modern technology, advanced equipment and standardized processes that ensure consistent product quality. A rigorous multi-stage quality assurance system checks every stage from raw material selection to final packaging. 
                    Our manufacturing capabilities have been further strengthened through the integration of Geekay, a dedicated manufacturing entity within the AgriFort Group, enhancing capacity, operational control and production efficiency across our facilities.
                </p>
                <p data-aos="fade-up" data-aos-delay="200">       
                Our approach is reinforced by continuous improvement driven by science-based formulation and field-tested results, ensuring each product performs reliably under real farming conditions. We strictly adhere to all government regulations, legal guidelines and mandated safety protocols throughout the production cycle. This disciplined system enables us to deliver dependable, high-performance agri-inputs that farmers can trust season after season.
                </p>
                </div>
              </div>
            </div>
            
            {/* Mobile-only background element */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#1c5517] opacity-10 rounded-tl-full md:hidden"></div>
          </section>
          </>
          )}

          {activeTab === 'rnd' && (
          <>
        <section className="relative min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden">
      
      <div className="relative w-full md:w-6/12 h-[50vh] md:h-screen md:8 lg:12">
      <motion.div
        animate={{ opacity: 1, x: 0, scale: 1 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-[50vh] md:h-screen  md:8 lg:12"
      >
        <img
          src="/images/backgrounds/rnd.png"
          alt="Sustainable Farming"
          className="w-full h-full"
        />
      </motion.div>

        {/* Modern decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
      </div>

      {/* RIGHT COLUMN: CONTENT */}
      <div className="w-full md:w-6/12 flex items-center justify-center p-4 md:p-8 lg:p-12 bg-white relative group">

        
        {/* Decorative Leaf Background Icon */}
        <div
  className="absolute top-10 right-10 rotate-12
             transition-all duration-500
             scale-95"
>
  <Leaf
    size={200}
    className="text-[#1c5517]
               opacity-20 
               stroke-[1.5]
               transition-all duration-500"
  />
</div>


        <div className="max-w-2xl relative z-10">
          <header className="mb-8" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl font-heading-alt mb-6" style={{ color: "#1c5517" }}>
              R&D
            </h2>
          </header>

          <div className="space-y-6 text-gray-700 text-sm leading-relaxed">

          <p data-aos="fade-up" data-aos-delay="100">                
          We have established our own in-house Research & Development Centre—Agrifort Sciences Private Limited—which serves as the innovation engine behind every solution we bring to farmers. Our state-of-the-art facility is equipped with advanced analytical instruments such as HPLC, GC, AAS, Spectrophotometer, along with a fully equipped Pilot Plant for controlled formulation development and scale-up.
          </p>
          <p data-aos="fade-up" data-aos-delay="200">       
                At our R&D Centre, innovation begins with science. Our multidisciplinary team blends biotechnology, fermentation science, plant metabolism, and agronomy to build next-generation biostimulants, advanced nutrient formulations, and precision adjuvants such as super spreaders and stickers. Every formulation we develop goes through a rigorous scientific pathway—from laboratory research to controlled-environment evaluations, followed by extensive multi-location field trials—ensuring consistency, reliability, and real-world performance. Our research programs revolve around pioneering agricultural technologies, including:
               <strong> Probiotics Technology – Nutriflex
                Kelp Technology – Vikelp 

                Metabolites Technology – Konverter.
                </strong> <br/>
                APLG Technology (Agrifort Peptide Lacto Gluconate) – NPK, Potash, CaMB, Multimicro
              Protein Hydrolysates Technology – Hortis, Seedfort
              ULST Technology – Herbo 7x, Silfort
              Quality and regulatory integrity are at the core of our R&D philosophy. All our products strictly adhere to FCO (Fertilizer Control Order) specifications and comply with all relevant national regulatory bodies—ensuring transparency, safety, and trust for our growers and partners.
              We continue to strengthen our scientific base through collaborations with leading national and international institutions such as ICAR-IIPR, CSIR-NBRI, U.P. Council of Sugarcane Research, Asian PGPR Society (USA), and multiple Krishi Vigyan Kendras (KVKs). 
              </p>

              <p data-aos="fade-up" data-aos-delay="100">       
                   Driven by scientific excellence and a commitment to sustainable, farmer-centric innovation, we are constantly developing technologies that enhance nutrient efficiency, boost crop resilience, improve soil health, and help farmers achieve higher productivity and profitability.
                 </p>  
          </div>
        </div>
      </div>
      
      {/* Mobile-only background element */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#1c5517] opacity-10 rounded-tl-full md:hidden"></div>
    </section>
          </>
          )}

          {activeTab === 'partners' && (
          <>
          <section className="relative min-h-screen w-full bg-white flex flex-col md:flex-row overflow-hidden">
      
      <div className="relative w-full md:w-6/12 h-[50vh] md:h-screen md:8 lg:12">
      <motion.div
        animate={{ opacity: 1, x: 0, scale: 1 }}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="h-[50vh] md:h-screen  md:8 lg:12"
      >
        <img
         src="/images/backgrounds/blue-quardrant.jpg"
          alt="Sustainable Farming"
          className="w-full h-full"
        />
      </motion.div>

        {/* Modern decorative overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10" />
      </div>

      {/* RIGHT COLUMN: CONTENT */}
      <div className="w-full md:w-6/12 flex items-center justify-center p-4 md:p-8 lg:p-12 bg-white relative group">

        
        {/* Decorative Leaf Background Icon */}
        <div
  className="absolute top-10 right-10 rotate-12
             transition-all duration-500
             scale-95"
>
  <Leaf
    size={200}
    className="text-[#1c5517]
               opacity-20 
               stroke-[1.5]
               transition-all duration-500"
  />
</div>


        <div className="max-w-2xl relative z-10">
          <header className="mb-8" data-aos="fade-up">
            <h2 className="text-5xl md:text-6xl mb-6 font-heading-alt" style={{ color: "#1c5517" }}>
            Trusted Partnerships
            </h2>
          </header>

          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">

          <p data-aos="fade-up" data-aos-delay="100">                
          AgriFort is built on the vision and guidance of Blue Quadrant Limited, a global name in the civil aviation domain, under which they deliver advanced Communication, Navigation and Surveillance solutions. Their expertise spans Emergency Response and Search & Rescue Management, Airside Vehicle Surveillance, Simulators, Mobile Air Traffic Control Towers, Flight Calibration and complete NAVAIDS system integration. In 2015, during strategic meetings in Dubai, Blue Quadrant’s leadership envisioned bringing their technology-first, precision-driven approach into Indian agriculture. Their interest in introducing cutting-edge probiotic and metabolite-based advancements to farming laid the foundation for AgriFort. Since then, their global experience, innovation mindset and strong support have guided our evolution at every step. With their backing, AgriFort continues to adopt scientific breakthroughs and deliver meaningful, future-ready solutions for the agricultural community.
             <a 
                  href="https://www.blue-quadrant.com/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-bold hover:underline"
                >
                  Visit Blue Quadrant <ExternalLink size={16} />
                </a>
          </p>
         
         </div>
        </div>
      </div>
      
      {/* Mobile-only background element */}
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#1c5517] opacity-10 rounded-tl-full md:hidden"></div>
    </section>
          </>
          )}
     
    </div>

    
  );
};

export default AgrifortPage;


