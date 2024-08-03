import React from "react";
import BreadCrumb from "../../components/breadcrumb/Breadcrumb";
import ProductCard from "../../components/ProductCard";

const ProductList = () => {
  return (
    <>
      <BreadCrumb title={"shop"} />
      <div>
        <ProductCard />
      </div>
    </>
  );
};

export default ProductList;
