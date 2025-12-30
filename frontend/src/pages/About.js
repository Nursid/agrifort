import React, { useEffect, useState } from "react";
import { Award, Leaf, Users, BookOpen, Briefcase } from "lucide-react";
import Footer from "../components/Footer";
import Navbar from "./Navbar";
import { Button } from "@material-tailwind/react";
import AgriFortAdvantages from "./components/AgriFortAdvantages";
import AOS from 'aos';
import 'aos/dist/aos.css';
import LeadershipSection from "./components/LeadershipSection";
import LeadershipTeam from "./components/LeadershipTeam";
import LeadershipMessages from "./components/LeadershipSection";
import VisionMissionSection from "./components/VisionMissionSection";

const About = () => {


useEffect(() => {
  AOS.init({
      duration: 1000,
      once: true,
      offset: 100
  });
}, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-6 pb-12 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/backgrounds/about.jpeg"
                  alt="About AgriFort"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute -bottom-6 -right-6">
                  <div className="bg-white p-4 rounded-full shadow-xl">
                    <svg className="w-12 h-12" viewBox="0 0 100 100">
                      <circle cx="25" cy="25" r="20" fill="#22c55e" />
                      <circle cx="75" cy="25" r="20" fill="#059669" />
                      <circle cx="25" cy="75" r="20" fill="#dc2626" />
                      <circle cx="75" cy="75" r="20" fill="#991b1b" />
                      <circle cx="50" cy="50" r="15" fill="#1f2937" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6">
            <h1
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900"
                style={{
                  fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",
                }}
              >
              The AgriFort Journey
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
              AgriFort Technologies was born from a vision at Blue Quadrant,
                Dubai—to build a strong, future-ready agriculture company, and
                what better place to begin this journey than in the heart of
                Indian farming. As the world shifts towards environmentally
                responsible, low-chemical and nutrition-focused farming,
                AgriFort stands at the forefront with advanced,
                technology-backed solutions designed to increase yields and
                enhance farm income.
              </p>
             
            </div>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
          Over the years, our journey has expanded
          beyond agriculture into a robust ecosystem of companies: BlueFort Healthcare in the pharmaceutical sector, Sutantra in
                information technology, health and technology—strengthening the
                lives of people we serve. With a wide range of eco-friendly and
                cost-effective products, a distribution network that reaches the
                deepest pockets of India, and global collaborations supporting
                our growth, we have earned the trust of millions of farmers who
                consistently share exceptional results on the field. Their
                success stories inspire us daily and validate the science and
                passion behind everything we create. As an organisation, we
                remain committed to society and every stakeholder—working
                responsibly, innovating relentlessly and striving to bring more
                smiles to the farmer’s face. For us, the philosophy is simple
                and eternal: when farmers win – we win.
            </p>
        </div>
      </section>
      

      <VisionMissionSection />

      <Footer />

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

      `}</style>
    </div>
  );
};

export default About;
