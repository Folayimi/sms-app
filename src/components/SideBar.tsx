import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdLocalActivity } from "react-icons/md";
import {
  UserGroupOutline,
  UsersOutline,
  LocationMarkerOutline,
  ClockOutline,
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
  return (
    <a
      href={route}
      className={`group w-full pl-11 py-[10px] text-[14px] flex items-center rounded-[15px] gap-[20px] ${
        routePath ===
        title.replaceAll(" ", "-").replaceAll("&", "").toLowerCase()
          ? "bg-[#0187FF] text-white"
          : "hover:text-[#0187FF]"
      } my-3`}
    >
      {icon}
      <div className="flex items-center">{title}</div>
    </a>
  );
};

interface Link {
  title: string;
  icon: any;
}

const SideBar: React.FC = () => {
  const accountLinks: Link[] = [
    {
      title: "Profile",
      icon: (
        <UserGroupOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
    {
      title: "Receive SMS",
      icon: (
        <UsersOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
  ];

  const managementLinks: Link[] = [
    {
      title: "Top up your balance",
      icon: (
        <UserGroupOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
    {
      title: "Earn money on SMS",
      icon: (
        <UsersOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
    {
      title: "Instructions",
      icon: (
        <LocationMarkerOutline
          size={20}
          onPointerEnterCapture={() => {}}
          onPointerLeaveCapture={() => {}}
        />
      ),
    },
    { title: "Feedback", icon: <MdLocalActivity size={20} /> },
  ];

  const [routePath, setRoutePath] = useState<string>("Overview");

  const getPageRoute = () => {
    let route;
    const currentPath = window.location.pathname;
    const parts = currentPath.split("/"); // Split the URL by "/"
    route = parts[2];
    setRoutePath(route);
    console.log(route);
  };

  useEffect(() => {
    getPageRoute();
  }, []); // Re-run the effect when the pathname changes

  return (
    <div
      className="mt-[83px] p-[20px] bg-[#E3F0FF] text-black w-[300px] overflow-y-auto"
      style={{ height: "calc(100vh - 83px)" }}
    >
      <LinkBar
        title="Overview"
        routePath={routePath}
        icon={
          <ClockOutline
            size={20}
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
        }
      />
      <div className="w-full flex flex-col">
        <h1 className="ml-11 text-[10px] py-[10px] font-[700]">ACCOUNT</h1>
        <div className="w-full cflexss">
          {accountLinks.map((link, i) => (
            <LinkBar
              key={i}
              title={link.title}
              routePath={routePath}
              icon={link.icon}
            />
          ))}
        </div>
        <h1 className="ml-11 text-[10px] py-[10px] font-[700]">MANAGEMENT</h1>
        <div className="w-full cflexss">
          {managementLinks.map((link, i) => (
            <LinkBar
              key={i}
              title={link.title}
              routePath={routePath}
              icon={link.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
