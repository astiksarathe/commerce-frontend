import Footer from "./pages/footer";
import Header from "./components/header";
import { Outlet } from "react-router-dom";
import { CartDrawer } from "./components/cart";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <CartDrawer />
      <Footer />
    </>
  );
}

export default App;
