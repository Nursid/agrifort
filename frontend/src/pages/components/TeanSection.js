import React from 'react';
import { themecolor } from '../../components/CommanStyle';
import { Card, CardBody, Typography } from "@material-tailwind/react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "DK Chopra",
      position: "Honorary Chairman",
      image: "/Team/DK Chopra.jpg"
    },
    {
      name: "Sharad Awasthi",
      position: "Group of CEO",
      image: "/Team/sharad.jpeg"
    }
  ];

  return (
    <section className="py-16"
    style={{background: 'url("/images/backgrounds/renew-img.jpg")'}}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>Leadership Insights</h1>
          {/* <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Leadership {' '}
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
            
            </span>
          </h2> */}
        </div>

    <TeamCard />
      </div>
    </section>
  );
}

export  function TeamCard() {
    return (
        <>
<div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 p-4">

  {/* Item 1 */}
  <div className="p-3">
    <div className="group relative">
      <div className="relative" style={{ height: '500px' }}>
        <img
          src="/Team/DK Chopra.jpg"
          alt="DK Chopra"
          className="h-full w-full object-cover rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-105 cursor-pointer"
        />
        <div
          className="absolute left-10 right-10 text-center text-white p-4 shadow-lg rounded-md"
          style={{
            bottom: "-40px",
            backgroundColor: themecolor,
            zIndex: 10
          }}
        >
          <h5 className="text-base font-semibold leading-tight cursor-pointer">
            DK Chopra
          </h5>
          <p className="text-xs opacity-90 cursor-pointer">
            Honorary Chairman
          </p>
        </div>
      </div>
    </div>
    <div className="h-16"></div> {/* Increased height to ensure spacing on mobile stack */}
  </div>

  {/* Item 2 */}
  <div className="p-3">
    <div className="group relative">
      <div className="relative" style={{ height: '500px' }}>
        <img
          src="/Team/sharad.jpeg"
          alt="Sharad Awasthi"
          className="h-full w-full object-cover rounded-lg overflow-hidden transition-transform duration-500 group-hover:scale-105 cursor-pointer"
        />
        <div
          className="absolute left-10 right-10 text-center text-white p-4 shadow-lg rounded-md"
          style={{
            bottom: "-40px",
            backgroundColor: themecolor,
            zIndex: 10
          }}
        >
          <h5 className="text-base font-semibold leading-tight cursor-pointer">
            Sharad Awasthi
          </h5>
          <p className="text-xs opacity-90 cursor-pointer">
            Group of CEO
          </p>
        </div>
      </div>
    </div>
    <div className="h-16"></div>
  </div>

</div>
        </>
       
  );
}
