import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { useMediaQuery } from "react-responsive";

import { getProductByURL } from "../../features/product/productSlice";
import ProductDetailsMobile from "./productDetailsMobile/ProductDetailsMobile.js";
import ProductDetailsDesktop from "./productDetailsDesktop/ProductDetailsDesktop.js";

const ProductDetails = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 48rem)" });

  const { url } = useParams();
  const dispatch = useDispatch();
  const { productDetails } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getProductByURL(url));
  }, [dispatch, url]);

  return (
    <>
      {isMobile ? (
        <div className="mobile relative w-screen overflow-x-hidden">
          <ProductDetailsMobile productDetails={productDetails} />
        </div>
      ) : (
        <div className="desktop relative">
          <ProductDetailsDesktop productDetails={productDetails} />
        </div>
      )}
    </>
  );
};

export default ProductDetails;
