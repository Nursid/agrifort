import React, { useState, useEffect } from 'react';

const AnimatedSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    // Slider data with your AgriFort product banners
    const slides = [
        {
            id: 1,
            image: '/images/slider/agrifort-banner-1.jpg',
            fallbackGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)',
            title: 'खेती को दें एक नयी उर्जा',
            subtitle: 'AgriFort Technologies के साथ',
            description: 'Advanced agricultural solutions for better crop yield and quality',
            titleColor: 'text-white',
            subtitleColor: 'text-yellow-200'
        },
        {
            id: 2,
            image: '/images/slider/agrifort-banner-2.jpg',
            fallbackGradient: 'linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%)',
            title: 'THE BEST FARMING SOLUTION',
            subtitle: 'TETX - Premium Quality Products',
            description: 'Good size, better shining, stops flower drop, better quality, better fruit setting',
            titleColor: 'text-white',
            subtitleColor: 'text-green-200'
        },
        {
            id: 3,
            image: '/images/slider/agrifort-banner-3.jpg',
            fallbackGradient: 'linear-gradient(135deg, #7c3aed 0%, #5b21b6 50%, #4c1d95 100%)',
            title: 'ऐसी कोई फसल नहीं',
            subtitle: 'जिसपे इनका असर नहीं',
            description: 'Complete range of agricultural products for all crop types',
            titleColor: 'text-white',
            subtitleColor: 'text-purple-200'
        },
        {
            id: 4,
            image: '/images/slider/agrifort-banner-4.jpg',
            fallbackGradient: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 50%, #991b1b 100%)',
            title: 'आधुनिक खेती के लिए अब नया विकल्प',
            subtitle: 'Advanced Farming Solutions',
            description: 'Modern agricultural technology for sustainable farming',
            titleColor: 'text-white',
            subtitleColor: 'text-red-200'
        }
    ];

    // Auto-play functionality
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, [currentSlide]);

    const nextSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev + 1) % slides.length);
                setIsAnimating(false);
            }, 300);
        }
    };

    const prevSlide = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
                setIsAnimating(false);
            }, 300);
        }
    };

    const goToSlide = (index) => {
        if (!isAnimating && index !== currentSlide) {
            setIsAnimating(true);
            setTimeout(() => {
                setCurrentSlide(index);
                setIsAnimating(false);
            }, 300);
        }
    };

    return (
        <div className="relative w-full h-full overflow-hidden rounded-2xl shadow-2xl">
            {/* Slides Container */}
            <div className="relative w-full h-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                            index === currentSlide
                                ? 'opacity-100 scale-100 z-10'
                                : 'opacity-0 scale-105 z-0'
                        }`}
                    >
                        {/* Background Image or Gradient */}
                        <div 
                            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                            style={{
                                backgroundImage: `url('${slide.image}'), ${slide.fallbackGradient}`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        >
                            {/* Dark overlay for better text readability */}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60"></div>
                            
                            {/* Additional pattern overlay for texture */}
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20"></div>
                        </div>

                        {/* Content with improved positioning */}
                        <div className="relative z-10 h-full flex items-center justify-center text-center px-8 py-12">
                            <div className={`transform transition-all duration-1000 max-w-4xl ${
                                index === currentSlide 
                                    ? 'translate-y-0 opacity-100' 
                                    : 'translate-y-8 opacity-0'
                            }`}>
                                {/* Main Title */}
                                <h2 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${slide.titleColor}`}
                                    style={{
                                        textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.3)'
                                    }}>
                                    {slide.title}
                                </h2>
                                
                                {/* Subtitle */}
                                <h3 className={`text-xl md:text-3xl lg:text-4xl mb-8 font-semibold ${slide.subtitleColor}`}
                                    style={{
                                        textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
                                    }}>
                                    {slide.subtitle}
                                </h3>
                                
                                {/* Description */}
                                <p className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-white/90"
                                   style={{
                                       textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                                   }}>
                                    {slide.description}
                                </p>
                                
                                {/* Call to Action Button */}
                                <div className="mt-8">
                                    <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-full font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 border border-white/30"
                                            style={{
                                                textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                                            }}>
                                        Learn More →
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Animated Elements */}
                        <div className={`absolute top-10 right-10 transition-all duration-1000 ${
                            index === currentSlide 
                                ? 'translate-x-0 opacity-100' 
                                : 'translate-x-8 opacity-0'
                        }`}>
                            <div className="w-16 h-16 bg-white/20 rounded-full animate-pulse"></div>
                        </div>
                        
                        <div className={`absolute bottom-10 left-10 transition-all duration-1000 ${
                            index === currentSlide 
                                ? 'translate-x-0 opacity-100' 
                                : '-translate-x-8 opacity-0'
                        }`}>
                            <div className="w-12 h-12 bg-yellow-400/30 rounded-full animate-bounce"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Previous slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
                aria-label="Next slide"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? 'bg-white scale-125'
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20">
                <div 
                    className="h-full bg-yellow-400 transition-all duration-5000 ease-linear"
                    style={{
                        width: isAnimating ? '100%' : '0%',
                        animation: `progressBar 5s linear infinite`
                    }}
                />
            </div>

            <style jsx>{`
                @keyframes progressBar {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>
        </div>
    );
};

export default AnimatedSlider;
