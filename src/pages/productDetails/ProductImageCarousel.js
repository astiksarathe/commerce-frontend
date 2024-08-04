import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./productImageCarousel.scss";

const ProductImageCarousel = () => {
  const [thumbnilImg, setThumbnilImg] = useState("/assets/product/1.webp");
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          adaptiveHeight: true,
        },
      },
    ],
  };
  return (
    <div className="flex sticky top-32">
      <div className="w-full p-3 pb-4 m-auto md:w-40 md:pt-0">
        <Slider {...settings}>
          <div onClick={() => setThumbnilImg("/assets/product/1.webp")}>
            <img className="rounded m-auto" src="/assets/product/1.webp" alt="product" />
          </div>
          <div onClick={() => setThumbnilImg("/assets/product/2.webp")}>
            <img className="rounded m-auto" src="/assets/product/2.webp" alt="product" />
          </div>
          <div onClick={() => setThumbnilImg("/assets/product/3.webp")}>
            <img className="rounded m-auto" src="/assets/product/3.webp" alt="product" />
          </div>
          <div onClick={() => setThumbnilImg("/assets/product/4.png")}>
            <img className="rounded m-auto" src="/assets/product/4.png" alt="product" />
          </div>
          <div onClick={() => setThumbnilImg("/assets/product/6.png")}>
            <img className="rounded m-auto" src="/assets/product/6.png" alt="product" />
          </div>
          <div onClick={() => setThumbnilImg("/assets/product/7.webp")}>
            <img className="rounded m-auto" src="/assets/product/7.webp" alt="product" />
          </div>
          <div onClick={() => setThumbnilImg("/assets/product/8.jpg")}>
            <img className="rounded m-auto" src="/assets/product/8.jpg" alt="product" />
          </div>
        </Slider>
      </div>
      <div className="custom-hidden hidden md:block md:w-full md:px-2">
        <img className="rounded m-auto" src={thumbnilImg} alt="product thumbnil" />
      </div>
    </div>
  );
};

export default ProductImageCarousel;
