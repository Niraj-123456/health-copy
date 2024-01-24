import classNames from "classnames";
import React, { ReactNode } from "react";

type IconButtonProps = {
  children: ReactNode;
  size?: string;
  onClick?: () => void;
  color?: "primary" | "secondary" | "";
};

const HpIconButton: React.FC<IconButtonProps> = (props) => {
  const { children, size, color, onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        size === "small" ? "p-1" : size === "large" ? "p-3" : "p-1.5",
        color === "primary"
          ? "bg-indigo-600 text-white"
          : color === "secondary"
          ? "bg-indigo-600 text-white"
          : "text-black bg-indigo-50",
        "rounded-full flex shadow-sm hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      )}
    >
      {children}
    </button>
  );
};

export default HpIconButton;
