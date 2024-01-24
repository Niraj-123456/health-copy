import { ReactNode } from "react";
import classNames from "classnames";

type HpAvatarProps = {
  src?: string;
  alt?: string;
  children?: ReactNode;
  size?: "small" | "large" | "";
};

const HpAvatar = (props: HpAvatarProps) => {
  const { src, alt, children, size } = props;
  return src ? (
    <img
      className={classNames(
        size === "small"
          ? "h-8 w-8"
          : size === "large"
          ? "w-12 h-12"
          : "h-10 w-10",
        "inline-block rounded-full"
      )}
      src={src}
      alt={alt ? alt : ""}
    />
  ) : children ? (
    <span
      className={classNames(
        size === "small"
          ? "h-8 w-8"
          : size === "large"
          ? "w-12 h-12"
          : "h-10 w-10",
        "inline-flex items-center justify-center rounded-full bg-gray-500"
      )}
    >
      <span className="text-xs font-medium leading-none text-white">
        {children}
      </span>
    </span>
  ) : (
    <span
      className={classNames(
        size === "small"
          ? "h-8 w-8"
          : size === "large"
          ? "w-12 h-12"
          : "h-10 w-10",
        "inline-block  overflow-hidden rounded-full bg-gray-100"
      )}
    >
      <svg
        className="h-full w-full text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </span>
  );
};

export default HpAvatar;
