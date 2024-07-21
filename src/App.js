import Footer from "./pages/footer";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { CartDrawer } from "./components/cart";
import QuickView from "./components/quickView/";
import Checkout from "./components/checkout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCart } from "./features/cart";

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
    </>
  );
}

export default App;
