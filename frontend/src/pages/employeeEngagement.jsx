import React, { useState } from 'react';
import team1 from '../assets/img/team1.jpg'
import team2 from '../assets/img/team2.jpg'
import team3 from '../assets/img/team3.jpg'
import team4 from '../assets/img/team4.jpg'


// Sample data for the gallery (now with 4 images for a multi-slide demo)
const allEngagementImages = [
    {
        id: 1,
        src: team1, 
        alt: "AgriFort Team",
    },
    {
        id: 2,
        src: team2, 
        alt: "AgriFort  ",
    },
    {
        id: 3,
        src: team3, 
        alt: "AgriFort Training Session ",
    },
    {
        id: 4,
        src: team4, 
        alt: "AgriFort Discussion",
    },
    // You can add more images here to test multi-slide functionality
];

// Configuration for the carousel
const IMAGES_PER_SLIDE = 2;

const EmployeeEngagement = () => {
    // State to track the starting index of the currently visible slide
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalImages = allEngagementImages.length;
    
    // Calculate the number of slides needed
    const maxIndex = Math.floor(totalImages / IMAGES_PER_SLIDE) * IMAGES_PER_SLIDE;
    
    // Logic to get the current two images to display
    const currentSlideImages = allEngagementImages.slice(
        currentIndex, 
        currentIndex + IMAGES_PER_SLIDE
    );

    // --- Navigation Handlers ---
    const handleNext = () => {
        // Move to the next slide, but stop at the last possible starting index
        if (currentIndex < maxIndex - IMAGES_PER_SLIDE) {
            setCurrentIndex(currentIndex + IMAGES_PER_SLIDE);
        } else {
            // Optional: Loop back to the start
            setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        // Move to the previous slide, but stop at the first index (0)
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - IMAGES_PER_SLIDE);
        } else {
            // Optional: Loop back to the end
            setCurrentIndex(maxIndex - IMAGES_PER_SLIDE);
        }
    };

    return (
        <section className="relative py-20 bg-gray-50 dark:bg-gray-800 overflow-hidden"> 
            
            {/* Tailwind background trick for separation */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white dark:bg-gray-900 
                          transform -rotate-2 
                          origin-bottom-left 
                          -skew-y-1 
                          translate-y-1/3
                          shadow-2xl opacity-50 
                          hidden lg:block" 
                          aria-hidden="true"
            ></div>

            {/* Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Title */}
                <div className="text-center mb-16" data-aos="fade-up">
                    <div className="flex items-center justify-center">
                        <div className="w-48 h-px bg-gray-300 mx-4"></div> 
                        
                        <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200 uppercase tracking-widest">
                            EMPLOYEE ENGAGEMENT
                        </h2>
                        
                        <div className="w-48 h-px bg-gray-300 mx-4"></div>
                    </div>
                </div>

                {/* Image Gallery Container (Carousel Viewport) */}
                <div 
                    className="relative flex items-center justify-center"
                    data-aos="zoom-in" 
                    data-aos-duration="800"
                >
                    
                    {/* Left Arrow Button */}
                    <button 
                        onClick={handlePrev}
                        // Conditionally style the button to look disabled if at the first slide
                        className={`absolute left-0 md:-left-12 text-5xl transition-colors duration-200 z-20 p-2 font-light 
                            ${currentIndex === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700'}`}
                        aria-label="Previous slide"
                        disabled={currentIndex === 0 && !maxIndex} // maxIndex makes it a simple slider, not a loop
                    >
                        &lt; 
                    </button>

                    {/* Image Grid - Always renders two columns */}
                    <div className="grid grid-cols-2 gap-6 lg:gap-8 w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl transition-opacity duration-200">
                        {/* Map only the images for the current slide */}
                        {currentSlideImages.map((image, index) => (
                            <div 
                                key={image.id} 
                                className="relative aspect-video sm:aspect-square md:aspect-[4/3] overflow-hidden" 
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full m-4 object-cover transition-transform duration-200"
                                />
                                {/* Image overlay/caption */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-4 text-white">
                                    <p className="font-semibold text-lg">{image.alt}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right Arrow Button */}
                    <button 
                        onClick={handleNext}
                        // Conditionally style the button to look disabled if at the last slide
                        className={`absolute right-0 md:-right-12 text-5xl transition-colors duration-200 z-20 p-2 font-light
                            ${currentIndex >= maxIndex - IMAGES_PER_SLIDE ? 'text-gray-300 cursor-not-allowed' : 'text-gray-500 hover:text-gray-700'}`}
                        aria-label="Next slide"
                        disabled={currentIndex >= maxIndex - IMAGES_PER_SLIDE}
                    >
                        &gt;
                    </button>
                </div>
            </div>

        </section>
    );
};

export default EmployeeEngagement;