import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "pages/Navbar";

const videos = [
  "https://www.youtube.com/embed/dQw4w9WgXcQ",
  "https://www.youtube.com/embed/9bZkp7q19f0",
  "https://www.youtube.com/embed/ScMzIvxBSi4"
];

export default function FarmerWins() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const scrollNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex  flex-col h-full">
      <Navbar/>
        
      {/* Heading */}
      {/* <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Farmer Wins
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600"></div>
      </div> */}

      {/* Video Container */}
      <div className="relative w-full">
        <div className="relative w-full rounded-2xl shadow-xl overflow-hidden" style={{ height: "320px" }}>
          <iframe
            src={videos[currentIndex]}
            title={`farmer-win-${currentIndex}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={scrollPrev}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-gray-800" />
          </button>

          <button
            onClick={scrollNext}
            className="bg-white shadow-md p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronRight className="w-5 h-5 text-gray-800" />
          </button>
        </div>

        {/* Indicator Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-green-600 w-8"
                  : "bg-green-600 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}