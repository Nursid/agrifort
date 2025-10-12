// src/components/EmployeeEngagement.jsx

import React from 'react';

// Sample data for the gallery - using placeholder images from the original solution
const engagementImages = [
    {
        id: 1,
        // Replace with your actual image paths, e.g., '/images/engagement/team-1.jpg'
        src: "https://via.placeholder.com/600x800/a8dadc/1d3557?text=Team+Photo+1", 
        alt: "AgriFort Team Group Photo",
    },
    {
        id: 2,
        // Replace with your actual image paths, e.g., '/images/engagement/team-2.jpg'
        src: "https://via.placeholder.com/600x800/fca311/14213d?text=Team+Photo+2", 
        alt: "AgriFort Team Event Photo",
    },
    {
        id: 3,
        // Replace with your actual image paths, e.g., '/images/engagement/team-2.jpg'
        src: "https://via.placeholder.com/600x800/fca311/14213d?text=Team+Photo+2", 
        alt: "AgriFort Team Event Photo",
    },{
        id: 4,
        // Replace with your actual image paths, e.g., '/images/engagement/team-2.jpg'
        src: "https://via.placeholder.com/600x800/fca311/14213d?text=Team+Photo+2", 
        alt: "AgriFort Team Event Photo",
    },
];

const EmployeeEngagement = () => {
    return (
        // --- START: Section with Tailwind Background Separation ---
        // Setting a light background color for the section
        <section className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden"> 
            
            {/* Tailwind alternative to the curved wave: A massive, rotated, off-screen element.
                This provides a strong, diagonal visual break using only utility classes. 
            */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white dark:bg-gray-900 
                          transform -rotate-2 
                          origin-bottom-left 
                          -skew-y-1 
                          translate-y-1/3
                          shadow-2xl opacity-50 
                          hidden lg:block" 
                          aria-hidden="true"
            ></div>

            {/* Content Container (z-10 to stay above the background trick) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Title (Matches the screenshot: thin lines and uppercase) */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="flex items-center justify-center">
                        {/* Thin horizontal line */}
                        <div className="w-48 h-px bg-gray-300 mx-4"></div> 
                        
                        <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 uppercase tracking-widest">
                            EMPLOYEE ENGAGEMENT
                        </h2>
                        
                        {/* Thin horizontal line */}
                        <div className="w-48 h-px bg-gray-300 mx-4"></div>
                    </div>
                </div>

                {/* Image Gallery Container with AOS animation */}
                <div 
                    className="relative flex items-center justify-center"
                    data-aos="zoom-in" 
                    data-aos-duration="800"
                >
                    
                    {/* Left Arrow (Using plain character to avoid 'react-icons' dependency) */}
                    <button 
                        className="absolute left-0 md:-left-12 text-5xl text-gray-500 hover:text-gray-700 transition-colors duration-200 z-20 p-2 font-light"
                        aria-label="Previous image"
                    >
                        &lt; 
                    </button>

                    {/* Image Grid - Two columns as per screenshot */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
                        {engagementImages.map((image, index) => (
                            <div 
                                key={image.id} 
                                className="relative aspect-video sm:aspect-square md:aspect-[4/3] overflow-hidden" 
                                data-aos="fade-up" // Individual image animation
                                data-aos-delay={index * 150} // Staggered delay
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                                {/* Image overlay/caption */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 text-white">
                                    <p className="font-semibold text-lg">{image.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow (Using plain character to avoid 'react-icons' dependency) */}
                    <button 
                        className="absolute right-0 md:-right-12 text-5xl text-gray-500 hover:text-gray-700 transition-colors duration-200 z-20 p-2 font-light"
                        aria-label="Next image"
                    >
                        &gt;
                    </button>
                </div>
            </div>

        </section>
        // --- END: Section with Tailwind Background Separation ---
    );
};

export default EmployeeEngagement;