import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AgriFortProducts from '../components/AgriFortProducts';
import BackgroundSlider from '../components/BackgroundSlider';
import Navbar from './Navbar';
import Footer from '../components/Footer';

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


    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
            {/* Sticky Navbar with Backdrop Blur */}
            <Navbar />


            {/* Hero Section with Animated Background Slider */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                <BackgroundSlider>
                    {/* Main Content Container */}
                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen py-20">
                        
                        {/* Content Overlay */}
                        <div className="container mx-auto">
                            <div className="row flex items-center justify-center">
                                <div className="col-xl-7 lg:w-2/3 w-full">
                                    <div className="content text-center lg:text-left">
                                        
                                        {/* Subtitle */}
                                        <p className="py-4 text-2xl md:text-3xl font-semibold text-green-400 mb-4 opacity-0 animate-slide-in-left text-shadow-glow ml-4"
                                            style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}
                                        >
                                            Welcome To
                                        </p>

                                        {/* Main Title */}
                                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-zoom-in text-shadow-hero"
                                            style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}
                                        >
                                            <strong className="block gradient-text-animated">AgriFort Technologies</strong>
                                        </h2>

                                        {/* Description */}
                                        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed opacity-0 animate-slide-in-right text-shadow-hero"
                                           style={{animationDelay: '0.6s', animationFillMode: 'forwards'}}
                                        >
                                            Bridging biotech innovation with sustainable farming solutions for a prosperous agricultural future. 
                                            Empowering farmers with cutting-edge technology and premium quality products.
                                        </p>

                                        {/* Action Buttons */}
                                        <div className="button flex flex-col sm:flex-row gap-4 justify-center lg:justify-start opacity-0 animate-zoom-in"
                                             style={{animationDelay: '0.8s', animationFillMode: 'forwards'}}
                                        >
                                            <a href="#products" 
                                               className="btn btn-theme secondary btn-md radius animation bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg btn-hover-lift shadow-lg"
                                               data-discover="true"
                                               onClick={(e) => {
                                                   e.preventDefault();
                                                   scrollToSection('products');
                                               }}
                                            >
                                                Discover More
                                            </a>
                                            
                                            <a href="#about" 
                                               className="btn btn-outline btn-md radius animation border-2 border-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg btn-hover-lift backdrop-blur-sm bg-red-500/20 hover:bg-red-500/40 shadow-lg"
                                               onClick={(e) => {
                                                   e.preventDefault();
                                                   scrollToSection('about');
                                               }}
                                            >
                                                Learn About Us
                                            </a>
                                        </div>
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
            <AgriFortProducts />    

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
                                About AgriFort
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                                Science-Driven Agricultural Excellence
                            </h2>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                                For over two decades, AgriFort has been at the forefront of agricultural innovation, developing cutting-edge
                                biotech solutions that enhance crop productivity while promoting sustainable farming practices.
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
                            Testimonials
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            What Farmers Say
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Hear from farmers who have transformed their yields with AgriFort solutions
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: 'Rajesh Kumar',
                                role: 'Wheat Farmer, Punjab',
                                image: '/images/hero/testimonial-1.jpg',
                                quote: 'AgriFort\'s bio-stimulants have increased my wheat yield by 35%. The quality is outstanding and the support team is always helpful.'
                            },
                            {
                                name: 'Priya Sharma',
                                role: 'Rice Farmer, Andhra Pradesh',
                                image: '/images/hero/testimonial-2.jpg',
                                quote: 'Their fungicide range has saved my crops multiple times. Reliable products with consistent results year after year.'
                            },
                            {
                                name: 'Amit Patel',
                                role: 'Cotton Farmer, Gujarat',
                                image: '/images/hero/testimonial-3.jpg',
                                quote: 'The technical support and guidance from AgriFort has been invaluable. They truly understand farmers\' needs.'
                            }
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-green-500"
                                data-aos="zoom-in"
                                data-aos-delay={index * 200}
                            >
                                <div className="flex items-center mb-6">
                                    <img 
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-green-200"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-red-600 dark:text-red-400 font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex mt-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-green-500 text-lg">★</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Footer */}
             <Footer />

        </div>
    );
};

export default LandingPage;