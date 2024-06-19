import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

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

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      {
        path: "cart",
        element: <Cart />,
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
    ],
  },
]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
