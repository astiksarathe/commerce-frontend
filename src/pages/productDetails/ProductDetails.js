import React, { useEffect } from "react";
import "./productDetails.scss";
import "./ProductOverviewCustom.scss";
import { useDispatch } from "react-redux";
import { getProductByURL } from "../../features/product/productSlice";
import { useParams } from "react-router-dom";
import ProductDetailsMobile from "./productDetailsMobile/ProductDetailsMobile.js";
import ProductDetailsDesktop from "./productDetailsDesktop/ProductDetailsDesktop.js";
const ProductDetails = () => {
  const { url } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductByURL(url));
  }, [dispatch, url]);

  return (
    <>
      <div className="mobile">
        <ProductDetailsMobile />
      </div>
      <div className="desktop">
        <ProductDetailsDesktop />
      </div>
    </>
  );
};

export default ProductDetails;
