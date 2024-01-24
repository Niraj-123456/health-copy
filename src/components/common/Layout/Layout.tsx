import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <div
      style={{
        maxWidth: 650,
        minHeight: "calc(100vh - 65px)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "auto",
        background: "rgb(247, 249, 254)",
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
