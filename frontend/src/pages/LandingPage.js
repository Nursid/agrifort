import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AgriFortProducts from '../components/AgriFortProducts';
import BackgroundSlider from '../components/BackgroundSlider';
import Navbar from './Navbar';
import Footer from '../components/Footer';
import { ChevronRight,User, Leaf, Users, BookOpen, Briefcase, Phone, Mail, Award } from 'lucide-react';
import { Target,  TrendingUp } from 'lucide-react';

import LeadershipAndFarmersSection from './components/LeadershipAndFarmersSection';
import FarmerWins from './components/LandingFarmerWin';
import LogoSlider from '../components/LogoSliding';

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
            <BackgroundSlider />
        </section>

            

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
                                <button className="px-8 py-4 text-sm bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg">
                                    Learn More About Us
                                </button>
                                <button className="px-8 py-4 text-sm bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg">
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

            <section className="py-6 bg-gradient-to-br from-gray-50 to-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4" data-aos="fade-up">Standards We Live By</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto mb-8"></div>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto" data-aos="zoom-in"
                                        data-aos-delay={ 200}>
                    Quality, integrity, and innovation guide every decision we make. Our commitment to excellence ensures the best outcomes for our partners and the communities we serve.
                    </p>
                </div>
                <LogoSlider />
                </div>
            </section>
                {/* Leadership Insights & Farmer Wins Section */}
                <div className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-green-50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        
                        {/* Mobile Layout - Stack header + content together */}
                        <div className="flex flex-col md:hidden gap-8">
                            {/* Leadership Section - Mobile */}
                            <div className="w-full">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Leadership Insights</h2>
                                    <div className="w-48 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
                                    <p className="text-sm text-gray-600 mt-2">Hear from the team driving agricultural innovation</p>
                                </div>
                                <LeadershipAndFarmersSection/>
                            </div>

                            {/* Farmer Wins Section - Mobile */}
                            <div className="w-full">
                                <div className="mb-6">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Farmer Wins</h2>
                                    <div className="w-48 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
                                    <p className="text-sm text-gray-600 mt-2">Real stories of transformation and success</p>
                                </div>
                                <FarmerWins />
                            </div>
                        </div>

                        {/* Desktop Layout - Headers on top, content below */}
                        <div className="hidden md:block">
                            {/* Headers Row */}
                            <div className="flex w-full gap-8 mb-12">
                                {/* Leadership Header */}
                                <div className="w-1/2" style={{width: '50%'}}>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Insights</h2>
                                    <div className="w-72 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
                                    <p className="text-base text-gray-600 mt-3">Hear from the team driving agricultural innovation</p>
                                </div>

                                {/* Divider */}
                                <div className="w-1"></div>

                                {/* Farmer Wins Header */}
                                <div className="w-1/2" style={{width: '50%'}}>
                                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Farmer Wins</h2>
                                    <div className="w-72 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
                                    <p className="text-base text-gray-600 mt-3">Real stories of transformation and success</p>
                                </div>
                            </div>

                            {/* Content Row */}
                            <div className="flex w-full gap-8">
                                <div className="w-1/2" style={{width: '50%'}}>
                                    <LeadershipAndFarmersSection/>
                                </div>
                                
                                {/* Divider */}
                                <div className="w-1 bg-gradient-to-b from-green-600 via-emerald-600 to-green-600 rounded-full shadow-lg"></div>

                                <div className="w-1/2" style={{width: '50%'}}>
                                    <FarmerWins />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


      {/* <AgriFortProducts />     */}

            {/* Footer */}
             <Footer />

        </div>
    );
};

export default LandingPage;