import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { FloatButton } from "antd";

import Footer from "./pages/footer";

import { setCart } from "./features/cart";

import Header from "./components/header";
import Checkout from "./components/checkout";
import QuickView from "./components/quickView";
import { CartDrawer } from "./components/cart";
import BottomBar from "./components/bottom-bar/BottomBar";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

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
