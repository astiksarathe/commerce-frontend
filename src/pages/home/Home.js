import React, { useEffect } from "react";
import "./home.scss";
import ProductCard from "../../components/ProductCard";
import { useDispatch } from "react-redux";
import { getProduct } from "../../features/product";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  return <ProductCard />;
};

export default Home;
