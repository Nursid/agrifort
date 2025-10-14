import React, { useEffect } from 'react'; // Import useEffect
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles
import Navbar from './Navbar';
import EmployeeEngagement from './employeeEngagement';
import Footer from '../components/Footer';
import agriculture from '../assets/images/hero/agriculture-hero.jpg';
import BreadCrumb from './components/breadcrumb';
import team from '../assets/images/crops/vegetables.jpg'

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
      <BreadCrumb
           
           title="Life At Agrifort"
           bgImage={team}/>
      {/* 2. Main Content Section: Life at AgriFort */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-white to-green-50"> 
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* Left Side: Image with fade-right animation */}
          <div 
            className="relative"
            data-aos="fade-right" // AOS Animation applied here
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={agriculture}
                alt="AgriFort Technologies Office Building" 
                className="w-full h-full object-cover"
              />
               <p className="absolute text-gray-400 text-lg">AgriFort Technologies Office Building</p>
            </div>
          </div>

          {/* Right Side: Text Content with fade-left animation */}
          <div 
            className="space-y-6"
            data-aos="fade-left" // AOS Animation applied here (fade-up is a nice contrast to fade-right)
            data-aos-delay="200" // Delay the text animation slightly
          >
            <h1 className="text-5xl md:text-6xl font-bold text-red-600 uppercase tracking-tight">
              LIFE AT <span className="text-red-600">AGRIFORT</span>
            </h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-6 border-b-2 border-red-600 inline-block pb-1">
              Cultivating a Positive Work Environment
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              <span className="block">
                At **AgriFort Technologies**, we are dedicated to maintaining the highest ethical standards in every aspect of our operations. We believe that our values are the compass that guides our journey in both personal and professional realms. 
              </span>
              {/* <span className="block">
                Our commitment to **transparency, honesty, and accountability** ensures that you can trust us, not just as an organization but as a community where your personal and professional integrity is respected and valued. Quality is not merely a buzzword at AgriFort; it is the cornerstone of our existence. 
              </span> */}
              <span className="block">
                We are uncompromising in our pursuit of excellence, consistently delivering high-quality products and services. This unwavering dedication to integrity & quality transcends into the careers we nurture, ensuring that you have the resources and support to excel in your chosen path. We are committed to creating an environment where integrity, quality and our core values of aspiration, nurturing, progressive, and empowerment shape the essence of life at AgriFort.
              </span>
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