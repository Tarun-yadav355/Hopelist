import React, { useEffect, useState } from "react";

const ImageSlider = () => {
  const images = [
    "fpic.jpg",
    "p2.webp",
    "p3.avif",
    "p4.avif",
    "p5.avif"
  ]; 

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 3000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="fpic">
      <img src={images[currentIndex]} alt="slideshow" />
    </div>
  );
};

export default ImageSlider;
