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
import BreadCrumb from "./components/breadcrumb";
import AgriFortJourney from "./components/AgriFortJourney";

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
      <BreadCrumb title={'About Us'} bgImage={'/images/breadcrum/about.png'}/>
      <AgriFortJourney />

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
