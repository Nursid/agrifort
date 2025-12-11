import React from "react";
import Navbar from "./Navbar";
import Footer from "components/Footer";
import anita from '../assets/img/team-4-470x470.png'
import priya from '../assets/img/team-3-800x800.jpg'
import rajesh from '../assets/img/team-2-800x800.jpg'
import vikram from '../assets/img/team-1-800x800.jpg'
import { Linkedin, Mail, Phone, Award, Users, Lightbulb, Target } from 'lucide-react';

const leaders = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    img: rajesh,
    bio: "Visionary leader with 25+ years in agro-biotech industry",
    email: "rajesh@agrifort.com",
    phone: "+91 98765 43210",
    specialties: ["Strategic Planning", "Innovation", "Global Expansion"]
  },
  {
    name: "Anita Sharma",
    role: "Director of Operations",
    img: anita,
    bio: "Operations expert driving operational excellence across all units",
    email: "anita@agrifort.com",
    phone: "+91 98765 43211",
    specialties: ["Operations", "Quality Assurance", "Supply Chain"]
  },
  {
    name: "Vikram Singh",
    role: "Head of Research & Innovation",
    img: vikram,
    bio: "R&D pioneer developing breakthrough agricultural solutions",
    email: "vikram@agrifort.com",
    phone: "+91 98765 43212",
    specialties: ["Research", "Product Development", "Biotechnology"]
  },
  {
    name: "Priya Verma",
    role: "Chief Agronomist",
    img: priya,
    bio: "Agronomic expert with deep field knowledge and farmer relations",
    email: "priya@agrifort.com",
    phone: "+91 98765 43213",
    specialties: ["Crop Science", "Farmer Relations", "Sustainability"]
  },
];

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

      {/* Hero Section */}
      <section 
        className="relative h-30 py-32 bg-cover bg-center overflow-hidden"
        style={{
          backgroundImage: ' url(https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200)',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute top-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-red-500 mb-6">
            Leaders of People
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Meet the visionary leaders driving AgriFort Technologies forward with expertise, passion, and unwavering commitment to transforming agriculture globally.
          </p>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <div className="w-72 h-1 bg-gradient-to-r from-green-600 to-emerald-600"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                {/* Image Container */}
                <div className="relative h-72 overflow-hidden bg-gray-200">
                  <img
                    src={leader.img}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {leader.name}
                  </h3>
                  
                  <p className="text-green-600 font-semibold mb-4">
                    {leader.role}
                  </p>

                  <p className="text-sm text-gray-600 mb-4">
                    {leader.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mb-4">
                    <p className="text-xs font-bold text-gray-700 mb-2">SPECIALTIES:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {leader.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-green-100 text-green-800 px-2.5 py-1 rounded-full font-medium"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-2 border-t pt-4">
                    <a
                      href={`mailto:${leader.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="truncate">{leader.email}</span>
                    </a>
                    <a
                      href={`tel:${leader.phone}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      <span>{leader.phone}</span>
                    </a>
                  </div>

                  {/* Social Links */}
                  <button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2">
                    <Linkedin className="w-4 h-4" />
                    Connect on LinkedIn
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Drives Our Leaders</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our leadership team is guided by core principles that shape every decision and action
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Leadership Philosophy</h2>
              <div className="w-72 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mb-6"></div>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At AgriFort Technologies, our leaders believe that success is built on trust, transparency, and a deep commitment to our mission of transforming agriculture.
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                      <span className="text-xl">🎯</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Vision-Driven</h3>
                    <p className="text-gray-600">We set ambitious goals and inspire our teams to achieve excellence</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                      <span className="text-xl">💡</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Innovation-Focused</h3>
                    <p className="text-gray-600">We encourage creative thinking and breakthrough solutions</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                      <span className="text-xl">🤝</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">People-Centric</h3>
                    <p className="text-gray-600">We invest in our people and foster a culture of collaboration</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-600 text-white">
                      <span className="text-xl">🌍</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Impact-Oriented</h3>
                    <p className="text-gray-600">We measure success by the positive change we create for farmers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Leadership"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Statistics */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Team Highlights</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="text-5xl font-bold text-green-600 mb-3">150+</div>
              <p className="text-gray-600 font-semibold">Team Members</p>
              <p className="text-sm text-gray-500 mt-2">Dedicated professionals</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="text-5xl font-bold text-green-600 mb-3">250+</div>
              <p className="text-gray-600 font-semibold">Years Combined Experience</p>
              <p className="text-sm text-gray-500 mt-2">In agriculture & biotech</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="text-5xl font-bold text-green-600 mb-3">45+</div>
              <p className="text-gray-600 font-semibold">PhDs & Experts</p>
              <p className="text-sm text-gray-500 mt-2">Research specialists</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-md text-center">
              <div className="text-5xl font-bold text-green-600 mb-3">50+</div>
              <p className="text-gray-600 font-semibold">Awards & Recognition</p>
              <p className="text-sm text-gray-500 mt-2">Industry accolades</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Work With Our Leadership
          </h2>
          <p className="text-lg text-white/90 mb-10 max-w-3xl mx-auto">
            Join our growing team and be part of the agricultural revolution. We're always looking for talented individuals who share our passion for innovation and sustainability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-green-600 px-8 py-3.5 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-block text-center shadow-lg"
            >
              Explore Careers
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white hover:text-green-600 transition-colors duration-200 inline-block text-center"
            >
              Contact Leadership
            </a>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default LeadersOfPeople;