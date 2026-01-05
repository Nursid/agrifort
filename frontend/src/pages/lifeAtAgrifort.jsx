import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";

const highlightsData = [
  {
    title: "Events & Trips",
    images: ['/images/award/01.jpeg', '/images/award/02.jpg', '/images/award/03.jpg','/images/award/04.jpeg'],
  },
  {
    title: "Conferences",
    images: ['/images/award/05.jpeg','/images/award/06.jpeg','/images/award/07.jpeg','/images/award/08.jpeg',],
  },
  {
    title: "Newsroom",
    images: ['/images/award/08.jpeg','/images/award/09.jpeg','/images/award/10.jpeg'],
  },
  {
    title: "Awards",
    images: ['/images/award/05.jpeg','/images/award/06.jpeg','/images/award/07.jpeg','/images/award/08.jpeg','/images/award/09.jpeg','/images/award/10.jpeg'],
  },
];

const LifeAtAgriFort = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* HIGHLIGHTS SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Heading */}
          <div className="text-center">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
              style={{
                fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",
              }}
            >
              Agrifort Highlights
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Discover key moments, achievements, and milestones that define
              Agrifort’s journey in innovation, research, and agricultural excellence.
            </p>
          </div>

          {/* Cards */}
          <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {highlightsData.map((section, idx) => (
          <div key={idx}>
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              {section.title}
            </h2>

            {/* Image Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {section.images.map((img, i) => (
                <div
                  key={i}
                  className="overflow-hidden rounded-lg group"
                >
                  <img
                    src={img}
                    alt={`${section.title} ${i + 1}`}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LifeAtAgriFort;
