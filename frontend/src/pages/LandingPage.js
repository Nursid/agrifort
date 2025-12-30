import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { Button } from '@material-tailwind/react';
import 'aos/dist/aos.css';
import AgriFortProducts from '../components/AgriFortProducts';
import BackgroundSlider from '../components/BackgroundSlider';
import Navbar from './Navbar';
import Footer from '../components/Footer';
import { ChevronRight,User, Leaf, Users, BookOpen, Briefcase, Phone, Mail, Award } from 'lucide-react';
import { Target,  TrendingUp } from 'lucide-react';
import LeadershipSection from "./components/LeadershipSection";
import LeadershipAndFarmersSection from './components/LeadershipAndFarmersSection';
import FarmerWins from './components/LandingFarmerWin';
import LogoSlider from '../components/LogoSliding';
import AgriFortAdvantages from './components/AgriFortAdvantages';
import { useHistory } from 'react-router-dom';
import Advantage from './components/Advantage';
import FarmTechSlogan from './components/FarmTechSlogan';
import VisionMissionSection from './components/VisionMissionSection';
import TeamSection from './components/TeanSection';

const LandingPage = () => {
    const [darkMode] = useState(false);
    const history = useHistory()

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
          
            <section className="py-12 bg-gradient-to-br from-gray-50 to-green-50">
                <div className="w-full  px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>AgriFort Journey </h1>
                        {/* <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div> */}
                        <p
                          className="text-xl text-gray-600 w-full inline"
                          data-aos="zoom-in"
                          data-aos-delay="200"
                        >
                          AgriFort Technologies was born from a vision at Blue Quadrant, Dubai—to build a strong, future-ready agriculture company, and what better place to begin this journey than in the heart of Indian farming. What started as a single idea has today grown into one of the fastest-rising groups in the sustainable agriculture space, driven by innovation, science and a deep commitment to farmers.
                          
                          <button
                            onClick={() => history.push('/about-us')}
                            className="ml-2 text-green-600 font-semibold hover:underline inline"
                            style={{outline: 'none'}}
                          >
                            Read More...
                          </button>
                        </p>

                    </div>
                </div>
            </section>

              <section className="">
                {/* <AgriFortAdvantages /> */}
                <Advantage />
              </section>

            <VisionMissionSection />

                   <section
                      id="highlights"
                    >
                    {/* <LeadershipSection />  */}
                    <TeamSection/>
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
  className="relative min-h-[800px] bg-cover bg-center bg-no-repeat p-6"
  style={{
    backgroundImage: "url('/images/backgrounds/companies.jpg')",
  }}
>
<div
    className="absolute inset-0"
    style={{
      background:
        "linear-gradient(to bottom, rgba(6,78,59,0.65), rgba(6,78,59,0.35), rgba(6,78,59,0.65))",
    }}
  ></div>
  {/* Content */}
  <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
    
    {/* Divider */}
    <div className="w-20 h-1 bg-green-300 mx-auto mt-4 rounded-full"></div>

    {/* Heading */}
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

    {/* Logos */}
    <div className="w-full py-6">
  <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
    {logos2.map((item, index) => (
      <a
        key={index}
        href={item.link}
        // target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0"
      >
        <div
          className="
            flex items-center justify-center
            bg-white/90
            rounded-full
            shadow-lg
            transition-transform duration-300 hover:scale-105
            w-40 h-40
            sm:w-36 sm:h-36
            md:w-44 md:h-44
            lg:w-52 lg:h-52
          "
        >
          <img
            src={item.logo}
            alt={`Logo ${index + 1}`}
            className="
              w-full h-full
              object-contain
              p-4
              rounded-full
            "
          />
        </div>
      </a>
    ))}
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