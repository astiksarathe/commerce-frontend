import React from 'react';
import { Collapse } from "antd";
import './footerCollapse.scss';

const FooterCollapse = ({ footerList }) => {
  const getListItem = (item) => (
    <li className="footer__menu-item" key={item.id}>
      {item.link ? (
        <a className="footer__menu-link" href={item.link}>
          {item.label}
        </a>
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

  const items = footerList.map((item) => ({
    key: item.id,
    label: item.label,
    children: getFooterMenuList(item),
  }));

  return (
    <Collapse expandIconPosition={"end"} accordion items={items} bordered={false} ghost={true} />
  );
};

export default FooterCollapse;
