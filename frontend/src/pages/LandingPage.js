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
import AgrifortMap from 'components/AgrifortMap';
import AgriFortJourney from './components/AgriFortJourney';
import EnvironmentalPolicy from './components/EnvironmentalPolicy';
import VisionMission from './components/VisionMision';

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
      
        logo: '/images/company/logo4.png', link: '#'
      },
      {
      
        logo: '/images/company/logo5.png', link: '#'
      },
      {
      
        logo: '/images/company/logo7.png', link: '#'
      },

      {
      
        logo:  '/images/company/logo1.png', link: 'http://www.agrifort.com/'
      },

      {
      
        logo: '/images/company/logo6.png', link: 'https://bluefort.biz/'
      },

      {
      
        logo: '/images/company/logo2.png', link: '#'
      },
      {
      
        logo: '/images/company/logo3.png', link: 'https://sutantrasystems.com/'
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

            {/* <AgrifortMap /> */}

            <AgriFortJourney />
              {/* <VisionMission /> */}
            <VisionMissionSection />
            {/* <EnvironmentalPolicy /> */}

              <section className="">
                <AgriFortAdvantages />
              </section>

            <section className="py-12 bg-gradient-to-br from-gray-50 to-green-50">
           
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="font-heading text-3xl md:text-4xl mb-6">Standards We Live By</h1>
                      
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
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
                  <h1 className="font-heading text-3xl md:text-4xl text-white">AgriFort Group of Companies</h1>
                </div>

                <div className="w-full py-6">
  <div
    className="
      flex flex-wrap
      lg:flex-nowrap
      justify-center items-center
      gap-4 sm:gap-6
    "
  >
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
            w-20 h-20
            sm:w-24 sm:h-24
            md:w-28 md:h-28
            lg:w-32 lg:h-32
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