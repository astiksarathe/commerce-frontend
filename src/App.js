import Footer from "./pages/footer";
import Header from "./components/header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { FloatButton } from "antd";

import { CartDrawer } from "./components/cart";
import { setCart } from "./features/cart";
import QuickView from "./components/quickView/";
import Checkout from "./components/checkout";

import "./animation.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCart());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />
      <Checkout />
      <CartDrawer />
      <QuickView />
      <Checkout />
      <Footer />
      <FloatButton.BackTop />
    </>
  );
}

export default App;
