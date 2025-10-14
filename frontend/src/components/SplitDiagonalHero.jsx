// src/components/SplitDiagonalHero.jsx
import React from 'react';

/**
 * A hero section with a diagonal split background, text on the left, and custom content/image on the right.
 * @param {string} leftTitle - The main title text for the left side (e.g., "Admissions").
 * @param {string} [leftSubtitle] - Optional subtitle/tagline for the left side.
 * @param {React.ReactNode} rightContent - The content for the right side (e.g., an <img>, a div with text, etc.).
 * @param {string} [heightClass='h-[60vh] md:h-[70vh]'] - Tailwind class for the section height.
 * @param {string} [leftBgColor='bg-orange-500'] - Tailwind class for the left diagonal background color.
 * @param {string} [rightBgColor='bg-blue-800'] - Tailwind class for the right diagonal background color.
 * @param {string} [diagonalSkew='skew-x-[15deg]'] - Tailwind class for the diagonal skew (e.g., 'skew-x-[15deg]', '-skew-x-[15deg]').
 */
const SplitDiagonalHero = ({
    leftTitle,
    leftSubtitle,
    rightContent,
    heightClass = 'h-[60vh] md:h-[70vh]',
    leftBgColor = 'bg-orange-500', // Default color matching the example
    rightBgColor = 'bg-blue-800', // Default color matching the example
    diagonalSkew = 'skew-x-[15deg]', // Default skew matching the example
}) => {
    return (
        <section className={`relative w-full ${heightClass} overflow-hidden bg-gray-900`}>
            
            {/* --- 1. Diagonal Background Shapes --- */}
            {/* Left Diagonal Background */}
            <div 
                className={`absolute inset-y-0 left-0 w-3/5 ${leftBgColor} 
                           transform origin-top-left ${diagonalSkew} -translate-x-1/2 md:-translate-x-1/4`}
            ></div>
            
            {/* Right Diagonal Background */}
            <div 
                className={`absolute inset-y-0 right-0 w-3/5 ${rightBgColor} 
                           transform origin-bottom-right ${diagonalSkew} translate-x-1/2 md:translate-x-1/4`}
            ></div>

            {/* --- 2. Content Container (Text on Left, Custom Content on Right) --- */}
            <div className="absolute inset-0 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 z-10">

                {/* Left Side: Title and Subtitle */}
                <div className="w-full md:w-1/2 text-white p-4 text-center md:text-left" data-aos="fade-right">
                    <h1 className="text-5xl md:text-6xl font-extrabold uppercase mb-2 leading-tight drop-shadow-lg">
                        {leftTitle}
                    </h1>
                    {leftSubtitle && (
                        <p className="text-xl md:text-2xl font-light italic drop-shadow-lg text-gray-200">
                            {leftSubtitle}
                        </p>
                    )}
                </div>

                {/* Right Side: Custom Content (Image or other elements) */}
                <div className="w-full md:w-1/2 flex items-center justify-center h-full p-4" data-aos="fade-left" data-aos-delay="300">
                    {rightContent}
                </div>

            </div>
        </section>
    );
};

export default SplitDiagonalHero;