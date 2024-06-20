import Footer from "./pages/footer";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { CartDrawer } from "./components/cart";
import QuickView from "./components/quickView/";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProduct } from "./features/product/productSlice";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <CartDrawer />
      <QuickView />
      <Footer />
    </>
  );
}

export default App;
