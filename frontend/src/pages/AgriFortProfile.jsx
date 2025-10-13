import Navbar from "./Navbar";

import React from "react";
// Assuming your logo-integrated building image is saved here.
// (Update the path and filename if necessary)
import AgriFortBuilding from "../assets/img/agri.png";
import Footer from "components/Footer";

const AgriFortProfile = () => {
  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gray-900">
      <Navbar />

      <section className="pt-24 pb-12 bg-gradient-to-b from-white to-green-50">
        {/* Max Width Container: Consistent with Navbar and EmployeeEngagement */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Grid: 2-column layout on desktop (Image left, Text right) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Image Container (Order 2 on mobile, 1 on desktop) */}
            <div
              className="md:order-1 order-2"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={AgriFortBuilding}
                  alt="AgriFort Technologies Office Building"
                  // Ensures the image fills the space without stretching
                  className="w-full h-96 object-cover"
                />
                {/* Text overlay for image identification, matching previous style */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/40 text-white text-base font-medium rounded shadow-md">
                  AgriFort Technologies Office Building
                </div>
              </div>
            </div>

            {/* Right Column: Text Content (Order 1 on mobile, 2 on desktop) */}
            <div
              className="md:order-2 order-1 py-4 md:pt-0"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              {/* Main Title: Uses the prominent red color and bold font style */}
              <h1 className="text-4xl font-extrabold tracking-tight text-red-600 dark:text-red-500 sm:text-5xl mb-3">
                LIFE AT AGRIFORT
              </h1>

              {/* Subtitle/Motto: Consistent heading style */}
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-8 pb-1 border-b-2 border-red-500/20 inline-block">
                Cultivating a Positive Work Environment
              </h2>

              {/* Main Body Text: Consistent typography and line spacing */}
              <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                At **AgriFort Technologies**, we are dedicated to maintaining
                the highest ethical standards in every aspect of our operations.
                We believe that our values are the compass that guides our
                journey in both personal and professional realms.
              </p>

              <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, iure!
              </p>

              <p className="mt-4 text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                We are uncompromising in our pursuit of excellence, consistently
                delivering Lorem ipsum dolor sit amet.. We are committed to creating an
                environment where integrity, quality and our core values of
                aspiration, nurturing, progressive, and empowerment shape the
                essence of life at AgriFort.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AgriFortProfile;
