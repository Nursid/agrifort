import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Play, Award, TrendingUp, Users } from "lucide-react";

export default function FarmerWins() {


  return (
    <div className="w-full space-y-4 md:space-y-6">
  
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
  </div>
  );
}