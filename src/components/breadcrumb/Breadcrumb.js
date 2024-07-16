import React from "react";
import "./breadcrumb.scss";
import { Link, useLocation } from "react-router-dom";
import { RightOutlined } from "@ant-design/icons";
import { capitalizeFirstLetters } from "../../utils/common";
const BreadCrumb = ({ title }) => {
  const location = useLocation();
  const separateEntity = location?.pathname?.split("/").filter(Boolean);

  if (separateEntity.length === 0) return <></>;
  // Remove last element
  separateEntity.pop();
  return (
    <div className="breadcrumb-container">
      <div>
        <h3 className="breadcrumb-page-title">{capitalizeFirstLetters(title)}</h3>
        <div className="breadcrumb-links">
          <Link to="/">Home</Link>
          {separateEntity.map((page, index) => {
            const path = `/${separateEntity.slice(0, index + 1).join("/")}`;
            return (
              <React.Fragment key={path}>
                <RightOutlined style={{ fontSize: "12px", margin: "0 5px" }} />
                <Link to={path}>{page}</Link>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default BreadCrumb;
