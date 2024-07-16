import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./productImageCarousel.scss";

const ProductImageCarousel = () => {
  const [thumbnilImg, setThumbnilImg] = useState("/assets/product/1.webp");
  return (
    <div className="product-img-container">
      <img className="thumbnil-img" src={thumbnilImg} alt="product thumbnil" />
      <OwlCarousel className="owl-theme" dots={false} margin={5} nav items={4}>
        <div class="item" onClick={() => setThumbnilImg("/assets/product/1.webp")}>
          <img src="/assets/product/1.webp" alt="product" />
        </div>
        <div class="item" onClick={() => setThumbnilImg("/assets/product/2.webp")}>
          <img src="/assets/product/2.webp" alt="product" />
        </div>
        <div class="item" onClick={() => setThumbnilImg("/assets/product/3.webp")}>
          <img src="/assets/product/3.webp" alt="product" />
        </div>
        <div class="item" onClick={() => setThumbnilImg("/assets/product/4.png")}>
          <img src="/assets/product/4.png" alt="product" />
        </div>
        <div class="item" onClick={() => setThumbnilImg("/assets/product/6.png")}>
          <img src="/assets/product/6.png" alt="product" />
        </div>
        <div class="item" onClick={() => setThumbnilImg("/assets/product/7.webp")}>
          <img src="/assets/product/7.webp" alt="product" />
        </div>
        <div class="item" onClick={() => setThumbnilImg("/assets/product/8.jpg")}>
          <img src="/assets/product/8.jpg" alt="product" />
        </div>
      </OwlCarousel>
    </div>
  );
};

export default ProductImageCarousel;
