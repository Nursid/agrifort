import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import AgriFortProducts from '../components/AgriFortProducts';
import BackgroundSlider from '../components/BackgroundSlider';
import Navbar from './Navbar';

const LandingPage = () => {
    const [darkMode, setDarkMode] = useState(false);

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
                                        <p className="py-4 text-lg md:text-xl font-semibold text-yellow-400 mb-4 opacity-0 animate-slide-in-left text-shadow-glow ml-4"
                                            style={{animationDelay: '0.2s', animationFillMode: 'forwards'}}
                                        >
                                            Welcome To
                                        </p>

                                        {/* Main Title */}
                                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight opacity-0 animate-zoom-in text-shadow-hero"
                                            style={{animationDelay: '0.4s', animationFillMode: 'forwards'}}
                                        >
                                            <strong className="block gradient-text-animated">AgriFort Technologies</strong>
                                            <span className="block text-white animate-float">Good Production</span>
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
                                               className="btn btn-theme secondary btn-md radius animation bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg btn-hover-lift shadow-lg"
                                               data-discover="true"
                                               onClick={(e) => {
                                                   e.preventDefault();
                                                   scrollToSection('products');
                                               }}
                                            >
                                                Discover More
                                            </a>
                                            
                                            <a href="#about" 
                                               className="btn btn-outline btn-md radius animation border-2 border-white/50 text-white px-8 py-4 rounded-full font-semibold text-lg btn-hover-lift backdrop-blur-sm bg-white/10 hover:bg-white/20"
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
            <section id="products" className="py-20 bg-gray-50 dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div 
                        className="text-center mb-16"
                        data-aos="fade-up"
                    >
                        <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-4 py-2 rounded-full text-sm mb-6">
                            Our Solutions
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Product Categories
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Comprehensive agricultural solutions for every farming need
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                icon: '🌿',
                                title: 'Bio-Stimulants',
                                description: 'Advanced formulations designed for optimal crop protection and growth enhancement.',
                                color: 'green'
                            },
                            {
                                icon: '🛡️',
                                title: 'Fungicides',
                                description: 'Effective protection against fungal diseases with minimal environmental impact.',
                                color: 'blue'
                            },
                            {
                                icon: '⚡',
                                title: 'Insecticides',
                                description: 'Targeted pest control solutions for healthy crop development.',
                                color: 'red'
                            },
                            {
                                icon: '📈',
                                title: 'Herbicides',
                                description: 'Efficient weed management for cleaner, more productive fields.',
                                color: 'orange'
                            }
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer hover:-translate-y-2 hover:rotate-1"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className={`w-16 h-16 bg-${feature.color}-100 dark:bg-${feature.color}-900 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <span className="text-3xl">{feature.icon}</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                                    {feature.description}
                                </p>
                                <div className="text-green-600 dark:text-green-400 font-semibold flex items-center hover:translate-x-1 transition-transform duration-200">
                                    Learn More →
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white dark:bg-gray-900">
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
                                        <p className="text-sm text-gray-600 dark:text-gray-400">In Agro-biotech</p>
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
                                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                                            <span className="text-white text-sm">✓</span>
                                        </div>
                                        <span className="text-gray-700 dark:text-gray-300 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="hover:scale-105 transition-transform duration-200 active:scale-95">
                                <Button
                                    color="green"
                                    buttonType="filled"
                                    size="lg"
                                    ripple="light"
                                    className="px-8 py-4"
                                >
                                    Learn More About Us
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800">
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
                                className="bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                                data-aos="zoom-in"
                                data-aos-delay={index * 200}
                            >
                                <div className="flex items-center mb-6">
                                    <img 
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-16 h-16 rounded-full object-cover mr-4"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                                <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed">
                                    "{testimonial.quote}"
                                </p>
                                <div className="flex mt-4">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="text-yellow-400 text-lg">★</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* AgriFort Products Section */}
            <AgriFortProducts />

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Company Info */}
                        <div className="md:col-span-1">
                            <div className="flex items-center mb-6">
                                <div className="relative">
                                    <img 
                                        src="/images/logo/logo-png.png" 
                                        alt="AgriFort Technologies" 
                                        className="h-20 w-auto object-contain mr-3"
                                        style={{ filter: 'drop-shadow(0 0 6px rgba(0,0,0,0.7))' }}
                                    />
                                </div>
                            </div>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Leading agro-biotech company dedicated to empowering farmers with innovative, sustainable
                                agricultural solutions for better harvests and a greener future.
                            </p>
                            <div className="flex space-x-4">
                                {[
                                    { name: 'facebook', url: 'https://facebook.com/agrifort', icon: '📘' },
                                    { name: 'twitter', url: 'https://twitter.com/agrifort', icon: '🐦' },
                                    { name: 'linkedin', url: 'https://linkedin.com/company/agrifort', icon: '💼' },
                                    { name: 'instagram', url: 'https://instagram.com/agrifort', icon: '📷' }
                                ].map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-all duration-200 hover:scale-110 hover:-translate-y-1"
                                        aria-label={`Visit our ${social.name} page`}
                                    >
                                        <span className="text-lg">{social.icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h5 className="font-bold mb-6 text-white text-lg">Quick Links</h5>
                            <ul className="space-y-3">
                                {[
                                    { name: 'About AgriFort', href: '#about' },
                                    { name: 'Our Products', href: '#products' },
                                    { name: 'Research & Innovation', href: '#research' },
                                    { name: 'Sustainability', href: '#sustainability' },
                                    { name: 'Career Opportunities', href: '/careers' },
                                    { name: 'Media Center', href: '/media' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <button 
                                            onClick={() => {
                                                if (link.href.startsWith('#')) {
                                                    scrollToSection(link.href.slice(1));
                                                } else {
                                                    // For future implementation of these pages
                                                    console.log(`Navigate to ${link.href}`);
                                                }
                                            }}
                                            className="text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1 text-left"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Customer Support */}
                        <div>
                            <h5 className="font-bold mb-6 text-white text-lg">Customer Support</h5>
                            <ul className="space-y-3">
                                {[
                                    { name: 'Dealer Login', href: '/login' },
                                    { name: 'Farmer Support', href: '/support' },
                                    { name: 'Technical Helpdesk', href: '/helpdesk' },
                                    { name: 'Product Catalog', href: '#products' },
                                    { name: 'Training Programs', href: '/training' },
                                    { name: 'Download Center', href: '/downloads' }
                                ].map((link) => (
                                    <li key={link.name}>
                                        <button 
                                            onClick={() => {
                                                if (link.href.startsWith('#')) {
                                                    scrollToSection(link.href.slice(1));
                                                } else if (link.href === '/login') {
                                                    window.location.href = '/admin/login';
                                                } else {
                                                    // For future implementation of these pages
                                                    console.log(`Navigate to ${link.href}`);
                                                }
                                            }}
                                            className="text-gray-300 hover:text-green-400 transition-all duration-200 hover:translate-x-1 text-left"
                                        >
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h5 className="font-bold mb-6 text-white text-lg">Contact Info</h5>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-400">📞</span>
                                    <span className="text-gray-300">+91 1800-XXX-XXXX</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-400">📧</span>
                                    <span className="text-gray-300">info@agrifort.com</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-green-400">📍</span>
                                    <span className="text-gray-300">Mumbai, Maharashtra, India</span>
                                </div>
                            </div>
                            
                            <div className="mt-6">
                                <p className="text-gray-300 mb-4">Subscribe to AgriFort Insights</p>
                                <div className="flex">
                                    <input
                                        type="email"
                                        placeholder="Enter email"
                                        className="flex-1 px-4 py-2 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500"
                                    />
                                    <button
                                        className="px-4 py-2 bg-green-600 rounded-r-lg hover:bg-green-700 transition-all duration-200 hover:scale-105 active:scale-95"
                                    >
                                        📧
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">
                            © 2024 AgriFort Technologies. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            {[
                                { name: 'Privacy Policy', href: '/privacy' },
                                { name: 'Terms of Service', href: '/terms' },
                                { name: 'Refund Policy', href: '/refund' }
                            ].map((link) => (
                                <button 
                                    key={link.name}
                                    onClick={() => {
                                        // For future implementation of these pages
                                        console.log(`Navigate to ${link.href}`);
                                    }}
                                    className="text-gray-400 hover:text-green-400 text-sm transition-all duration-200 hover:-translate-y-0.5"
                                >
                                    {link.name}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default LandingPage;