import React from "react";
import ceo from '../../assets/emp/chairm.jpg';
import em from '../../assets/emp/empl.jpg';

const leadershipInsights = [
 {
    img:ceo,
    name: "Message from Chairman",
    role: "Chairman",
    message: "Our commitment to excellence and sustainable growth has been the cornerstone of our success. We believe in empowering our team and stakeholders to achieve remarkable milestones together."
  },
  {
    img: em,
    name: "Message from CEO",
    role: "Chief Executive Officer",
    message: "Innovation and integrity drive everything we do. Our vision is to create lasting value while maintaining the highest standards of corporate governance and social responsibility."
  },
  {
    img: em,
    name: "Message from Managing Director",
    role: "Managing Director",
    message: "Through strategic planning and operational excellence, we continue to strengthen our market position. Our focus remains on delivering exceptional results while fostering a culture of collaboration."
  },
  {
    img: ceo,
    name: "Message from Board",
    role: "Board of Directors",
    message: "We are dedicated to transparent leadership and creating sustainable value for all stakeholders. Our governance framework ensures accountability and ethical business practices at every level."
  }
];

export default function LeadershipAndFarmersSection() {
  return (
    <div className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading
        <div className="w-full mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">Leadership Insights</h2>
          <div className="w-48 md:w-72 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full"></div>
          <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-3">Hear from the team driving agricultural innovation</p>
        </div> */}

        {/* Leadership Section */}
        <div className="w-full">
          <div className="grid gap-6 md:gap-8">
            {leadershipInsights.map((insight, index) => {
              return (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <div className="flex items-start mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full blur-md opacity-50"></div>
                      <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mr-3 md:mr-4 flex-shrink-0 shadow-lg">
                        <img
                          src={insight.img}
                          alt={insight.name}
                          className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900">{insight.name}</h3>
                      <p className="text-xs md:text-sm text-green-600 font-medium mt-1">{insight.role}</p>
                    </div>
                  </div>
                  <div className="pl-1">
                    <div className="border-l-4 border-green-600 pl-3 md:pl-4">
                      <p className="text-sm md:text-base text-gray-700 leading-relaxed italic">"{insight.message}"</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}