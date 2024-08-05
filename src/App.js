import Footer from "./pages/footer";
import Header from "./components/header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { FloatButton } from "antd";

import ScrollToTop from "./components/scrollToTop/ScrollToTop";
import { CartDrawer } from "./components/cart";
import { setCart } from "./features/cart";
import QuickView from "./components/quickView/";
import Checkout from "./components/checkout";
import BottomBar from "./components/bottom-bar/BottomBar";

import "./animation.scss";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCart());
  }, [dispatch]);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Outlet />
      <Checkout />
      <CartDrawer />
      <QuickView />
      <Checkout />
      <Footer />
      <FloatButton.BackTop className="bottom-20 right-2 md:bottom md:right-2" />
      <BottomBar />
    </>
  );
}

export default App;
