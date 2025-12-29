import React, { useState, useEffect } from 'react';

const BackgroundSlider = ({ children }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const backgroundImages = [
        { id: 1, image: '/images/backgrounds/Banner11.jpg', fallbackGradient: 'linear-gradient(135deg, #16a34a, #166534)' },
        { id: 2, image: '/images/backgrounds/Banner12.jpg', fallbackGradient: 'linear-gradient(135deg, #0891b2, #155e75)' },
        // { id: 3, image: '/images/backgrounds/Banner1.jpg', fallbackGradient: 'linear-gradient(135deg, #f59e0b, #92400e)' },
        // { id: 4, image: '/images/backgrounds/banner6.jpg', fallbackGradient: 'linear-gradient(135deg, #059669, #064e3b)' },
        // { id: 5, image: '/images/backgrounds/banner3.jpg', fallbackGradient: 'linear-gradient(135deg, #059669, #064e3b)' },
     
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
            {/* <div className="absolute inset-0 z-10 pointer-events-none" 
                style={{
                    background: 'linear-gradient(to top, rgba(34, 197, 94, 0.45) 0%, rgba(20, 83, 45, 0.2) 20%, transparent 60%)'
                }}>
            </div> */}

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


  /* 1. Added min-height and border to see the container boundaries */
        // <div className="relative w-full overflow-hidden border-4 border-yellow-500  bg-gradient-to-t 
        //         from-green-900/80 
        //         via-green-700/40 
        //         to-transparent" style={{ height: '65vh', minHeight: '500px' }}>
            
        
        //     <div className="absolute inset-0 z-0">
        //         {backgroundImages.map((slide, index) => (
        //             <div
        //                 key={slide.id}
        //                 className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
        //                 style={{
        //                     backgroundImage: `url('${slide.image}'), ${slide.fallbackGradient}`,
        //                     backgroundSize: 'cover',
        //                     backgroundPosition: 'center'
        //                 }}
        //             >
        //                 <div className="absolute inset-0 bg-black/40"></div>
        //             </div>
        //         ))}
        //     </div>

        //     <div className="absolute inset-0 z-20 flex items-end justify-center pb-8 ">
        //     <div className="absolute whitespace-nowrap text-9xl font-bold animate-scroll-seamless flex gap-8" style={{ fontFamily: " 'Lobster', 'Pacifico', cursive"}}>
        //             <span className="text-green-500">"Innovative technology to transform agriculture"</span>
        //             <span/>
        //             <span className="text-white mx-8">•</span>
        //             <span/>
        //             <span className="text-blue-500">"Farmer wins - we win"</span>
        //             <span/>
        //             <span className="text-white mx-8">•</span>
        //             <span/>
        //             <span className="text-white">"Trusted products by farmers nationwide"</span>
        //             <span/>
        //             <span className="text-white mx-8">•</span>
        //             <span/>
        //             <span className="text-green-500">"Jai jawan - jai kisan"</span>
        //             <span/>
        //             <span className="text-white mx-8">•</span>
        //             <span/>
        //             <span className="text-blue-500">"Where trust grows and yields follow"</span>
        //             <span/>
        //             <span/>
        //             <span className="text-white mx-8">•</span>
        //             <span/>
        //             <span/>
        //             <span className="text-green-500">"Innovative technology to transform agriculture"</span>
        //             <span/>
        //             <span className="text-white mx-8">•</span>
        //             <span/>
        //             <span className="text-blue-500">"Farmer wins - we win"</span>
        //             <span/>
        //             <span className="text-white mx-8">•</span>
        //             <span/>
        //             <span className="text-red-900">"Trusted products by farmers nationwide"</span>
        //             <span/>
        //             <span className="text-white mx-8">•</span>
        //             <span/>
        //             <span className="text-green-500">"Jai jawan - jai kisan"</span>
        //             <span/>
        //             <span className="text-white mx-8">•</span>
        //             <span/>
        //             <span className="text-blue-500">"Where trust grows and yields follow"</span>
        //         </div>
        //     </div>




        //   <div className="relative z-10 w-full h-full pointer-events-none">
        //         <div className="pointer-events-auto">
        //             {children}
        //         </div>
        //     </div>
        //    <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        //         {backgroundImages.map((_, index) => (
        //             <div key={index} className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-white/30'}`} />
        //         ))}
        //     </div>

        //     <style jsx>{`
        //         @keyframes progressBar {
        //             from { width: 0%; }
        //             to { width: 100%; }
        //         }
        //     `}</style>
        // </div>