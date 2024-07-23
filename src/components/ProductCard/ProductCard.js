import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeOutlined, HeartOutlined, ShoppingOutlined } from "@ant-design/icons";

import "./productCard.scss";
import "./productCardCustom.scss";
import { useDispatch, useSelector } from "react-redux";
import { productQuickView, quickViewModelHandler } from "../../features/product";
import {
  creaetVariantTree,
  getProductByURL,
  selectVariantHandler,
  selectedProductForDetail,
} from "../../features/product/productSlice";
import { addToCart } from "../../features/cart/";
import { addToWishlist } from "../../features/wishlist";

const ProductCard = () => {
  const { wishlist } = useSelector((state) => state.wishlist);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productList, isLoading } = useSelector((state) => state.product);

  const addToCartHandler = (product) => {
    dispatch(addToCart({ ...product, quantity: 1 }));
  };

  const addToWishListHandler = (productId) => {
    dispatch(addToWishlist(productId));
  };

  const quickView = (product) => {
    dispatch(productQuickView(product));
    dispatch(creaetVariantTree());
    dispatch(selectVariantHandler());
    dispatch(quickViewModelHandler(true));
  };
  const productDetail = (product) => {
    dispatch(selectedProductForDetail(product.url)); //selectedProductURL
    dispatch(getProductByURL(product.url));
    navigate(`/shop/${product.url}`);
  };

  const isCurrentProductAddedWL = (product) => {
    if (product && wishlist) {
      const isPresent = wishlist.find((productId) => productId === product);
      if (isPresent) return true;
    }
    return false;
  };

  const productRender = () => {
    return productList.map((product) => (
      <div className="group" key={product._id}>
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
          <div className="product_actions">
            <div>
              <button
                className="product_action-icon group-hover:opacity-75 "
                onClick={() => addToCartHandler(product)}
              >
                <ShoppingOutlined style={{ fontSize: "15px" }} />
              </button>
              <button
                className="product_action-icon group-hover:opacity-75"
                onClick={() => addToWishListHandler(product._id)}
              >
                <HeartOutlined style={{ fontSize: "15px" }} />
              </button>
              <button
                className="product_action-icon group-hover:opacity-75"
                onClick={() => quickView(product)}
              >
                <EyeOutlined style={{ fontSize: "15px" }} />
              </button>
            </div>
          </div>
        </div>
        <h3
          className="mt-4 text-sm text-gray-700 product-card-title"
          onClick={() => productDetail(product)}
        >
          {product.title}
        </h3>
        <p className="mt-1 text-lg font-medium text-gray-900">
          {product.price.currencyCode === "INC" && "RS "}
          {product.price.sellingPrice}
        </p>
      </div>
    ));
  };
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>

      <div className="product-container">{productRender()}</div>
    </div>
  );
};

export default ProductCard;
