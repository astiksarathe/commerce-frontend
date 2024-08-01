import React from "react";
import { Link } from "react-router-dom";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="checkout_main_footer" key={1}>
      <div className="checkout_main_footer_direct_link">
        <Link>T&C</Link> <span>|</span>
        <Link>Privacy Policy</Link> <span>|</span>
        <Link>Refund Policy</Link> <span>|</span>
        <Link>Shipping Policy</Link>
      </div>
      <div className="checkout_main_footer_rights">Powered By EverydayGadget</div>
    </footer>
  );
};

export default Footer;
