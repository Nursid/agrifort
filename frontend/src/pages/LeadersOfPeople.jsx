import React from "react";
import Navbar from "./Navbar";
import Footer from "components/Footer";
import anita from '../assets/img/team-4-470x470.png'
import priya from '../assets/img/team-3-800x800.jpg'
import rajesh from '../assets/img/team-2-800x800.jpg'
import vikram from '../assets/img/team-1-800x800.jpg'
import { Linkedin, Mail, Phone, Award, Users, Lightbulb, Target } from 'lucide-react';
import LeadershipTeam from "./components/LeadershipTeam";



const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "Committed to delivering the highest quality in everything we do"
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building strong teams and partnerships across the organization"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Constantly pushing boundaries to create breakthrough solutions"
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description: "Focused on creating positive impact for farmers and communities"
  }
];

const LeadersOfPeople = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>


      <section className="py-6 pb-12 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/backgrounds/leadersofpeople.jpg"
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

            {/* Right Side - Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-4xl font-bold text-red-600 uppercase tracking-tight" style={{ fontFamily: "cursive" }}>
              Leaders of People.
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
              Meet the visionary leaders driving AgriFort Technologies forward with expertise, passion, and unwavering commitment to transforming agriculture globally.
              </p>
            </div>
          </div>
        </div>
      </section>



      {/* Leadership Team Section */}
      <section className="bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <LeadershipTeam />
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default LeadersOfPeople;