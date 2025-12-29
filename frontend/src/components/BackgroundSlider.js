import React, { useState, useEffect } from 'react';

const BackgroundSlider = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const backgroundImages = [
        { id: 1, image: '/images/backgrounds/Banner11.jpg', fallbackGradient: 'linear-gradient(135deg, #16a34a, #166534)' },
        { id: 2, image: '/images/backgrounds/Banner14.jpg', fallbackGradient: 'linear-gradient(135deg, #f59e0b, #92400e)' },
        { id: 3, image: '/images/backgrounds/Banner12.jpg', fallbackGradient: 'linear-gradient(135deg, #0891b2, #155e75)' },
        { id: 4, image: '/images/backgrounds/banner6.jpg', fallbackGradient: 'linear-gradient(135deg, #059669, #064e3b)' },
        { id: 5, image: '/images/backgrounds/banner3.jpg', fallbackGradient: 'linear-gradient(135deg, #059669, #064e3b)' },
     
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [backgroundImages.length]);

    return (
        <>
      
        {/* 1. Main Container with improved gradient depth */}
        <div className="relative w-full overflow-hidden" style={{ height: '65vh', minHeight: '500px' }}>
            
            {/* Background Slides */}
            <div className="absolute inset-0 z-0">
                {backgroundImages.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            backgroundImage: `url('${slide.image}'), ${slide.fallbackGradient}`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    >
                        {/* Darker top overlay to make the logo/nav pop */}
                        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent"></div> */}
                    </div>
                ))}
            </div>

            {/* THE GREEN GLOW (The Bottom Shadow) */}
            <div
        className="absolute z-10 pointer-events-none w-full"
        style={{
            bottom: 0,
            top: 'auto',       
            left: 0,
            height: '100%',
            background: "url('/images/backgrounds/grass.png')",
            backgroundSize: '100%',   // full width, maintain aspect ratio
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom center'
          }}
        />




            {/* Scrolling Text Section */}
          

            {/* Indicators - Styled to match the new glow */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                {backgroundImages.map((_, index) => (
                    <div 
                        key={index} 
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/40'
                        }`} 
                    />
                ))}
            </div>
        </div>
        </>
    );
};

export default BackgroundSlider;
