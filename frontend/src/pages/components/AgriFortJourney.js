import React from 'react';
import { Sprout, Users, Globe, TrendingUp } from 'lucide-react';

export default function AgriFortJourney() {
  return (
    <section className="py-16 bg-gradient-to-b from-emerald-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Side - Enhanced Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AgriFort Agriculture"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent"></div>
              
              {/* Floating badge */}
              <div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="bg-green-600 p-3 rounded-xl">
                    <Sprout className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">10M+</p>
                    <p className="text-sm text-gray-600">Farmers Trust Us</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative leaf icon */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-full shadow-2xl hidden lg:block">
              <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66.66-1.89C6 20 7 19 8 18c0-1.5 1.34-2 2-2 1 0 3 1 3 1s1.5-.5 2-2c1 0 3 1 3 1s1-1 1-2c.5 0 1-.5 1.5-1.5 1-.5 2.5-1.5 3.5-2.5l-1-1-1-1s-2 1-3.5 1.5C18 9.5 17.5 9 17 8z"/>
              </svg>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></div>
              Our Story
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              The AgriFort{' '}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Journey
              </span>
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed">
              AgriFort Technologies was born from a vision at Blue Quadrant, Dubai—to build a strong, 
              future-ready agriculture company, and what better place to begin this journey than in the 
              heart of Indian farming.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              As the world shifts towards environmentally responsible, low-chemical and nutrition-focused 
              farming, AgriFort stands at the forefront with advanced, technology-backed solutions designed 
              to increase yields and enhance farm income.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">2x</p>
                <p className="text-xs text-gray-600">Yield Increase</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">1000+</p>
                <p className="text-xs text-gray-600">Villages Covered</p>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">Global</p>
                <p className="text-xs text-gray-600">Collaborations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Full Width Content Card */}
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-green-100">
          <div className="max-w-5xl mx-auto">
            {/* Ecosystem Section */}
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-green-600 to-emerald-600 rounded-full"></div>
                Our Growing Ecosystem
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Over the years, our journey has expanded beyond agriculture into a robust ecosystem of 
                companies: <span className="font-semibold text-green-700">BlueFort Healthcare</span> in the 
                pharmaceutical sector, <span className="font-semibold text-green-700">Sutantra</span> in 
                information technology, health and technology—strengthening the lives of people we serve.
              </p>

              {/* Company Pills */}
              <div className="flex flex-wrap gap-3 mb-8">
                <span className="px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium border border-green-200">
                  🌾 AgriFort Technologies
                </span>
                <span className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-200">
                  💊 BlueFort Healthcare
                </span>
                <span className="px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium border border-purple-200">
                  💻 Sutantra IT & Health Tech
                </span>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 md:p-8 border border-green-100">
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                With a wide range of eco-friendly and cost-effective products, a distribution network that 
                reaches the deepest pockets of India, and global collaborations supporting our growth, we have 
                earned the trust of millions of farmers who consistently share exceptional results on the field.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Their success stories inspire us daily and validate the science and passion behind everything 
                we create. As an organisation, we remain committed to society and every stakeholder—working 
                responsibly, innovating relentlessly and striving to bring more smiles to the farmer's face.
              </p>
              
              <div className="bg-white rounded-xl p-6 mt-6 border-l-4 border-green-600 shadow-md">
                <p className="text-xl font-semibold text-gray-900 italic">
                  "When farmers win – we win."
                </p>
                <p className="text-sm text-gray-600 mt-2">Our Eternal Philosophy</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}