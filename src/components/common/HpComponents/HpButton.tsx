import React, { ReactNode } from "react";
import classNames from "classnames";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: string;
  variant?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
}

const HpButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { size, variant, startIcon, children, className, endIcon, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        {...props}
        className={classNames(
          size === "small"
            ? "px-2.5 py-1.5 text-xs"
            : size === "large"
            ? "px-3.5 py-2.5 text-sm"
            : "px-3 py-2 text-sm",
          variant === "contained"
            ? "bg-indigo-600 text-white hover:bg-indigo-500"
            : variant === "outlined"
            ? "ring-1 ring-inset ring-gray-300 hover:bg-gray-50 text-gray-900"
            : "text-indigo-600 shadow-sm hover:bg-indigo-100",
          className,
          "inline-flex items-center gap-x-1.5 rounded font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        )}
      >
        {startIcon && startIcon}
        {children}
        {endIcon && endIcon}
      </button>
    );
  }
);

HpButton.displayName = "HpButton";

export default HpButton;
