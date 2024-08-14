import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  MenuOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Badge } from "antd";

import { openSideMenuBar } from "../../features/sideMenuBar";
import { cartDrawerHandler } from "../../features/cart";
import { openAuthDrawer } from "../../features/authDrawer";

import SideMenuBar from "../sideMenuBar";
import AuthDrawer from "../authDrawer";
import Search from "./search/Search";

const Header = () => {
  const navigate = useNavigate();
  const { cartList } = useSelector((state) => state.cart);
  const { accessToken } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const cartHandler = (e) => {
    e.preventDefault();
    dispatch(cartDrawerHandler(true));
  };

  const authHandler = (e) => {
    e.preventDefault();
    if (accessToken) {
      navigate("/my-account");
    } else {
      dispatch(openAuthDrawer());
    }
  };

  const backToHome = (e) => {
    e.preventDefault();
    navigate("/");
  };
  return (
    <>
      <header className="z-50 bg-zinc-900 shadow-card overflow-x-hidden relative">
        <div className="border-b border-zinc-700 h-9 flex items-center">
          <div className="container m-auto">
            <p className="text-sm tracking-wider text-zinc-50 text-center md:text-start">
              Free shipping on orders over ₹500
            </p>
          </div>
        </div>
        <div className="container m-auto py-5 bg-zinc-900 shadow-card hidden md:block">
          <div className="h-11 flex flex-1 ">
            <div className="flex mr-10 cursor-pointer" onClick={backToHome}>
              <img src="/assets/logo-herin.png" alt="logo" />
            </div>
            <div className=" hidden md:flex md:items-center md:justify-center md:flex-grow">
              <div className="w-full">
                <Search />
              </div>
            </div>
            <div className="flex">
              <div className=" hidden  xl:flex xl:items-center xl:px-9 xl:cursor-pointer ">
                <div>
                  <p className="tracking-wider text-sm text-zinc-400">
                    Country/region
                  </p>
                  <p className="tracking-wider text-zinc-50">India INR</p>
                </div>
              </div>
              <div className="flex items-center md:pl-24 lg:px-9 cursor-pointer lg:border-l lg:border-r lg:border-zinc-700">
                <div className="hidden lg:block" onClick={authHandler}>
                  <p className="tracking-wider text-sm text-zinc-400">
                    {accessToken ? "Hello" : "Login / Signup"}
                  </p>
                  <p className="tracking-wider text-zinc-50">My account</p>
                </div>
                <div className="block lg:hidden" onClick={authHandler}>
                  <UserOutlined className="text-2xl lg:text-3xl text-zinc-50" />
                </div>
              </div>
              <div className="flex items-center  md:pl-2  pl-9 cursor-pointer">
                <div className="flex gap-3 items-center" onClick={cartHandler}>
                  <Badge count={cartList.length} color="black">
                    <ShoppingCartOutlined className="text-2xl lg:text-3xl text-zinc-50" />
                  </Badge>
                  <p className="tracking-wider text-zinc-50 hidden lg:block">
                    Cart
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block shadow-card md:hidden">
          <div className="px-2 pt-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div>
                <MenuOutlined
                  onClick={() => {
                    dispatch(openSideMenuBar());
                  }}
                  className="text-2xl text-zinc-50"
                />
              </div>
              <div className="h-8">
                <img
                  className="h-8 w-auto"
                  src="/assets/logo-herin.png"
                  alt="log"
                />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div onClick={authHandler}>
                <UserOutlined className="text-2xl text-zinc-50" />
              </div>
              <div onClick={cartHandler}>
                <Badge count={cartList.length} color="black">
                  <ShoppingCartOutlined className="text-2xl text-zinc-50" />
                </Badge>
              </div>
            </div>
          </div>
          <div className="px-2 py-5">
            <Search />
          </div>
        </div>
      </header>

      <nav className="bg-zinc-50 shadow-card hidden md:block">
        <div className="container m-auto">
          <ul>
            <li className="text-zinc-500 inline-block mr-9 py-4 hover:text-zinc-900">
              <Link to={"/shop"}>All Products</Link>
            </li>
            <li className="text-zinc-500 inline-block mr-9 py-4 hover:text-zinc-900">
              <Link to={"/shop"}>New Arrivals</Link>
            </li>
            <li className="text-zinc-500 inline-block mr-9 py-4 hover:text-zinc-900">
              <Link to={"/shop"}>Sales</Link>
            </li>
            <li className="text-zinc-500 inline-block mr-9 py-4 hover:text-zinc-900">
              <Link to={"/shop"}>All Collections</Link>
            </li>
            <li className="text-zinc-500 inline-block mr-9 py-4 hover:text-zinc-900">
              <Link to={"/shop"}>Information</Link>
            </li>
            <li className="text-zinc-500 inline-block mr-9 py-4 hover:text-zinc-900">
              <Link to={"/contact-us"}>Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
      <SideMenuBar />
      <AuthDrawer />
    </>
  );
};

export default Header;
