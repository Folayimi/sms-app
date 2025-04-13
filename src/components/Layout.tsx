"use client";

import NavBar from "./NavBar";
import Nav from "./Nav";
import SideBar from "./SideBar";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [showNav, setShowNav] = useState(false);
  const pathname = usePathname();
  const isDashboard = pathname?.includes("/dashboard");
  return (
    <>
      {isDashboard ? (
        <>
          <Nav
            hidden={hidden}
            setHidden={setHidden}
            showNav={showNav}
            setShowNav={setShowNav}
          />
          <div className="flex flex-row h-screen bg-gray-100">
            <SideBar hidden={hidden} setHidden={setHidden} />
            <div className="flex-1 overflow-y-auto dark">{children}</div>
          </div>
        </>
      ) : (
        <>
          <NavBar active={0} background="#E3F0FF" />
          <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default Layout;
