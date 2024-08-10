import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Skeleton, Space } from "antd";
import {
  EyeOutlined,
  HeartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

import {
  productQuickView,
  quickViewModelHandler,
} from "../../features/product";
import { getProduct } from "../../features/product/productSlice";
import { addToCart } from "../../features/cart/";
import { addToWishlist } from "../../features/wishlist";

import { formatCurrency } from "../../utils/common";

import "./productCard.scss";

const ProductCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { productList, isLoading } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  const addToCartHandler = (product) => {
    dispatch(
      addToCart({ ...product, quantity: 1, variantName: "", variantSKU: "" })
    );
  };

  const addToWishListHandler = (productId) => {
    dispatch(addToWishlist(productId));
  };

  const quickView = (product) => {
    dispatch(productQuickView(product));
    dispatch(quickViewModelHandler(true));
  };
  const productDetail = (product) => {
    navigate(`/shop/${product.url}`);
  };

  const productRender = () => {
    return productList.map((product) => (
      <div className="group" key={product._id}>
        <div className="relative aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src="https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
          <div className="absolute bottom-1 w-full">
            <div className="flex justify-center gap-3 my-1">
              <button
                className="bg-white size-9 rounded-full hover:bg-gray-50 hover:rounded-full"
                onClick={() => addToCartHandler(product)}
              >
                <ShoppingOutlined style={{ fontSize: "15px" }} />
              </button>
              <button
                className="bg-white size-9 rounded-full hover:bg-gray-50 hover:rounded-full"
                onClick={() => addToWishListHandler(product._id)}
              >
                <HeartOutlined style={{ fontSize: "15px" }} />
              </button>
              <button
                className="bg-white size-9 rounded-full hover:bg-gray-50 hover:rounded-full"
                onClick={() => quickView(product)}
              >
                <EyeOutlined style={{ fontSize: "15px" }} />
              </button>
            </div>
          </div>
        </div>
        <button
          type="button"
          className="bg-transparent"
          onClick={() => productDetail(product)}
        >
          <h3 className="mt-4 text-sm text-gray-700 product-card-title line-clamp-1">
            {product.title}
          </h3>
        </button>
        <p className="text-sm text-gray-900 md:font-medium md:text-lg md:mt-1">
          {formatCurrency(product.price.sellingPrice)}
        </p>
      </div>
    ));
  };
  const productSkelton = () => {
    return Array.from({ length: 20 }).map((_, ind) => (
      <React.Fragment key={ind}>
        <Space className="product_card_skeleton">
          <Skeleton.Image active />
          <Skeleton.Button active size="small" block />
          <Skeleton.Button active size="small" block />
        </Space>
      </React.Fragment>
    ));
  };

  return (
    <div className="container mx-auto p-2 py-10 sm:py-14">
      <h2 className="sr-only">Products</h2>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-5">
        {isLoading ? productSkelton() : productRender()}
      </div>
    </div>
  );
};

export default ProductCard;
