import { Menu } from "@headlessui/react";
import classNames from "classnames";
import React, { ReactNode } from "react";

type MenuItemProps = {
  children: ReactNode;
};

const HpMenuItem: React.FC<MenuItemProps> = ({ children }) => {
  return (
    <Menu.Item>
      {({ active }) => (
        <a
          href="#"
          className={classNames(
            active ? "bg-gray-100 text-gray-900" : "text-gray-700",
            "block px-4 py-2 text-sm"
          )}
        >
          {children}
        </a>
      )}
    </Menu.Item>
  );
};

export default HpMenuItem;
