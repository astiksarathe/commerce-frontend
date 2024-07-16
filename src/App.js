import Footer from "./pages/footer";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { CartDrawer } from "./components/cart";
import QuickView from "./components/quickView/";

function App() {
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
