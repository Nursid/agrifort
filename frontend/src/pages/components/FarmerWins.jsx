import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "pages/Navbar";
import Footer from "components/Footer";


export default function FarmerWins() {

  return (
    <div className="flex  flex-col h-full">
      <Navbar/>


      <section className="pt-6 pb-12 bg-gradient-to-b from-white to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Image */}
            <div className="relative">
              <div className="relative rounded-md overflow-hidden shadow-2xl">
                <img
                  src="/images/backgrounds/FarmerWins.jpg"
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
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4"   style={{ fontFamily: "'Times', 'Times New Roman', 'Georgia', serif",}}>
              Farmer Wins, We Wins
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
              Discover our innovative range of bio-stimulants, crop protection solutions, and nutrient formulations designed to revolutionize farming practices and maximize your yields.
              </p>
            </div>
          </div>
        </div>
      </section>
        
      {/* Heading */}
      {/* <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Farmer Wins
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-emerald-600"></div>
      </div> */}

      {/* Video Container */}
      <div className="relative  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 px-12">
  
  {/* Video 1 */}
  <div className="relative w-full rounded-md shadow-xl overflow-hidden h-[320px]">
    <iframe
      src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F659307653784232%2F&show_text=false&width=267&t=0"
      className="w-full h-full"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>

  {/* Video 2 */}
  <div className="relative w-full rounded-md shadow-xl overflow-hidden h-[320px]">
    <iframe
      src="https://www.facebook.com/plugins/video.php?height=288&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1241381421360799%2F&show_text=false&width=560&t=0"
      className="w-full h-full"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>

  {/* Video 3 */}
  <div className="relative w-full rounded-md shadow-xl overflow-hidden h-[320px]">
    <iframe
      src="https://www.facebook.com/plugins/video.php?height=409&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1587163922665448%2F&show_text=false&width=560&t=0"
      className="w-full h-full"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>

  {/* Video 4 */}
  <div className="relative w-full rounded-md shadow-xl overflow-hidden h-[320px]">
    <iframe
      src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4192862487640206%2F&show_text=false&width=380&t=0"
      className="w-full h-full"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>

  {/* Video 5 */}
  <div className="relative w-full rounded-md shadow-xl overflow-hidden h-[320px]">
    <iframe
      src="https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F4192862487640206%2F&show_text=false&width=380&t=0"
      className="w-full h-full"
      style={{ border: "none", overflow: "hidden" }}
      scrolling="no"
      frameBorder="0"
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      allowFullScreen
    />
  </div>

</div>

      <Footer/>
    </div>
  );
}