import React from "react";
import Navbar from "./Navbar";
import Footer from "components/Footer";

const leaders = [
  {
    name: "Rajesh Kumar",
    role: "Founder & CEO",
    img: "/leaders/leader1.jpg",
  },
  {
    name: "Anita Sharma",
    role: "Director of Operations",
    img: "/leaders/leader2.jpg",
  },
  {
    name: "Vikram Singh",
    role: "Head of Research & Innovation",
    img: "/leaders/leader3.jpg",
  },
  {
    name: "Priya Verma",
    role: "Chief Agronomist",
    img: "/leaders/leader4.jpg",
  },
];

const LeadersOfPeople = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        <h2 className="text-4xl font-extrabold text-gray-800 mb-4">
          Leaders of People
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Meet the visionaries driving Agrifort Technologies forward with expertise,
          passion, and commitment to transforming agriculture.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6"
            >
              <img
                src={leader.img}
                alt={leader.name}
                className="w-full h-60 object-cover rounded-xl mb-5"
              />

              <h3 className="text-xl font-semibold text-gray-800">
                {leader.name}
              </h3>

              <p className="text-green-600 font-medium mt-1">
                {leader.role}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default LeadersOfPeople;
