import React, { useState } from "react";
import "./readMoreToggle.scss";
import { Link } from "react-router-dom";

const ReadMoreToggle = ({ children }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className={`read_more_wrapper ${isExpanded ? "expanded" : ""}`} id="read_more_container">
      <div className="read_more_content_wrapepr">{children}</div>
      <button
        className="expand_toggle_btn"
        type="button"
        onClick={() => {
          setIsExpanded((cur) => !cur);
        }}
      >
        {isExpanded ? <span>Show less</span> : <span>Read more</span>}
      </button>
    </div>
  );
};

export default ReadMoreToggle;