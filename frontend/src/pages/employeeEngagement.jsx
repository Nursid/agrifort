// src/components/EmployeeEngagement.jsx

import React, { useState } from 'react';
import TEAMA from '../assets/emp/team1.jpg'
import TEAMB from '../assets/emp/team2.jpg'
import TEAMC from '../assets/emp/team3.jpg'
import TEAMD from '../assets/emp/team4.jpg'

const engagementImages = [
    {
        id: 1,
        src: TEAMA, 
        alt: "AgriFort Team Group Photo 1",
    },
    {
        id: 2,
        src: TEAMB, 
        alt: "AgriFort Team Event Photo 2",
    },
    {
        id: 3,
        src: TEAMC, 
        alt: "AgriFort Team Event Photo 3",
    },{
        id: 4,
        src: TEAMD, 
        alt: "AgriFort Team Event Photo 4",
    },
];

const EmployeeEngagement = () => {
    const [currentPairStartIndex, setCurrentPairStartIndex] = useState(0);
    const [animationDirection, setAnimationDirection] = useState(''); 

    const imagesPerSlide = 2; 

    // Helper function to handle the state change and prevent scroll jump
    const changeSlide = (newIndex, direction) => {
        const currentScrollY = window.scrollY; 
        setAnimationDirection(direction); 
        setCurrentPairStartIndex(newIndex); 

        // Restore scroll position after re-render
        requestAnimationFrame(() => {
            window.scrollTo(0, currentScrollY);
        });
    };

    const goToNext = () => {
        const nextIndex = (currentPairStartIndex + imagesPerSlide) % engagementImages.length;
        changeSlide(nextIndex, 'fade-left'); 
    };

    const goToPrevious = () => {
        const prevIndex = currentPairStartIndex - imagesPerSlide;
        const newIndex = (prevIndex < 0 ? engagementImages.length + prevIndex : prevIndex) % engagementImages.length;
        changeSlide(newIndex, 'fade-right'); 
    };

    const displayedImages = [];
    for (let i = 0; i < imagesPerSlide; i++) {
        const imageIndex = (currentPairStartIndex + i) % engagementImages.length;
        displayedImages.push(engagementImages[imageIndex]);
    }

    return (
        <section className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden"> 
            
            {/* Background wave effect */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white dark:bg-gray-900 
                            transform -rotate-2 
                            origin-bottom-left 
                            -skew-y-1 
                            translate-y-1/3
                            shadow-2xl opacity-50 
                            hidden lg:block" 
                            aria-hidden="true"
            ></div>

            {/* Content Container (max-w-7xl ensures we have room for the buttons to stick out) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Title with Top/Bottom Dividers */}
                <div className="text-center mx-auto max-w-lg mb-16" data-aos="fade-up">
                    <div className="w-16 h-px bg-red-600 mx-auto mb-3"></div> 
                    <h2 className="text-xl font-medium tracking-widest uppercase text-gray-700 dark:text-gray-300">
                        EMPLOYEE ENGAGEMENT
                    </h2>
                    <div className="w-16 h-px bg-red-600 mx-auto mt-3"></div>
                </div>

                {/* Image Gallery Container (Carousel) */}
                {/* The parent div is centered, and the arrows will be absolutely positioned 
                    relative to its edges (max-w-7xl). 
                */}
                <div 
                    className="relative flex items-center justify-center min-h-96" 
                >
                    {/* Left Arrow Button (Previous) - Pushed to the far left */}
                    <button 
                        onClick={goToPrevious}
                        // Set the button absolutely to the far left of the max-w-7xl container
                        // On large screens, use negative margin to push it completely out of the padding
                        className="absolute left-0 lg:-left-20 text-3xl font-bold text-gray-700 hover:text-red-600 transition-colors duration-200 z-20 p-4 transform -translate-x-1/2"
                        aria-label="Previous image set"
                    >
                        &lt; 
                    </button>

                    {/* Image Display Area - max-w-3xl for smaller images */}
                    <div 
                        key={currentPairStartIndex} 
                        className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl ${animationDirection ? `aos-animate` : ''}`}
                        data-aos={animationDirection} 
                        data-aos-duration="800"
                    >
                        {displayedImages.map((image) => (
                            <div 
                                key={image.id} 
                                className="relative aspect-video sm:aspect-[16/9] overflow-hidden" 
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" 
                                />
                                {/* Image overlay/caption */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 text-white">
                                    <p className="font-semibold text-lg">{image.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow Button (Next) - Pushed to the far right */}
                    <button 
                        onClick={goToNext}
                        // Set the button absolutely to the far right of the max-w-7xl container
                        // On large screens, use negative margin to push it completely out of the padding
                        className="absolute right-0 lg:-right-20 text-3xl font-bold text-gray-700 hover:text-red-600 transition-colors duration-200 z-20 p-4 transform translate-x-1/2"
                        aria-label="Next image set"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EmployeeEngagement;