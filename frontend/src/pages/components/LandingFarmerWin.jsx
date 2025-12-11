import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Award, TrendingUp, Users } from "lucide-react";

const videos = [
  {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Increasing Crop Yield by 40%",
    farmer: "Ram Singh, Punjab"
  },
  {
    url: "https://www.youtube.com/embed/9bZkp7q19f0",
    title: "Organic Farming Success Story",
    farmer: "Lakshmi Devi, Karnataka"
  },
  {
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
    title: "From Loss to Profit in One Season",
    farmer: "Suresh Reddy, Telangana"
  }
];

const stats = [
  { icon: Users, label: "Farmers Impacted", value: "50,000+" },
  { icon: TrendingUp, label: "Avg. Income Increase", value: "35%" },
  { icon: Award, label: "Success Stories", value: "1,200+" }
];

export default function FarmerWins() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const scrollPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
    setIsPlaying(false);
  };

  const scrollNext = () => {
    setCurrentIndex((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
    setIsPlaying(false);
  };

  return (
    <div className="w-full space-y-4 md:space-y-6">
      {/* Header
      <div className="w-full">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">Farmer Wins</h2>
        <div className="w-24 md:w-72 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
        <p className="text-xs md:text-base text-gray-600 mt-2">Real stories of transformation and success</p>
      </div> */}

      {/* Stats Cards */}
      <div className="grid grid-cols-3 gap-2 md:gap-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div
              key={index}
              className="bg-white p-2 md:p-4 rounded-lg md:rounded-xl shadow-sm md:shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-1.5 md:p-3 rounded-full mb-1 md:mb-2">
                  <Icon className="w-3 h-3 md:w-5 md:h-5 text-green-600" />
                </div>
                <p className="text-sm md:text-2xl font-bold text-gray-900">{stat.value}</p>
                <p className="text-[9px] md:text-xs text-gray-600 mt-0.5 md:mt-1 leading-tight">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Video Container */}
      <div className="w-full">
        <div className="relative w-full rounded-lg md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden bg-gray-900 aspect-video">
          {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-emerald-600/20 flex items-center justify-center z-10">
              <button
                onClick={() => setIsPlaying(true)}
                className="bg-white/90 hover:bg-white p-3 md:p-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
              >
                <Play className="w-5 h-5 md:w-8 md:h-8 text-green-600 ml-0.5" />
              </button>
            </div>
          )}
          
          <iframe
            src={`${videos[currentIndex].url}${isPlaying ? '?autoplay=1' : ''}`}
            title={videos[currentIndex].title}
            className="w-full h-full"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Video Info */}
        <div className="mt-2 md:mt-4 bg-white p-2.5 md:p-4 rounded-lg md:rounded-xl shadow-sm md:shadow-md">
          <h3 className="text-sm md:text-lg font-bold text-gray-900 line-clamp-2">{videos[currentIndex].title}</h3>
          <p className="text-xs md:text-sm text-green-600 mt-1">
            <span className="font-medium">🌾</span> {videos[currentIndex].farmer}
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-3 md:mt-6">
          <button
            onClick={scrollPrev}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md md:shadow-lg p-2 md:p-3 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Indicator Dots */}
          <div className="flex gap-1.5 md:gap-2">
            {videos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsPlaying(false);
                }}
                className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-green-600 w-6 md:w-8"
                    : "bg-gray-300 w-1.5 md:w-2 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-md md:shadow-lg p-2 md:p-3 rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300 hover:scale-110"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}