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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-5xl md:text-5xl font-bold text-gray-900 mb-4" data-aos="fade-up">
                        The AgriFort Journey
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
                        <p
                          className="text-xl text-gray-600 max-w-3xl mx-auto inline"
                          data-aos="zoom-in"
                          data-aos-delay="200"
                        >
                          AgriFort Technologies was born from a vision at Blue Quadrant, Dubai—to build a strong, future-ready agriculture company, and what better place to begin this journey than in the heart of Indian farming. What started as a single idea has today grown into one of the fastest-rising groups in the sustainable agriculture space, driven by innovation, science and a deep commitment to farmers...
                          
                          <button
                            onClick={() => history.push('/about-us')}
                            className="ml-2 text-green-600 font-semibold hover:underline inline"
                            style={{outline: 'none'}}
                          >
                            Read More
                          </button>
                        </p>

                    </div>
                </div>
            </section>


              <section className="">
                      <AgriFortAdvantages />
              </section>

            {/* Testimonials Section */}
            <section className="bg-gradient-to-b from-white to-green-50 dark:bg-gray-800">
             
      <div className="bg-gradient-to-br from-gray-50 via-white to-green-50 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Header */}
        <div className="text-center mb-12 md:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Compass and Commitment
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto rounded-full"></div>
        </div>

        {/* Environmental Policy Section */}
     

        {/* Vision and Mission Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          
          {/* Vision Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border-l-4 border-blue-600 hover:shadow-3xl transition-all hover:-translate-y-1 animate-fadeIn"  data-aos="zoom-in">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-blue-100 p-4 rounded-full">
                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
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
          <div className="bg-white rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 border-l-4 border-red-800 hover:shadow-3xl transition-all hover:-translate-y-1 animate-fadeIn "  data-aos="zoom-in">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-red-100 p-4 rounded-full">
                <svg className="w-10 h-10 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-4">
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


           <div className="bg-white rounded-2xl mt-2 shadow-2xl p-6 sm:p-8 md:p-12 mb-8 md:mb-12 border-t-4 border-green-600"  data-aos="fade-up">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            Environmental Policy
          </h2>
          
          <p className="text-base sm:text-lg text-gray-800 leading-relaxed text-center max-w-5xl mx-auto">
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">
                       AgriFort Group of Companies
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
                     
                    </div>
                    <LogoSlider  logos={logos2}/>
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