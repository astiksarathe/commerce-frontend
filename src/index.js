import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "./index.scss";

// React Redux
import { Provider } from "react-redux";
import store from "./app/store";

// React Router Dom
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// COMPONENT IMPORT

import App from "./App";
import Cart from "./pages/cart";
import WishList from "./pages/wishlist";

import PrivacyPolicy from "./pages/privacyPolicy";
import ContactUs from "./pages/contactUs";
import ExchangeRequest from "./pages/exchangeRequest";
import ReturnRefundPolicy from "./pages/returnRefundPolicy";
import ShippingDeliveryTerms from "./pages/shippingDeliveryTerms";
import ReturnRequest from "./pages/returnRequest";
import TermsAndConditions from "./pages/termsAndConditions";
import Search from "./pages/search/Search";
import Home from "./pages/home";
import ProductDetails from "./pages/productDetails/";
import ProductList from "./pages/productList/ProductList";

import NotificationProvider from "./context/NotificationProvider";

import MyAccount from "./pages/profile/my-account";
import Dashboard from "./pages/profile/dashboard";
import Addresses from "./pages/profile/addresses";
import Orders from "./pages/profile/orders";
import AccountDetails from "./pages/profile/account-details";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "shop/",
        element: <ProductList />,
      },
      {
        path: "shop/:url",
        element: <ProductDetails />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "exchange-request",
        element: <ExchangeRequest />,
      },
      {
        path: "return-refund-policy",
        element: <ReturnRefundPolicy />,
      },
      {
        path: "shipping-delivery-terms",
        element: <ShippingDeliveryTerms />,
      },
      {
        path: "return-request",
        element: <ReturnRequest />,
      },
      {
        path: "terms-and-conditions",
        element: <TermsAndConditions />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "wishlist",
        element: <WishList />,
      },
      {
        path: "my-account",
        element: <Dashboard />,
        children: [
          {
            path: "",
            element: <MyAccount />,
          },
          {
            path: "addresses",
            element: <Addresses />,
          },
          {
            path: "account-details",
            element: <AccountDetails />,
          },
          {
            path: "orders",
            element: <Orders />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: () => <>Not FOUND</>,
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NotificationProvider>
        <RouterProvider router={router} />
      </NotificationProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
