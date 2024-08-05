import React from "react";
import { Link } from "react-router-dom";

import { Collapse } from "antd";

const Footer = () => {
  const footerList = [
    {
      id: 1,
      label: "EXPLORE",
      items: [
        { id: 1, label: "Our Story", link: "/" },
        { id: 2, label: "Contact Us", link: "/contact-us" },
        { id: 3, label: "Exchange Request", link: "/exchange-request" },
        { id: 4, label: "Return Request", link: "/return-request" },
      ],
    },
    {
      id: 2,
      label: "TERM POLICY",
      items: [
        { id: 1, label: "Privacy Policy", link: "/privacy-policy" },
        { id: 2, label: "Return & Refund Policy", link: "/return-refund-policy" },
        { id: 3, label: "Shipping & Delivery Terms", link: "/shipping-delivery-terms" },
        { id: 4, label: "Terms and Conditions", link: "/terms-and-conditions" },
      ],
    },
    {
      id: 3,
      label: "CONTACT",
      items: [
        { id: 1, label: "info@herin.co.in", type: "text" },
        { id: 2, label: "(Monday to Friday - 10AM to 6PM)", type: "text" },
        { id: 3, label: "We’re located in New Delhi, India", type: "text" },
      ],
    },
    {
      id: 4,
      label: "FOLLOW US",
      items: [
        { id: 1, label: "Facebook", link: "/" },
        { id: 2, label: "Instagram", link: "/" },
      ],
    },
  ];

  const getListItem = (item) => (
    <li className="mb-4" key={item.id}>
      {item.link ? (
        <Link className="text-sm text-black no-underline" to={item.link}>
          {item.label}
        </Link>
      ) : (
        <span className="text-sm text-black no-underline">{item.label}</span>
      )}
    </li>
  );

  const getFooterMenuList = (section) => (
    <ul className="list-none pl-2 md:pl-0">{section.items.map((item) => getListItem(item))}</ul>
  );

  const getFooterMenu = () => (
    <>
      {footerList.map((section) => (
        <div key={section.id}>
          <h5 className="font-semibold text-base uppercase tracking-wide mb-6 relative pb-1">
            {section.label}
          </h5>
          {getFooterMenuList(section)}
        </div>
      ))}
    </>
  );
  const mobileFooterItems = footerList.map((item) => ({
    key: item.id,
    label: item.label,
    children: getFooterMenuList(item),
  }));

  return (
    <footer className="pb-16 pt-4 sm:py-4">
      <div className="min-h-12 bg-black py-3 relative mb-6">
        <div className="container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-4">
            <h6 className="text-xs p-2 uppercase text-center font-li text-white m-0">
              FAST DELIVERY SERVICE
            </h6>
            <h6 className="text-xs p-2 uppercase text-center font-li text-white m-0">
              AUTHENTIC PRODUCTS
            </h6>
            <h6 className="text-xs p-2 uppercase text-center font-li text-white m-0">
              ONLINE SUPPORT 24/7
            </h6>
            <h6 className="text-xs p-2 uppercase text-center font-li text-white m-0">
              SECURE PAYMENTS
            </h6>
          </div>
        </div>
      </div>

      <div className="container m-auto">
        <div className="hidden md:grid md:grid-cols-4 gap-3">{getFooterMenu()}</div>
        <div className="px-2 md:hidden">
          <Collapse
            className="pl-0"
            expandIconPosition={"end"}
            accordion
            items={mobileFooterItems}
            bordered={false}
            ghost={true}
          />
        </div>

        <div className="max-w-full grid justify-center border-t overflow-hidden py-5 border-b">
          <h5 className="w-fit m-auto font-medium text-sm mb-5 leading-normal">
            Complete Safe and Secure Payment Methods
          </h5>
          <div className="w-auto h-4  sm:w-full">
            <img src="/assets/payment-links.png" alt="payment options" />
          </div>
        </div>
        <div className="pt-6">
          <h5 className="w-fit m-auto font-medium text-sm mb-5 leading-normal">
            © EverydayGadget. All Right Reserved.
          </h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
