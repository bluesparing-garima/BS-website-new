import React from "react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide components
import "swiper/css"; // Import Swiper styles
import "swiper/css/autoplay"; // Import autoplay styles
import { Autoplay } from "swiper/modules"; // Import autoplay module

const ImageSlider = () => {
  const images = [
    {
      src: "insure.jpg",
      text: "Next-Gen IT Solutions for Smarter Insurance Management",
    },
    {
      src: "insure.jpg",
      text: "Revolutionizing Insurance Through Innovation",
    },
  ];

  return (
    <div className="hero_slider">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={`Slide ${index + 1}`}
              className="hero_img"
            />
            <h1 className="hero_text">{image.text}</h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
