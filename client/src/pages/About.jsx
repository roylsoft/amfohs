import { Link } from "react-router-dom";
import CallToAction from "../components/CallToAction";
import CallToAction4 from "../components/CallToAction4";
import CallToAction5 from "../components/CallToAction5";
import CallToAction3 from "../components/CallToAction3";
import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import Slider from "react-slick"; // Importer React Slick
import "slick-carousel/slick/slick.css"; // Importer les styles de Slick
import "slick-carousel/slick/slick-theme.css"; // Importer le thème de Slick
export default function About() {
  const images = [
    "../src/assets/WhatsApp Image 2024-08-10 at 11.27.10 (1).jpeg",
    "../src/assets/WhatsApp Image 2024-08-10 at 21.12.08.jpeg",
    "../src/assets/WhatsApp Image 2024-08-10 at 21.12.07.jpeg",
    "../src/assets/WhatsApp Image 2024-08-10 at 21.12.09.jpeg"
  ];

  // Configuration du carrousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="">
      <Slider {...settings} className="relative h-96">
        {images.map((src, index) =>
          <div key={index} className="flex items-center justify-center">
            <div className="relative w-full h-full overflow-hidden">
              <img
                src={src}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-80 transition-transform duration-1000 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black opacity-10" />
          </div>
        )}
      </Slider>
      {/* Fin Carrousel d'Images */}

      {/* Contenu de la Bannière */}
      
      <div className="p-6 dark:bg-slate-700">
        <CallToAction />
      </div>
      <div>
        <div>
          <div>
            <div className="p-6 dark:bg-slate-700">
              <CallToAction5 />
            </div>
            <div className="p-6 dark:bg-slate-700">
              <CallToAction4 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
