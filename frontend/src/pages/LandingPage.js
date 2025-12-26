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
        '/images/company/logo1.png', 
        '/images/company/logo2.png', 
        '/images/company/logo3.png', 
        '/images/company/logo4.png', 
        '/images/company/logo5.png', 
        '/images/company/logo6.png', 
        '/images/company/logo7.jpg', 
      ];





    const advantages = [
        { icon: Award, title: 'Manufacturing', description: 'State-of-the-art production facilities' },
        { icon: Leaf, title: 'R&D', description: 'Cutting-edge research and development' },
        { icon: Users, title: 'People at AgriFort', description: 'Experienced team of professionals' },
        { icon: BookOpen, title: 'Tech-based Products', description: 'Innovation-driven solutions' },
        { icon: Briefcase, title: 'Trusted Partnerships', description: 'Building lasting relationships' },
      ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
            {/* Sticky Navbar with Backdrop Blur */}
            <Navbar />


            {/* Hero Section with Animated Background Slider */}
            <section className="" >
            <BackgroundSlider />
            </section>
          
            <section className="py-12 bg-gradient-to-br from-gray-50 to-green-50">
                <div className="w-full  px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>
                        The AgriFort Journey
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
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
                <AgriFortAdvantages />
              </section>

            <section className="bg-gradient-to-b from-white to-green-50 dark:bg-gray-800">
             
      <div className="bg-gradient-to-br from-gray-50 via-white to-green-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-12 md:mb-16 py-6">
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
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>
              Vision
            </h3>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border-l-4 border-blue-600">
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-medium">
                To become one of the most trusted and impactful Agri-Input organisations, serving farming communities in India and beyond through scientific, sustainable, and future-ready agriculture.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-10 border hover:shadow-3xl transition-all hover:-translate-y-1 animate-fadeIn "  data-aos="zoom-in">
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>
              Mission
            </h3>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-100 rounded-xl p-6 border-l-4 border-red-800">
              <p className="text-base sm:text-lg text-gray-900 leading-relaxed font-medium">
                To develop, collaborate, and deliver value-added technologies, products, and services that empower farmers and enable optimum agricultural output.
              </p>
            </div>

          </div>
        </div>


           <div className="bg-white rounded-2xl mt-2  p-6 sm:p-8 border"  data-aos="fade-up">
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

          
            <section id="highlights" className="bg-gradient-to-br from-gray-50 to-green-50">
              <LeadershipSection /> 
            </section>

            <section className="py-12 bg-gradient-to-br from-gray-50 to-green-50">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>
                            Standards We Live By
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="zoom-in" data-aos-delay="200">
                            Quality, integrity, and innovation guide every decision we make. Our commitment to excellence ensures the best outcomes for our partners and the communities we serve.
                        </p>
                    </div>
                    <LogoSlider logos={logos} />
                </div>
            </section>

            <section className="py-12 bg-gradient-to-br from-gray-50 to-green-50">
                <div className="w-full px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>
                       AgriFort Group of Companies
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
                    </div>

                    <div className="w-full bg-gradient-to-br from-gray-50 to-green-50 py-6">
                <div className="px-4">
                
                  <div className="py-8 relative">
                    
                    <div className="flex gap-4">
                        {logos2.map((logo, index) => (
                          <div
                            key={`first-${index}`}
                            style={{height: '200px', width: '200px'}}
                            className="w-60 h-60 flex-shrink-0 rounded-full p-4 flex items-center justify-center"
                          >
                            <img
                              src={logo}
                              alt={`Logo ${index + 1}`}
                              className="w-full h-full object-contain rounded-full"
                            />
                          </div>
                        ))}
                      </div>

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