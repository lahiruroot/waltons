import React, { useState } from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import Mobile_cr from "./mobile_carousel/mobile_cr";

const Carousel = () => {
  const [selectedLogo, setSelectedLogo] = useState(null);

  const settings = {
    dots: false,
    centerMode: true,
    infinite: true,
    speed: 20000,
    slidesToShow: 3.8,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    pauseOnHover: true, 
  };

  const logos = [
    { id: 1, name: 'Logo 1', price: '$100', src: 'https://www.primelands.lk/images/210721090758thumb.jpg' },
    { id: 2, name: 'Logo 2', price: '$150', src: 'https://www.primelands.lk/images/210726170750thumb.jpg' },
    { id: 3, name: 'Logo 3', price: '$200', src: 'https://www.primelands.lk/images/210727150746thumb.jpg' },
    { id: 4, name: 'Logo 4', price: '$100', src: 'https://www.primelands.lk/images/210729120744thumb.jpg' },
    { id: 5, name: 'Logo 5', price: '$150', src: 'https://www.primelands.lk/images/210802120835thumb.jpg' },
    { id: 6, name: 'Logo 6', price: '$200', src: 'https://www.primelands.lk/images/210802220818thumb.jpg' },
    { id: 7, name: 'Logo 7', price: '$150', src: 'https://www.primelands.lk/images/210901000958Thumb.jpg' },
    { id: 8, name: 'Logo 8', price: '$200', src: 'https://www.primelands.lk/images/210820100834Scottish_Islan_Thumb.jpg' },
    { id: 9, name: 'Logo 9', price: '$150', src: 'https://www.primelands.lk/images/210820100840The_Palace_Thumb.jpg' },
    { id: 10, name: 'Logo 10', price: '$200', src: 'https://www.primelands.lk/images/210901000958Thumb.jpg' },
  ];

  const handleLogoClick = (logo) => {
    setSelectedLogo(logo);
  };

  return (
    <section >
      <div className="carousel-container py-8 lg:py-16 mx-auto max-w-screen-xl px-1">
        <Slider {...settings}>
          {logos.map((logo) => (
            <div className="logo-item rounded" key={logo.id} onClick={() => handleLogoClick(logo)}>
              <img
                src={logo.src}
                alt={logo.name}
                className="logo-image"
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className="mobile-view py-16">
        <Mobile_cr />
      </div>
    </section>

  );
};

export default Carousel;
