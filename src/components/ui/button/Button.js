import React from "react";
import { LoadingOutlined } from "@ant-design/icons";

const ButtonType = {
  text: "text",
  link: "link",
  primary: "primary",
  custom: "custom",
};

const Button = ({
  children,
  onClick,
  type = "",
  className = "",
  loading = false,
  disabled = false,
  isLink = false,
  ...props
}) => {
  const getClass = () => {
    if (type === ButtonType.custom) {
      return className;
    }
    if (type === ButtonType.text) {
      return `bg-transparent text-white ${className}`;
    }
    if (type === ButtonType.link) {
      return `h-10 w-full border border-solid border-zinc-900 my-3 flex items-center justify-center hover:bg-zinc-900 hover:text-white ${className}`;
    }
    return `h-10 w-full bg-zinc-900 text-zinc-50 my-3 flex items-center justify-center hover:bg-zinc-700 ${className}`;
  };
  return (
    <>
      <button className={getClass()} onClick={onClick} {...props}>
        {loading ? (
          <div className="mr-3">
            <LoadingOutlined className="transition-transform duration-300 ease-in-out" />
          </div>
        ) : (
          ""
        )}
        {children}
      </button>
    </>
  );
};

export default Button;
