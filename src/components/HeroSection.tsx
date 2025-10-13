import React, { useState, useEffect } from "react";

import img1 from "../assets/ModiJi.jpeg";
import img2 from "../assets/Modiji2.jpg";
import img3 from "../assets/Modiji3.jpg";
import img4 from "../assets/Modiji4.jpg";

const HeroSection = () => {
  const images = [img1, img2, img3, img4];
  const [current, setCurrent] = useState(0);

  // Auto-change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      {/* Images with fade effect */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`slide-${index}`}
          className={`absolute w-full transition-opacity duration-700 ease-in-out ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              current === index ? "bg-white scale-110" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
