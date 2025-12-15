import React, { useEffect, useState } from "react";
import { Award, Leaf, Users, BookOpen, Briefcase } from "lucide-react";
import Footer from "components/Footer";
import Navbar from "./Navbar";
import { Button } from "@material-tailwind/react";
import AgriFortAdvantages from "./components/AgriFortAdvantages";

const About = () => {
  const paragraph=`AgriFort Technologies was born from a vision at Blue Quadrant,
                Dubai—to build a strong, future-ready agriculture company, and
                what better place to begin this journey than in the heart of
                Indian farming. As the world shifts towards environmentally
                responsible, low-chemical and nutrition-focused farming,
                AgriFort stands at the forefront with advanced,
                technology-backed solutions designed to increase yields and
                enhance farm income. Over the years, our journey has expanded
                beyond agriculture into a robust ecosystem of companies:
                BlueFort Healthcare in the pharmaceutical sector, Sutantra in
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
                and eternal: when farmers win – we win.`

const [Para,setPara]=useState(paragraph.slice(0,200));
const [isReadMore,setisReadMore]=useState(true)
function toggleDesc(isRead){
  console.log(isRead)
  if(!isRead){
    setPara(paragraph)
  }else{
    setPara(paragraph.slice(0,200))
  }
  setisReadMore(isRead)
  
}

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Banner Section */}
      <section className="pt-6 pb-12 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/2901215/pexels-photo-2901215.jpeg?auto=compress&cs=tinysrgb&w=800"
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
              <h1 className="text-5xl md:text-6xl font-bold text-red-600 uppercase tracking-tight">
                ABOUT US.
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                {Para}
                <Button onClick={()=>  toggleDesc(!isReadMore)  
                  } >{isReadMore ? 'Read More':"Read Less"}</Button>
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span className="text-green-800 font-medium">
                    20+ Years Experience
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span className="text-green-800 font-medium">
                    Global Presence
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span className="text-green-800 font-medium">
                    Innovation Driven
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-green-900 mb-4">
              Environmental Policy
            </h2>
            <div className="w-72 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
          </div>
          <p>
            Our company's foundation rests on strong value systems that guide
            every action we take. We are committed to conducting our business in
            a socially responsible, ethical, and transparent manner. We respect
            the law, uphold universal human rights, safeguard the environment,
            and contribute positively to the communities we serve. At AgriFort,
            our commitment is simple yet powerful—to operate in ways that are
            good for people and for the planet.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mission */}
            <div className="bg-white rounded-2xl p-8  md:p-12 shadow-lg">
              {/* <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm mb-6">
                Mission
              </div> */}
               <h2 className="text-3xl text-center border-green-200 rounded-md bg-green-500 md:text-4xl font-bold mb-3 text-purple-500">
                Our Mission
              </h2>
              {/* <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div> */}

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To develop, collaborate, and deliver value-added technologies,
                products, and services that empower farmers and enable optimum
                agricultural output.{" "}
              </p>
              <div className="space-y-3">
                {[
                  "Empower farmers with cutting-edge technology",
                  "Promote sustainable agricultural practices",
                  "Drive innovation in crop protection",
                  "Build resilient farming communities",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
              {/* <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm mb-6">
                Vision
              </div> */}
              <h2 className="text-3xl text-center border-green-200 rounded-md bg-green-500 md:text-4xl font-bold mb-3 text-purple-500">
                Our Vision
              </h2>
              {/* <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div> */}

              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                To become one of the most trusted and impactful Agri-Input
                organisations, serving farming communities in India and 
                through scientific, sustainable, and future-ready agriculture.{" "}
              </p>
              <div className="space-y-3">
                {[
                  "Leading innovation in agricultural biotechnology",
                  "Creating a sustainable food future",
                  "Empowering farming communities globally",
                  "Setting industry standards for excellence",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AgriFort Advantage Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The AgriFort Advantage
            </h2>
            <AgriFortAdvantages />
            </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
