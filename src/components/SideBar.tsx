import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdLocalActivity, MdWallet, MdSms, MdEvent } from "react-icons/md";
import {
  UserGroupOutline,
  UsersOutline,
  LocationMarkerOutline,
  ClockOutline,
  PhoneOutline,
  CalendarOutline,
  Phone,
} from "heroicons-react";

interface LinkBarProps {
  title: string;
  routePath: string;
  icon: any;
}

const LinkBar: React.FC<LinkBarProps> = ({ title, routePath, icon }) => {
  const route = `/dashboard/${title
    .replaceAll(" ", "-")
    .replaceAll("&", "")
    .toLowerCase()}`;
  const isActive =
    routePath === title.replaceAll(" ", "-").replaceAll("&", "").toLowerCase();

  return (
    <a
      href={route}
      className={`flex items-center gap-3 px-4 py-3 rounded-[12px] ${
        isActive ? "bg-[#8B5CF6]/10 text-[#8B5CF6]" : "hover:bg-gray-800"
      }`}
    >
      {icon}
      <span>{title}</span>
      {title === "New SMS" && (
        <span className="text-xs px-2 py-0.5 bg-blue-500/20 text-blue-400 rounded-full">
          Buy
        </span>
      )}
      {title === "Rent Numbers" && (
        <span className="text-xs px-2 py-0.5 bg-green-500/20 text-green-400 rounded-full">
          New
        </span>
      )}
    </a>
  );
};

interface Link {
  title: string;
  icon: any;
}

interface SideBarProps {
  setHidden: (hidden: boolean) => void;
  hidden: boolean;
}

const SideBar = ({ hidden, setHidden }: SideBarProps) => {
  const accountLinks: Link[] = [
    {
      title: "Overview",
      icon: (
        <UserGroupOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
    {
      title: "New SMS",
      icon: <MdSms size={20} />,
    },    
    {
      title: "Profile",
      icon: (
        <UsersOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
    {
      title: "Subscription",
      icon: (
        <CalendarOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
    {
      title: "Earn Money On SMS",
      icon: <MdWallet size={20} />,
    },
    {
      title: "Instructions",
      icon: <MdEvent size={20} />,
    },
    {
      title: "Blogs",
      icon: <MdEvent size={20} />,
    },
  ];

  const [routePath, setRoutePath] = useState<string>("overview");

  const getPageRoute = () => {
    const currentPath = window.location.pathname;
    const parts = currentPath.split("/");
    const route = parts[2]?.toLowerCase() || "overview";
    setRoutePath(route);
  };

  useEffect(() => {
    getPageRoute();
    console.log(hidden);
  }, []);

  return (
    <aside
      className={`mt-0 fixed top-[50px] lg:top-0 z-25 lg:left-[0px] left-[${
        hidden ? "-100vw" : "0px"
      }] lg:relative bg-[#101827] backdrop-blur-[12px] border-r border-gray-800 h-[calc(100vh-50px)] lg:h-[100vh] w-[270px] overflow-y-auto transition-all duration-300`}
    >
      <div className="p-4 flex items-center gap-3">
        <span className="text-2xl text-[#8B5CF6]">SET LOGO</span>
      </div>
      <nav className="mt-8">
        <div className="px-3 space-y-1">
          {accountLinks.map((item, index) => {
            return (
              <LinkBar
                key={index}
                title={item.title}
                routePath={routePath}
                icon={item.icon}
              />
            );
          })}
        </div>
      </nav>
    </aside>
  );
};

export default SideBar;
