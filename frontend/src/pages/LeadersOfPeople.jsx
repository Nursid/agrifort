import React from "react";
import Navbar from "./Navbar";
import Footer from "components/Footer";
import { Linkedin, Mail, Phone, Award, Users, Lightbulb, Target } from 'lucide-react';
import LeadershipTeam from "./components/LeadershipTeam";
import BreadCrumb from "./components/breadcrumb";


const LeadersOfPeople = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar/>
      {/* <BreadCrumb title={'Leaders & People'} bgImage={'/images/breadcrum/about.png'}/>
       Leadership Team Section */}
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
