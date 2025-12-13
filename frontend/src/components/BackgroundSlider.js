import React, { useState, useEffect } from 'react';

const BackgroundSlider = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Agricultural landscape images
    const backgroundImages = [
        {
            id: 1,
            image: '/images/backgrounds/banner1.jpg',
            fallbackGradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #92400e 100%)',
            title: 'Innovative Technology',
            description: 'Innovative technology to transform agriculture'
        },
        {
            id: 2,  
            image: '/images/backgrounds/banner6.jpg',
            fallbackGradient: 'linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%)',
            title: 'Farmer Wins, We Win',
            description: 'Empowering farmers with cutting-edge solutions. Farmer wins, we win.'
        },
        {
            id: 3,  
            image: '/images/backgrounds/banner3.jpg',
            fallbackGradient: 'linear-gradient(135deg, #059669 0%, #047857 50%, #064e3b 100%)',
            title: 'Trusted Products',
            description: 'Trusted products by farmers nationwide'
        },
        {
            id: 4,  
            image: '/images/backgrounds/banner4.jpg',
            fallbackGradient: 'linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%)',
            title: 'Jai Jawan Jai Kisan',
            description: 'Jai jawan jai kisan'
        },
        {
            id: 5,  
            image: '/images/backgrounds/banner5.jpg',
            fallbackGradient: 'linear-gradient(135deg, #0891b2 0%, #0e7490 50%, #155e75 100%)',
            title: 'Trust & Yields',
            description: 'Where trust grows and yields follow'
        }
    ];

    // Auto-advance slides
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % backgroundImages.length);
        }, 6000); // Change every 6 seconds

        return () => clearInterval(timer);
    }, [backgroundImages.length]);

    return (
        <div className="relative w-full overflow-hidden" style={{height: '75vh'}}>
            {/* Background Slides */}
            <div className="absolute inset-0">
                {backgroundImages.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
                            index === currentSlide
                                ? 'opacity-100 scale-100'
                                : 'opacity-0 scale-105'
                        }`}
                        style={{
                            backgroundImage: `url('${slide.image}'), ${slide.fallbackGradient}`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundAttachment: 'fixed'
                        }}
                    >
                        {/* Dark overlay for better text readability */}
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50"></div>
                        
                        {/* Additional overlay for depth */}
                        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/10 to-black/20"></div>
                        
                        {/* Subtle animation overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-black/10 animate-pulse opacity-30"></div>
                        
                        {/* Slide Title - Display on each slide */}
                        <div
  className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
  text-center z-30 transition-all duration-1000 ${
    index === currentSlide
      ? 'opacity-100'
      : 'opacity-0 translate-y-6'
  }`}
>
  {/* <h1 className="text-3xl md:text-5xl font-bold text-white mb-2 drop-shadow-2xl">
    {slide.title}
  </h1> */}

            <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-2xl mb-6 
                            animate-typing overflow-hidden whitespace-nowrap text-white pr-2">
                {slide.title}
            </h1>

            <p className="text-lg md:text-2xl text-white/90 drop-shadow-lg mx-auto max-w-2xl">
                {slide.description}
            </p>
            </div>

</div>



                    </div>
                ))}
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full">
                {children}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
                {backgroundImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentSlide
                                ? 'bg-white scale-125 shadow-lg'
                                : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-20">
                <div 
                    className="h-full bg-gradient-to-r from-green-400 to-blue-500 transition-all duration-6000 ease-linear"
                    style={{
                        width: '100%',
                        animation: `progressBar 6s linear infinite`
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

export default BackgroundSlider;