import React, { useState, useEffect, useRef } from "react";
import { Play } from "lucide-react";

const LazyVideo = ({ src, height }) => {
  const [loadIframe, setLoadIframe] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadIframe(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" } // Starts loading 200px before it enters view
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full rounded-xl shadow-xl overflow-hidden h-[320px] bg-gray-900 flex items-center justify-center"
    >
      {!loadIframe ? (
        <div className="flex flex-col items-center gap-3">
          <div className="bg-green-600/20 p-4 rounded-full animate-pulse">
            <Play className="text-green-500 w-8 h-8" />
          </div>
          <span className="text-gray-400 text-xs font-medium">Loading Reel...</span>
        </div>
      ) : (
        <iframe
          src={src}
          className="w-full h-full animate-in fade-in duration-1000"
          style={{ border: "none", overflow: "hidden" }}
          scrolling="no"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default function FarmerWins() {
  const videoData = [
    { id: 1, src: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F659307653784232%2F&show_text=false&width=267&t=0" },
    { id: 2, src: "https://www.facebook.com/plugins/video.php?height=288&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1241381421360799%2F&show_text=false&width=560&t=0" },
    { id: 3, src: "https://www.facebook.com/plugins/video.php?height=409&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1587163922665448%2F&show_text=false&width=560&t=0" }
  ];

  return (
    <div className="flex flex-col gap-6 w-full">
    {videoData.map((video) => (
      <LazyVideo key={video.id} src={video.src} />
    ))}
  </div>
  
  );
}