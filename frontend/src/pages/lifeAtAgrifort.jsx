import React, { useEffect } from 'react'; // Import useEffect
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import Navbar from './Navbar';
import EmployeeEngagement from './employeeEngagement';
import Footer from '../components/Footer';
import agriculture from '../assets/images/hero/agriculture-hero.jpg';
import BreadCrumb from './components/breadcrumb';
import team from '../assets/emp/field.jpg'
import t from '../assets/emp/crop.jpg'

const LifeAtAgriFort = () => {
  // 1. Initialize AOS on component mount
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animation (ms)
      once: true, // Whether animation should only happen once
      offset: 100, // Offset (in px) from the original trigger point
      easing: 'ease-in-out', // Easing type
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar/>

      <section className="pt-6 pb-12 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-md overflow-hidden shadow-2xl">
                <img
                  src={agriculture}
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
              <h1 className="text-4xl md:text-4xl font-bold text-red-600 uppercase tracking-tight"  style={{ fontFamily: "cursive" }}>
              Life At Agrifort
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
              At **AgriFort Technologies**, we are dedicated to maintaining the highest ethical standards in every aspect of our operations. We believe that our values are the compass that guides our journey in both personal and professional realms.
              We are uncompromising in our pursuit of excellence, consistently delivering high-quality products and services. This unwavering dedication to integrity & quality transcends into the careers we nurture, ensuring that you have the resources and support to excel in your chosen path. We are committed to creating an environment where integrity, quality and our core values of aspiration, nurturing, progressive, and empowerment shape the essence of life at AgriFort.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* 3. Employee Engagement Section with fade-up animation */}
      <div data-aos="fade-up" data-aos-offset="50"> 
        <EmployeeEngagement/> 
      </div>
      
      <Footer/>
    
    </div>
  );
};

export default LifeAtAgriFort;