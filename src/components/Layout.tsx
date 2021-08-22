import * as React from "react";
import { ReactChild } from "react";
import Footer from "./footer/Footer";

type LayoutProps = {
  children: ReactChild[] | ReactChild;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="grid auto-rows-min place-items-center px-5 md:px-10 min-h-screen min-w-screen bg-background">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
