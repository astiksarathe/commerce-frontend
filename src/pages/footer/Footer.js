import React from 'react';
import { Link } from "react-router-dom";
import FooterCollapse from './FooterCollapse';
import './footer.scss';

const Footer = () => {
  const footerList = [
    {
      id: 1,
      label: "EXPLORE",
      items: [
        { id: 1, label: "Our Story", link: "/" },
        { id: 2, label: "Contact Us", link: "/" },
        { id: 3, label: "Exchange Request", link: "/" },
        { id: 4, label: "Return Request", link: "/" },
      ],
    },
    {
      id: 2,
      label: "TERM POLICY",
      items: [
        { id: 1, label: "Privacy Policy", link: "/" },
        { id: 2, label: "Return & Refund Policy", link: "/" },
        { id: 3, label: "Shipping & Delivery Terms", link: "/" },
        { id: 4, label: "Terms and Conditions", link: "/" },
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
    <li className="footer__menu-item" key={item.id}>
      {item.link ? (
        <Link className="footer__menu-link" to={item.link}>
          {item.label}
        </Link>
      ) : (
        <span className="footer__menu-text">{item.label}</span>
      )}
    </li>
  );

  const getFooterMenuList = (section) => (
    <ul className="footer__menu-list">
      {section.items.map((item) => getListItem(item))}
    </ul>
  );

  const getFooterMenu = () => (
    <>
      {footerList.map((section) => (
        <div key={section.id}>
          <h5 className="footer__menu-title">{section.label}</h5>
          {getFooterMenuList(section)}
        </div>
      ))}
    </>
  );

  return (
    <footer className="footer">
      <div className="footer__services-overview">
        <div className="container">
          <div className="footer__services-list">
            <h6 className="footer__service-item">FAST DELIVERY SERVICE</h6>
            <h6 className="footer__service-item">AUTHENTIC PRODUCTS</h6>
            <h6 className="footer__service-item">ONLINE SUPPORT 24/7</h6>
            <h6 className="footer__service-item">SECURE PAYMENTS</h6>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="footer__menu">{getFooterMenu()}</div>
        <div className="footer__menu-mobile">
          <FooterCollapse footerList={footerList} />
        </div>

        <div className="footer__payment-option">
          <h5>Complete Safe and Secure Payment Methods</h5>
          <div className="footer__payment-options-image">
            <img src="/assets/payment-links.png" alt="payment options" />
          </div>
        </div>
        <div className="footer__copy-write">
          <h5>© EverydayGadget. All Right Reserved.</h5>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
