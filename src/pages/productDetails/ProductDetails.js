import React, { useEffect } from "react";
import "./productDetails.scss";
import "./ProductOverviewCustom.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProductByURL } from "../../features/product/productSlice";
import { useParams } from "react-router-dom";
import ProductDetailsMobile from "./productDetailsMobile/ProductDetailsMobile.js";
import ProductDetailsDesktop from "./productDetailsDesktop/ProductDetailsDesktop.js";
import { useMediaQuery } from "react-responsive";
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
        <div className="mobile">
          <ProductDetailsMobile productDetails={productDetails} />
        </div>
      ) : (
        <div className="desktop">
          <ProductDetailsDesktop productDetails={productDetails} />
        </div>
      )}
    </>
  );
};

export default ProductDetails;
