import React, { useEffect, useState } from "react";
import { Award, Leaf, Users, BookOpen, Briefcase } from "lucide-react";
import Footer from "components/Footer";
import Navbar from "./Navbar";
import { Button } from "@material-tailwind/react";
import AgriFortAdvantages from "./components/AgriFortAdvantages";
import AOS from 'aos';
import 'aos/dist/aos.css';
import LeadershipSection from "./components/LeadershipSection";
import LeadershipTeam from "./components/LeadershipTeam";
import LeadershipMessages from "./components/LeadershipSection";

const About = () => {
  const paragraph=`AgriFort Technologies was born from a vision at Blue Quadrant,
                Dubai—to build a strong, future-ready agriculture company, and
                what better place to begin this journey than in the heart of
                Indian farming. As the world shifts towards environmentally
                responsible, low-chemical and nutrition-focused farming,
                AgriFort stands at the forefront with advanced,
                technology-backed solutions designed to increase yields and
                enhance farm income. Over the years, our journey has expanded
                beyond agriculture into a robust ecosystem of companies:
                BlueFort Healthcare in the pharmaceutical sector, Sutantra in
                information technology, health and technology—strengthening the
                lives of people we serve. With a wide range of eco-friendly and
                cost-effective products, a distribution network that reaches the
                deepest pockets of India, and global collaborations supporting
                our growth, we have earned the trust of millions of farmers who
                consistently share exceptional results on the field. Their
                success stories inspire us daily and validate the science and
                passion behind everything we create. As an organisation, we
                remain committed to society and every stakeholder—working
                responsibly, innovating relentlessly and striving to bring more
                smiles to the farmer’s face. For us, the philosophy is simple
                and eternal: when farmers win – we win.`

const [Para,setPara]=useState(paragraph.slice(0,200));
const [isReadMore,setisReadMore]=useState(true)
function toggleDesc(isRead){
  console.log(isRead)
  if(!isRead){
    setPara(paragraph)
  }else{
    setPara(paragraph.slice(0,200))
  }
  setisReadMore(isRead)
  
}


useEffect(() => {
  AOS.init({
      duration: 1000,
      once: true,
      offset: 100
  });
}, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Banner Section */}
      <section className="pt-6 pb-12 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="About AgriFort"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6">
                  <div className="bg-white p-4 rounded-full shadow-xl">
                    <svg className="w-12 h-12" viewBox="0 0 100 100">
                      <circle cx="25" cy="25" r="20" fill="#22c55e" />
                      <circle cx="75" cy="25" r="20" fill="#059669" />
                      <circle cx="25" cy="75" r="20" fill="#dc2626" />
                      <circle cx="75" cy="75" r="20" fill="#991b1b" />
                      <circle cx="50" cy="50" r="15" fill="#1f2937" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-4xl font-bold text-red-600 uppercase tracking-tight" style={{ fontFamily: "cursive" }}>
              The AgriFort Journey
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                {paragraph}
              </p>
             
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-white to-green-50 dark:bg-gray-800">
             
             <div className="bg-gradient-to-br from-gray-50 via-white to-green-50">
             <div className="w-full px-4 sm:px-6 lg:px-8">
               
               {/* Main Header */}
               <div className="text-center mb-12 md:mb-16">
                 <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>
                   Our Compass and Commitment
                 </h1>
                 <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
               </div>
       
               {/* Environmental Policy Section */}
            
       
               {/* Vision and Mission Cards */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                 {/* Vision Card */}
                 <div className="bg-white rounded-2xl  p-6 sm:p-8 md:p-10 border hover:shadow-3xl transition-all hover:-translate-y-1 animate-fadeIn"  data-aos="zoom-in">
                   <div className="flex items-center justify-center mb-6">
                     <div className="bg-blue-100 p-4 rounded-full">
                       <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                       </svg>
                     </div>
                   </div>
                   
                   <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>
                     Vision
                   </h3>
                   
                   <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
                     <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-medium">
                       To become one of the most trusted and impactful Agri-Input organisations, serving farming communities in India and beyond through scientific, sustainable, and future-ready agriculture.
                     </p>
                   </div>
       
                   {/* Vision Highlights */}
                   <div className="mt-6 space-y-3">
                     <div className="flex items-start gap-3">
                       <div className="bg-blue-600 text-white rounded-full p-1 mt-1 flex-shrink-0">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <p className="text-sm sm:text-base text-gray-700 font-medium">Trusted & Impactful Organization</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <div className="bg-blue-600 text-white rounded-full p-1 mt-1 flex-shrink-0">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <p className="text-sm sm:text-base text-gray-700 font-medium">Scientific & Sustainable Approach</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <div className="bg-blue-600 text-white rounded-full p-1 mt-1 flex-shrink-0">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <p className="text-sm sm:text-base text-gray-700 font-medium">Future-Ready Agriculture</p>
                     </div>
                   </div>
                 </div>
       
                 {/* Mission Card */}
                 <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border hover:shadow-3xl transition-all hover:-translate-y-1 animate-fadeIn "  data-aos="zoom-in">
                   <div className="flex items-center justify-center mb-6">
                     <div className="bg-red-100 p-4 rounded-full">
                       <svg className="w-10 h-10 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                       </svg>
                     </div>
                   </div>
                   
                   <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>
                     Mission
                   </h3>
                   
                   <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-xl p-6 border-l-4 border-red-800">
                     <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-medium">
                       To develop, collaborate, and deliver value-added technologies, products, and services that empower farmers and enable optimum agricultural output.
                     </p>
                   </div>
       
                   {/* Mission Highlights */}
                   <div className="mt-6 space-y-3">
                     <div className="flex items-start gap-3">
                       <div className="bg-red-800 text-white rounded-full p-1 mt-1 flex-shrink-0">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <p className="text-sm sm:text-base text-gray-700 font-medium">Develop Innovative Technologies</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <div className="bg-red-800 text-white rounded-full p-1 mt-1 flex-shrink-0">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <p className="text-sm sm:text-base text-gray-700 font-medium">Empower Farming Communities</p>
                     </div>
                     <div className="flex items-start gap-3">
                       <div className="bg-red-800 text-white rounded-full p-1 mt-1 flex-shrink-0">
                         <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                       </div>
                       <p className="text-sm sm:text-base text-gray-700 font-medium">Optimize Agricultural Output</p>
                     </div>
                   </div>
                 </div>
               </div>
       
       
                  <div className="bg-white rounded-2xl mt-2  p-6 sm:p-8 md:p-12 mb-8 md:mb-12 border"  data-aos="fade-up">
                 <div className="flex items-center justify-center mb-6">
                   <div className="bg-green-100 p-4 rounded-full">
                     <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                     </svg>
                   </div>
                 </div>
                 
                 <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>
                   Environmental Policy
                 </h2>
                 
                 <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-center w-full">
                   Our company's foundation rests on strong value systems that guide every action we take. We are committed to conducting our business in a socially responsible, ethical, and transparent manner. We respect the law, uphold universal human rights, safeguard the environment, and contribute positively to the communities we serve. At AgriFort, our commitment is simple yet powerful—<span className="font-bold text-green-700">to operate in ways that are good for people and for the planet.</span>
                 </p>
               </div>
       
             </div>
           </div>
       
                   </section>

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

      `}</style>
    </div>
  );
};

export default About;
