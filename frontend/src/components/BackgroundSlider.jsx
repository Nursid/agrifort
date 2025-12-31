import React, { useState, useEffect } from 'react';

const BackgroundSlider = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const backgroundImages = [
        { id: 1, image: '/images/backgrounds/Banner12.jpg',},
        { id: 2, image: '/images/backgrounds/Banner11.jpg', },
        { id: 3, image: '/images/backgrounds/banner 02.jpg',},
        { id: 4, image: '/images/backgrounds/Banner14.jpg' },
        // { id: 5, image: '/images/backgrounds/banner6.jpg', fallbackGradient: 'linear-gradient(135deg, #059669, #064e3b)' },
        // { id: 6, image: '/images/backgrounds/banner3.jpg', fallbackGradient: 'linear-gradient(135deg, #059669, #064e3b)' },
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [backgroundImages.length]);

    return (
        <div className="relative w-full overflow-hidden 
        h-24 sm:h-80 md:h-96 lg:h-[65vh]">
      
            {/* Background Slides */}
            <div className="absolute inset-0 z-0">
                {backgroundImages.map((slide, index) => (
                   <div
                   key={slide.id}
                   className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
                     ${index === currentSlide ? 'opacity-100' : 'opacity-0'}
                     bg-contain sm:bg-cover
                     bg-top sm:bg-center
                   `}
                   style={{
                     backgroundImage: `url('${slide.image}')`,
                     backgroundRepeat: 'no-repeat',
                   }}
                 >
                   <div className="absolute inset-0 bg-black/20 sm:bg-transparent"></div>
                 </div>
                 
                ))}
            </div>

            {/* Content Slot (Text wagera yahan aayega) */}
            <div className="relative z-20 h-full flex items-center justify-center text-white">
                {children}
            </div>

            {/* Indicators */}
            {/* <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2 sm:space-x-3">
                {backgroundImages.map((_, index) => (
                    <div 
                        key={index} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'w-6 sm:w-8 bg-white' : 'w-2 bg-white/40'
                        }`} 
                    />
                ))}
            </div> */}
        </div>
    );
};

export default BackgroundSlider;