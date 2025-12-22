import React, { useEffect, useState } from 'react';
import AOS from 'aos';
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

const LandingPage = () => {
    const [darkMode] = useState(false);

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
            <section className="relative flex items-center justify-center overflow-hidden" >
            <BackgroundSlider />
           

        </section>


        <div className="w-full h-[100px] overflow-hidden flex items-center relative border">
      <div className="absolute whitespace-nowrap text-3xl font-bold animate-scroll-seamless flex gap-8" style={{ fontFamily: "cursive" }}>
        <span className="text-green-500">Innovative technology to transform agriculture</span>
        <span className="text-blue-500">Farmer wins we win</span>
        <span className="text-red-900">Trusted products by farmers nationwide</span>
        <span className="text-green-500">Jai jawan jai kisan</span>
        <span className="text-blue-500">Where trust grows and yields follow</span>
        <span className="text-red-900 mx-8">•</span>
        <span className="text-green-500">Innovative technology to transform agriculture</span>
        <span className="text-blue-500">Farmer wins we win</span>
        <span className="text-red-900">Trusted products by farmers nationwide</span>
        <span className="text-green-500">Jai jawan jai kisan</span>
        <span className="text-blue-500">Where trust grows and yields follow</span>
      </div>
    </div>
            

            {/* About Section */}
              <section className="">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="text-center">
                      <AgriFortAdvantages />
                      </div>
                  </div>
              </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gradient-to-b from-white to-green-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16" data-aos="fade-up">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Compass and Commitment </h1>
                    <div className="w-24 h-1.5 bg-green-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Vision',
                                quote: 'To become one of the most trusted and impactful Agri-Input organisations, serving farming communities in India and beyond through scientific, sustainable, and future-ready agriculture.'
                            },
                            {
                                name: 'Environmental Policy',
                                quote: 'Our company’s foundation rests on strong value systems that guide every action we take. We are committed to conducting our business in a socially responsible, ethical, and transparent manner. We respect the law, uphold universal human rights, safeguard the environment, and contribute positively to the communities we serve. At AgriFort, our commitment is simple yet powerful—to operate in ways that are good for people and for the planet.'
                            },
                            {
                                name: 'Mission',
                                quote: 'To develop, collaborate, and deliver value-added technologies, products, and services that empower farmers and enable optimum agricultural output.'
                            }
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-green-500"
                                data-aos="zoom-in"
                                data-aos-delay={index * 200}
                            >
                                <div className="flex items-center">
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-2xl">{testimonial.name}</h4>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                            </div>
                        ))}
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
                        GROUP OF COMPANIES LOGO
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