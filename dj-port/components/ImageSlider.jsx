import React, { useState } from "react";
import Image from "next/image";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const ImageSlider = ({ slideImages }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slideImages.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative">
      <Image
        src={slideImages[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
      <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={20} onClick={goToPreviousSlide} />
      </div>
      <div className="group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={20} onClick={goToNextSlide} />
      </div>
      <div className="p-4 bg-gradient-to-r from-[#164879] to-[#7189A1] text-white text-center">
        Slide {currentSlide + 1} / {slideImages.length}
      </div>
    </div>
  );
};

export default ImageSlider;
