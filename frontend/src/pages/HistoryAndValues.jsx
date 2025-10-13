// src/components/HistoryAndValues.jsx
import Navbar from './Navbar';
import React from 'react';
// Assuming you have renamed the high-quality building image to agri2.png
import Image from '../assets/img/agri2.png'; 
import Footer from 'components/Footer';

// Define core values data for easy mapping
const coreValues = [
    { name: "Aspiration", description: "We constantly strive for excellence...", iconClass: "text-red-600", icon: '🎯' }, 
    { name: "Nurturing", description: "We are committed to nurturing talent...", iconClass: "text-blue-600", icon: '🌱' },
    { name: "Progressive", description: "We embrace change and proactively seek...", iconClass: "text-green-600", icon: '🚀' }, 
    { name: "Empowerment", description: "We empower our farmers, distributors...", iconClass: "text-yellow-500", icon: '🤝' },
];

const HistoryAndValues = () => {
    return (
        // Added dark mode support to the main container
        <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
            <Navbar/>
            
            {/* --- Section 1: Our History - Updated Background and Structure --- */}
            <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    
                    <div className="mb-20" data-aos="fade-up">
                        
                        {/* Title Style is now more like the OurTeam section header */}
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-red-600 uppercase tracking-tight mb-8 text-center">
                            OUR JOURNEY
                        </h2>
                        <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto text-center mb-16 leading-relaxed">
                            From a pioneering concept to a catalyst for sustainable agricultural solutions globally.
                        </p>
                        
                        {/* Content Grid: Image/Visual left, Text right */}
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            
                            {/* Left Column: VISUAL - AgriFort Building Image */}
                            <div className="relative rounded-3xl shadow-2xl overflow-hidden group" 
                                 data-aos="fade-right" data-aos-duration="1000">
                                
                                <img 
                                    src={Image} 
                                    alt="AgriFort Technologies Corporate Office Building"
                                    className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105" 
                                />
                                
                                {/* RESTORING OVERLAY with the better gradient style */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <span className="text-white text-xl font-bold tracking-wider">
                                        AgriFort Global Headquarters
                                    </span>
                                </div>
                            </div>

                            {/* Right Column: TEXT - The History Narrative */}
                            <div data-aos="fade-left" data-aos-duration="1000">
                                
                                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 border-b-2 border-green-600 pb-2">
                                    Driving Innovation Since 20XX
                                </h3>

                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                    Our journey began with a clear vision: to revolutionize agriculture through **sustainable innovation**. Founded by a small team of pioneering scientists in **20XX**, AgriFort Technologies was established to address the critical need for high-efficacy, eco-friendly crop solutions. We focused intensely on research and development, quickly establishing a reputation for scientific rigor.
                                </p>
                                
                                {/* Using the lighter background/border style from OurTeam */}
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4 border-l-4 border-red-600 pl-4 italic bg-red-50 dark:bg-gray-700/50 p-3 rounded-md">
                                    The pivotal moment came in **20YY** with the launch of our proprietary **CropGenius** technology—an integrated biological and nutrient platform. This achievement transformed AgriFort from a research venture into a market-leading solutions provider.
                                </p>
                                
                                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                                    Today, our footprint extends across continents, but our core mission remains unchanged: to empower every farmer with the tools to achieve superior yields sustainably. Our history is a testament to the power of our **Core Values**—the principles that continue to guide our future growth and success.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* --- Section 2: Our Core Values - Applied Thin Horizontal Line Style --- */}
                    <div data-aos="fade-up" data-aos-delay="300">
                        
                        {/* Wrapper div for centering the title block */}
                        <div className="text-center mx-auto max-w-lg mb-12">
                            
                            {/* Top Thin Horizontal Line (New Feature) */}
                            <div className="w-24 h-px bg-gray-400 mx-auto mb-3"></div> 
                            
                            {/* The Main Heading - Styled to match the reference image */}
                            <h2 className="text-xl font-medium tracking-widest uppercase text-gray-700 dark:text-gray-300">
                                Our Core Values
                            </h2>
                            
                            {/* Bottom Thin Horizontal Line (New Feature) */}
                            <div className="w-24 h-px bg-gray-400 mx-auto mt-3"></div>
                        
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {coreValues.map((value, index) => (
                                <div 
                                    key={index} 
                                    // Applied the attractive gradient, rounded-3xl, and distinct shadow/hover
                                    className="p-8 bg-gradient-to-br from-white to-green-50 dark:from-gray-700 dark:to-gray-600 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                                    data-aos="zoom-in"
                                    data-aos-delay={index * 150 + 400} 
                                >
                                    {/* Using a larger, more prominent icon box */}
                                    <div className={`text-4xl mb-6 ${value.iconClass} bg-green-100 dark:bg-gray-800 p-4 rounded-xl inline-block shadow-md`}>
                                        {value.icon} 
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                                        {value.name}
                                    </h3>
                                    
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {value.description}
                                    </p>
                                    
                                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
                                        <span className="text-sm font-medium text-red-600 dark:text-red-400">Core to AgriFort</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default HistoryAndValues;