import React, { useEffect, useState } from "react";
import { Award, Leaf, Users, BookOpen, Briefcase } from "lucide-react";
import Footer from "components/Footer";
import Navbar from "./Navbar";

const About = () => {
  const achievements = [
    {
      number: "20+",
      title: "Years of Excellence",
      description: "Pioneering agro-biotech solutions",
    },
    {
      number: "500+",
      title: "Products Developed",
      description: "Innovative agricultural solutions",
    },
    {
      number: "10K+",
      title: "Happy Farmers",
      description: "Trusted by farming communities",
    },
    {
      number: "50+",
      title: "Countries Served",
      description: "Global agricultural impact",
    },
  ];

  const values = [
    {
      icon: "🌱",
      title: "Sustainability",
      description:
        "Committed to environmentally responsible farming practices that preserve soil health and biodiversity.",
    },
    {
      icon: "🔬",
      title: "Innovation",
      description:
        "Continuous research and development to bring cutting-edge biotech solutions to agriculture.",
    },
    {
      icon: "🤝",
      title: "Partnership",
      description:
        "Building strong relationships with farmers, dealers, and stakeholders across the value chain.",
    },
    {
      icon: "🎯",
      title: "Quality",
      description:
        "Maintaining the highest standards in product development, manufacturing, and customer service.",
    },
  ];

  const advantages = [
    {
      icon: Award,
      title: "Manufacturing",
      description: "State-of-the-art production facilities",
    },
    {
      icon: Leaf,
      title: "R&D",
      description: "Cutting-edge research and development",
    },
    {
      icon: Users,
      title: "People at AgriFort",
      description: "Experienced team of professionals",
    },
    {
      icon: BookOpen,
      title: "Tech-based Products",
      description: "Innovation-driven solutions",
    },
    {
      icon: Briefcase,
      title: "Trusted Partnerships",
      description: "Building lasting relationships",
    },
  ];

  const timeline = [
    {
      year: "2003",
      title: "Company Founded",
      description:
        "AgriFort Technologies established with a vision to revolutionize agriculture through biotechnology.",
    },
    {
      year: "2008",
      title: "First Breakthrough",
      description:
        "Launched our flagship bio-stimulant product, Hortis-SP, achieving remarkable success.",
    },
    {
      year: "2015",
      title: "Global Expansion",
      description:
        "Expanded operations to 25 countries, establishing our presence in international markets.",
    },
    {
      year: "2020",
      title: "Digital Transformation",
      description:
        "Launched digital platforms for farmer education and product support services.",
    },
    {
      year: "2024",
      title: "Innovation Hub",
      description:
        "Opened state-of-the-art R&D facility focusing on sustainable agriculture solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {/* Hero Banner Section */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-white to-green-50">
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
                AgriFort Technologies was born from a vision at Blue Quadrant,
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
                and eternal: when farmers win – we win.
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
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="bg-gradient-to-br from-green-600 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our two-decade journey of agricultural
              innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {timeline.map((event, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-2xl font-bold text-green-600 mb-2">
                  {event.year}
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Join Our Mission
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Be part of the agricultural revolution. Whether you're a farmer,
            dealer, or partner, together we can build a sustainable future for
            agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg inline-block text-center"
            >
              Get In Touch
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-200 hover:scale-105 active:scale-95 inline-block text-center"
            >
              View Products
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
