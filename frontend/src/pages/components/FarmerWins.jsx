import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "pages/Navbar";
import Footer from "components/Footer";
import BreadCrumb from "./breadcrumb";


export default function FarmerWins() {

  return (
    <div className="flex  flex-col h-full">
      <Navbar/>
      <BreadCrumb title={'Farmer Win - We Win'} bgImage={'/images/breadcrum/farmer.jpg'}/>
      {/* Video Container */}
      <div className="relative  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 p-12">
  
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