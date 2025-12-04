import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AgriFortProducts from '../components/AgriFortProducts';
import BackgroundSlider from '../components/BackgroundSlider';
import Navbar from './Navbar';
import Footer from '../components/Footer';
import { ChevronRight,User, Leaf, Users, BookOpen, Briefcase, Phone, Mail, Award } from 'lucide-react';
import { Target,  TrendingUp } from 'lucide-react';
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



const leadershipInsights = [
 {
    icon: Award,
    name: "Message from Chairman",
    role: "Chairman",
    message: "Our commitment to excellence and sustainable growth has been the cornerstone of our success. We believe in empowering our team and stakeholders to achieve remarkable milestones together."
  },
  {
    icon: Briefcase,
    name: "Message from CEO",
    role: "Chief Executive Officer",
    message: "Innovation and integrity drive everything we do. Our vision is to create lasting value while maintaining the highest standards of corporate governance and social responsibility."
  },
  {
    icon: Users,
    name: "Message from Managing Director",
    role: "Managing Director",
    message: "Through strategic planning and operational excellence, we continue to strengthen our market position. Our focus remains on delivering exceptional results while fostering a culture of collaboration."
  },
  {
    icon: User,
    name: "Message from Board",
    role: "Board of Directors",
    message: "We are dedicated to transparent leadership and creating sustainable value for all stakeholders. Our governance framework ensures accountability and ethical business practices at every level."
  }
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
            <section className="relative flex items-center justify-center overflow-hidden">
                <BackgroundSlider>
                    {/* Main Content Container */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center py-20">
                        {/* Content Overlay */}
                        <div className="container mx-auto">
                            <div className="row flex items-center justify-center">
                                    <div className="content text-center lg:text-left">
                                        {/* Subtitle */}
                                        <p className="py-4 text-2xl md:text-3xl font-semibold text-white mb-4 opacity-0 animate-slide-in-left text-shadow-glow ml-4"
                                            style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}
                                        >
                                             Innovative Tech
                                        </p>
                                        {/* Main Title */}
                                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-red-500 mb-6 animate-typing overflow-hidden whitespace-nowrap border-r-4 border-red-500 pr-2">
                                        Transform Agriculture
                                            </h1>

                                        {/* Description */}
                                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-slide-in-right text-shadow-hero"
                                           style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}
                                        >
                                            Empowering farmers with cutting-edge solutions. Farmer wins, we win.
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="button flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-zoom-in"
                                             style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}
                                        >
                                            <a href="#" 
                                               className="btn btn-theme secondary btn-md radius animation bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg btn-hover-lift shadow-lg"
                                               data-discover="true"
                                            //    onClick={(e) => {
                                            //        e.preventDefault();
                                            //        scrollToSection('products');
                                            //    }}
                                            >
                                               Explore Our Journey
                                            </a>
                                            
                                            <a href="#" 
                                               className="btn btn-outline btn-md radius animation border-2 border-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg btn-hover-lift backdrop-blur-sm bg-red-500/20 hover:bg-red-500/40 shadow-lg"
                                            //    onClick={(e) => {
                                            //        e.preventDefault();
                                            //        scrollToSection('about');
                                            //    }}
                                            >
                                               View Portfolio
                                            </a>
                                        </div>
                                    </div> 
                            </div>
                        </div>
                    </div>

                    {/* Scroll Indicator */}
                    <div 
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30"
                        style={{animationDuration: '2s', animationIterationCount: 'infinite'}}
                    >
                        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
                            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
                        </div>
                    </div>
                </BackgroundSlider>
            </section>

            {/* Features Section */}
            

            {/* About Section */}
            <section id="about" className="py-16 bg-white dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image Side */}
                        <div
                            className="relative"
                            data-aos="fade-right"
                        >
                            <div className="relative">
                                <img 
                                    src={'/images/hero/agriculture-hero.jpg'}
                                    alt="Agricultural Innovation"
                                    className="rounded-2xl shadow-2xl"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-green-600/20 to-transparent rounded-2xl"></div>
                            </div>
                            
                            {/* Floating Cards */}
                            <div
                                className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform duration-300"
                                data-aos="zoom-in"
                                data-aos-delay="400"
                            >
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center">
                                        <span className="text-2xl">🏆</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">20+ Years</h4>
                                        <p className="text-sm text-red-600 dark:text-red-400 font-semibold">In Agro-biotech</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Side */}
                        <div
                            data-aos="fade-left"
                        >
                            <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm mb-6">
                             AgriFort Journey
                            </div>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                            From humble beginnings to agricultural innovation leaders, AgriFort has been at the
                            forefront of transforming farming practices through technology and dedication.
                            </p>
                            
                            <div className="space-y-4 mb-8">
                                {[
                                    'ISO Certified Quality Standards',
                                    'Sustainable Farming Practices',
                                    'Farmer-First Approach',
                                    'Global R&D Presence'
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center space-x-3 opacity-0 animate-fade-in-left"
                                        style={{animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards'}}
                                    >
                                        <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center shadow-lg">
                                            <span className="text-white text-sm font-bold">✓</span>
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4">
                                <button className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg">
                                    Learn More About Us
                                </button>
                                <button className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg">
                                    Contact Us
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gradient-to-b from-white to-green-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div 
                        className="text-center mb-16"
                        data-aos="fade-up"
                    >
                        <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm mb-6">
                           Our Company Commitment
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                        Mission
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        To revolutionize agriculture through sustainable innovation and empower farmers
                        with technology-driven solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Vision',
                                quote: 'Creating a future where every farmer has access to sustainable, cutting-edge agricultural technology.'
                            },
                            {
                                name: 'Environmental Policy',
                                quote: 'Committed to protecting our planet through sustainable agricultural practices for future generations.'
                            },
                            {
                                name: 'Mission',
                                quote: ' To revolutionize agriculture through sustainable innovation and empower farmers with technology-driven solutions.'
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

            {/* <CommitmentShowcase /> */}

            <section id="highlights" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The AgriFort Advantage</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6" >
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"data-aos="zoom-in"
                                data-aos-delay={index * 200}
                >
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{advantage.title}</h3>
                  <p className="text-sm text-gray-600">{advantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Standards We Live By</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="zoom-in"
                                data-aos-delay={ 200}>
              Quality, integrity, and innovation guide every decision we make. Our commitment to excellence ensures the best outcomes for our partners and the communities we serve.
            </p>
          </div>
        </div>
      </section>
    {/* Leadership Insights*/}
<section id="leadership" className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16" data-aos="fade-up">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Insights</h2>
<div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
    </div>
    <div className="grid md:grid-cols-2 gap-8">
      {leadershipInsights.map((insight, index) => {
        const Icon = insight.icon;
        return (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-start mb-4">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-14 h-14 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <Icon className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{insight.name}</h3>
                <p className="text-sm text-blue-600 font-medium">{insight.role}</p>
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed italic">"{insight.message}"</p>
          </div>
        );
      })}
    </div>
  </div>
</section>


     



      {/* <AgriFortProducts />     */}

            {/* Footer */}
             <Footer />

        </div>
    );
};

export default LandingPage;