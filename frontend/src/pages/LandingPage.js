import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BackgroundSlider from '../components/BackgroundSlider';
import Navbar from './Navbar';
import Footer from '../components/Footer';
import { ChevronRight,User, Leaf, Users, BookOpen, Briefcase, Phone, Mail, Award } from 'lucide-react';
import LogoSlider from '../components/LogoSliding';
import { useNavigate } from 'react-router-dom';
import Advantage from './components/Advantage';
import FarmTechSlogan from './components/FarmTechSlogan';
import VisionMissionSection from './components/VisionMissionSection';
import TeamSection from './components/TeanSection';
import AgriFortAdvantages from './components/AgriFortAdvantages';

const LandingPage = () => {
    const [darkMode] = useState(false);
    const navigate = useNavigate()

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100
        });
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };


    const logos = [
        '/images/logo/logo1.png', 
        '/images/logo/logo2.png', 
        '/images/logo/logo3.png', 
        '/images/logo/logo4.png', 
        '/images/logo/logo5.png', 
        '/images/logo/logo6.png', 
        '/images/logo/logo7.png', 
        '/images/logo/logo8.png', 
        '/images/logo/logo9.png', 
        '/images/logo/logo10.png', 
        '/images/logo/logo11.png', 
        '/images/logo/logo12.png', 
      ];

    const logos2 = [
      {
      
        logo:  '/images/company/logo1.png', link: 'http://www.agrifort.com/'
      },
      {
      
        logo: '/images/company/logo2.png', link: '#'
      },
      {
      
        logo: '/images/company/logo3.png', link: 'https://sutantrasystems.com/'
      },
      {
      
        logo: '/images/company/logo4.png', link: '#'
      },
      {
      
        logo: '/images/company/logo5.png', link: '#'
      },
      {
      
        logo: '/images/company/logo6.png', link: 'https://bluefort.biz/'
      },
      {
      
        logo: '/images/company/logo7.png', link: '#'
      },
      ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
            {/* Sticky Navbar with Backdrop Blur */}
            <Navbar />


            {/* Hero Section with Animated Background Slider */}
            <section className="overflow-hidden" >
            <BackgroundSlider />
            </section>
            

            <section className="bg-gradient-to-br from-gray-50 to-green-50">
              <FarmTechSlogan />
            </section>
          
            <section className="relative min-h-screen w-full overflow-hidden">
      {/* 1. Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/journey/02.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* <div className="absolute inset-0 bg-white/20 backdrop-blur-[2px]"></div> */}
      </div>

      <div className="relative z-10 max-w-7xl h-full mx-auto py-16">
            <div className="flex justify-center">
              <div className="relative">
                {/* <h2 className="text-7xl font-bold text-green-900 italic px-4" style={{ fontFamily: 'serif' }}>
                  Agrifort Journey
                </h2> */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}> Agrifort Journey</h1>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-800/10 rounded-full -z-10"></div>
              </div>
            </div>

            <div className="space-y-6 text-gray-800 leading-relaxed text-base md:text-lg">
              <p>
                AgriFort Technologies was born from a vision at Blue Quadrant, Dubai—to build a strong, 
                future-ready agriculture company, and what better place to begin this journey than 
                in the heart of Indian farming. As the world shifts towards environmentally responsible, 
                low-chemical and nutrition-focused farming, AgriFort stands at the forefront with 
                advanced, technology-backed solutions designed to increase yields and enhance farm income.
              </p>

              <p>
                Over the years, our journey has expanded beyond agriculture into a robust ecosystem 
                of companies: <strong>BlueFort Healthcare</strong> in the pharmaceutical sector, 
                <strong> Sutantra</strong> in information technology, health and technology—strengthening 
                the lives of people we serve.
              </p>

              <p>
                With a wide range of eco-friendly and cost-effective products, a distribution network 
                that reaches the deepest pockets of India, and global collaborations supporting our growth, 
                we have earned the trust of millions of farmers. Their success stories inspire us daily 
                and validate the science and passion behind everything we create.
              </p>
              
              <div className="pt-6 border-t border-green-900/10">
                <p className="italic font-medium text-green-700 text-center">
                  Farmers Win – We Win.
                </p>
              </div>
            </div>
          </div>
  {/* CSS for the Scroll Animation */}
  <style jsx>{`
    @keyframes film-scroll {
      0% { transform: translateY(0); }
      100% { transform: translateY(-50%); }
    }
    .animate-film-scroll {
      animation: film-scroll 20s linear infinite;
    }
    .animate-film-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>
            </section>

            <VisionMissionSection />

              <section className="">
                <AgriFortAdvantages />
              </section>

           


            <section className="py-12 bg-gradient-to-br from-gray-50 to-green-50">
           
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center">

                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>   Standards We Live By</h1>
                      
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
                            Quality, integrity, and innovation guide every decision we make. Our commitment to excellence ensures the best outcomes for our partners and the communities we serve.
                        </p>
                    </div>
                    <LogoSlider logos={logos} />
                </div>
            </section>


            <section
                className="relative bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/video/01.gif')",
                }}
              >                      
              <div
                        className="relative bg-black/80 backdrop-blur-xs p-6"
                      >

              <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
                

                <div className="text-center mt-6">
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
                    style={{
                      fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",
                    }}
                  >
                    AgriFort Group of Companies
                  </h1>
                </div>

                <div className="w-full py-6">
  <div className="flex flex-nowrap justify-center items-center gap-4 sm:gap-6">
    {logos2.map((item, index) => (
      <a
        key={index}
        href={item.link}
        rel="noopener noreferrer"
        className="flex-shrink-0"
      >
        <div
          className="
            flex items-center justify-center
            bg-white/90
            rounded-full
            shadow-md
            transition-transform duration-300 hover:scale-105
            w-24 h-24
            sm:w-28 sm:h-28
            md:w-32 md:h-32
            lg:w-36 lg:h-36
          "
        >
          <img
            src={item.logo}
            alt={`Logo ${index + 1}`}
            className="w-full h-full object-contain p-3 rounded-full"
          />
        </div>
      </a>
    ))}
  </div>
</div>


            </div>
              </div>
            </section>


               
             <Footer />

               
      <style jsx>{`
        @keyframes scroll {
          0% {
            left: 100%;
          }
          100% {
            left: -100%;
          }
        }
        
        .animate-scroll {
          animation: scroll 15s linear infinite;
        }
      `}</style>

        </div>
    );
};

export default LandingPage;