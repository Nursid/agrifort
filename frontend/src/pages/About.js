import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from '../components/Footer';

const About = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            offset: 50,
            easing: 'ease-out-cubic'
        });
    }, []);

    const achievements = [
        {
            number: '20+',
            title: 'Years of Excellence',
            description: 'Pioneering agro-biotech solutions'
        },
        {
            number: '500+',
            title: 'Products Developed',
            description: 'Innovative agricultural solutions'
        },
        {
            number: '10K+',
            title: 'Happy Farmers',
            description: 'Trusted by farming communities'
        },
        {
            number: '50+',
            title: 'Countries Served',
            description: 'Global agricultural impact'
        }
    ];

    const values = [
        {
            icon: '🌱',
            title: 'Sustainability',
            description: 'Committed to environmentally responsible farming practices that preserve soil health and biodiversity.'
        },
        {
            icon: '🔬',
            title: 'Innovation',
            description: 'Continuous research and development to bring cutting-edge biotech solutions to agriculture.'
        },
        {
            icon: '🤝',
            title: 'Partnership',
            description: 'Building strong relationships with farmers, dealers, and stakeholders across the value chain.'
        },
        {
            icon: '🎯',
            title: 'Quality',
            description: 'Maintaining the highest standards in product development, manufacturing, and customer service.'
        }
    ];

    const timeline = [
        {
            year: '2003',
            title: 'Company Founded',
            description: 'AgriFort Technologies established with a vision to revolutionize agriculture through biotechnology.'
        },
        {
            year: '2008',
            title: 'First Breakthrough',
            description: 'Launched our flagship bio-stimulant product, Hortis-SP, achieving remarkable success.'
        },
        {
            year: '2015',
            title: 'Global Expansion',
            description: 'Expanded operations to 25 countries, establishing our presence in international markets.'
        },
        {
            year: '2020',
            title: 'Digital Transformation',
            description: 'Launched digital platforms for farmer education and product support services.'
        },
        {
            year: '2024',
            title: 'Innovation Hub',
            description: 'Opened state-of-the-art R&D facility focusing on sustainable agriculture solutions.'
        }
    ];

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-white'}`}>
            <Navbar />
            
            {/* Hero Banner Section */}
            <section className="pt-24 pb-12 bg-gradient-to-b from-white to-green-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Left Side - Image */}
                        <div className="relative" data-aos="fade-right">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800"
                                    alt="About AgriFort"
                                    className="w-full h-96 object-cover"
                                    onError={(e) => {
                                        e.target.style.display = 'none';
                                        e.target.parentElement.style.background = 'linear-gradient(135deg, #059669 0%, #047857 100%)';
                                        e.target.parentElement.style.display = 'flex';
                                        e.target.parentElement.style.alignItems = 'center';
                                        e.target.parentElement.style.justifyContent = 'center';
                                    }}
                                />
                                <div className="absolute -bottom-6 -right-6">
                                    <div className="bg-white p-4 rounded-full shadow-xl">
                                        <svg className="w-12 h-12" viewBox="0 0 100 100">
                                            <circle cx="25" cy="25" r="20" fill="#22c55e"/>
                                            <circle cx="75" cy="25" r="20" fill="#059669"/>
                                            <circle cx="25" cy="75" r="20" fill="#dc2626"/>
                                            <circle cx="75" cy="75" r="20" fill="#991b1b"/>
                                            <circle cx="50" cy="50" r="15" fill="#1f2937"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Content */}
                        <div className="space-y-6" data-aos="fade-left">
                            <h1 className="text-5xl md:text-6xl font-bold text-red-600 uppercase tracking-tight">
                                ABOUT US.
                            </h1>
                            <p className="text-xl text-gray-700 leading-relaxed">
                                AgriFort Technologies is a pioneering agro-biotech company with over two decades of excellence. 
                                Our mission is to empower farmers with innovative, sustainable agricultural solutions that 
                                enhance productivity and contribute to global food security through cutting-edge research 
                                and unwavering commitment to quality.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-green-800 font-medium">20+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-green-800 font-medium">Global Presence</span>
                                </div>
                                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                                    <span className="text-green-600 text-2xl">✓</span>
                                    <span className="text-green-800 font-medium">Innovation Driven</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hero Section */}
            <section className="relative py-12 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="text-center w-full">
                        <div className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-6 py-3 rounded-full text-sm font-semibold mb-8">
                            About AgriFort Technologies
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-gray-900 dark:text-white">
                            Pioneering the Future of
                            <span className="block bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                                Agricultural Innovation
                            </span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            For over two decades, we've been at the forefront of agricultural biotechnology, 
                            developing sustainable solutions that empower farmers and transform farming practices worldwide.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Mission */}
                        <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 md:p-12">
                            <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mb-6">
                                <span className="text-3xl text-white">🎯</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Our Mission
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                To revolutionize agriculture through innovative biotechnology solutions that enhance 
                                crop productivity, promote sustainable farming practices, and improve the livelihoods 
                                of farmers worldwide.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Empower farmers with cutting-edge technology',
                                    'Promote sustainable agricultural practices',
                                    'Drive innovation in crop protection',
                                    'Build resilient farming communities'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Vision */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl p-8 md:p-12">
                            <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center mb-6">
                                <span className="text-3xl text-white">👁️</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
                                Our Vision
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                                To be the global leader in agricultural biotechnology, creating a world where 
                                sustainable farming practices ensure food security for generations to come.
                            </p>
                            <div className="space-y-4">
                                {[
                                    'Leading innovation in agricultural biotechnology',
                                    'Creating a sustainable food future',
                                    'Empowering farming communities globally',
                                    'Setting industry standards for excellence'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div 
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Our Achievements
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Numbers that reflect our commitment to agricultural excellence and innovation
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {achievements.map((achievement, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-800 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                            >
                                <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-4">
                                    {achievement.number}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                                    {achievement.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {achievement.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-white dark:bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div 
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Our Core Values
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            The principles that guide everything we do at AgriFort Technologies
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group"
                                data-aos-delay={index * 100}
                            >
                                <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                    <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                                        {value.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div 
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                            Our Journey
                        </h2>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Key milestones in our two-decade journey of agricultural innovation
                        </p>
                    </div>

                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>

                        <div className="space-y-12">
                            {timeline.map((event, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                                >
                                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                                        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                                            <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">
                                                {event.year}
                                            </div>
                                            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                                                {event.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                                {event.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Timeline Dot */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white dark:bg-gray-800 border-4 border-green-500 rounded-full shadow-lg"></div>
                                    
                                    <div className="w-1/2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-green-600 dark:bg-green-700">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                            Join Our Mission
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                            Be part of the agricultural revolution. Whether you're a farmer, dealer, or partner, 
                            together we can build a sustainable future for agriculture.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/contact"
                                className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg inline-block text-center"
                            >
                                Get In Touch
                            </Link>
                            <Link
                                to="/products"
                                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200 hover:scale-105 active:scale-95 inline-block text-center"
                            >
                                View Products
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
