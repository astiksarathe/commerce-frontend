import Footer from "./pages/footer";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { CartDrawer } from "./components/cart";
import QuickView from "./components/quickView/";
import Checkout from "./components/checkout";

function App() {
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
