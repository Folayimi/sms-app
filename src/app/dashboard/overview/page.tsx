"use client";

import StatCard from "@/components/StatCard";
import React, { useEffect, useState } from "react";
import database from "@/components/icons/database.svg";
import userStat from "@/components/icons/user_stat.svg";
import partnerStat from "@/components/icons/partner_stat.svg";
import tripStat from "@/components/icons/trip_stat.svg";
import { ChartComponent } from "@/components/ChartComponent";
import { Card } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import {
  TrendingUp,
  TrendingDown,
  ShoppingCart,
  Users,
  Package,
  Star,
  MessageCircle,
  Activity,
  Cpu,
} from "lucide-react";

type AnalysisData = {
  totalNoOfBasicUsers?: number;
  totalRoutesCreated?: number;
};

type Stat = {
  title: string;
  value: string;
  change: string;
  increased: boolean;
  icon: any;
};

type UserData = {
  email?: string;
  phonenumber?: string;
};

type TableData = {
  payload: Record<string, UserData>;
};

const tableHead = {
  username: "Username",
  phonenumber: "Phone number",
  email: "Email address",
  action: "Action",
};

const Overview: React.FC = () => {
  const router = useRouter();
  const [analysis, setAnalysis] = useState<AnalysisData>({});
  const [userToken, setUserToken] = useState<string>("");
  const [adminData, setAdminData] = useState<{
    firstname?: string;
    lastname?: string;
  }>({});

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dataToShow, setDataToShow] = useState<number>(10);
  const [rawData, setRawData] = useState<UserData[]>([]);

  const overviewData: Stat[] = [
    {
      title: "Total Sales",
      value: "$24,560",
      change: "+12.5%",
      increased: true,
      icon: <ShoppingCart className="w-8 h-8 text-purple-400" />,
    },
    {
      title: "New Users",
      value: "3,120",
      change: "-4.8%",
      increased: false,
      icon: <Users className="w-8 h-8 text-green-400" />,
    },
    {
      title: "Orders Processed",
      value: "8,431",
      change: "+6.2%",
      increased: true,
      icon: <Package className="w-8 h-8 text-yellow-400" />,
    },
    {
      title: "Customer Reviews",
      value: "1,245",
      change: "-2.1%",
      increased: false,
      icon: <Star className="w-8 h-8 text-purple-400" />,
    },
  ];

  const quickActions = [
    {
      title: "Add New User",
      icon: <Users className="w-6 h-6 text-blue-400" />,
      action: () => router.push("/users/add"),
    },
    {
      title: "View SMS Logs",
      icon: <MessageCircle className="w-6 h-6 text-green-400" />,
      action: () => router.push("/sms/logs"),
    },
    {
      title: "Manage Routes",
      icon: <Activity className="w-6 h-6 text-yellow-400" />,
      action: () => router.push("/routes/manage"),
    },
  ];

  useEffect(() => {
    // Fetch user data logic here
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-[#121212] mt-[75px] h-[calc(100vh-75px)] text-white px-10 pt-12 overflow-y-auto">
      {!userToken && (
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-[#BB86FC]">
                Hi, {adminData?.firstname || "John"}{" "}
                {adminData?.lastname || "Doe"}
              </h1>
              <p className="text-lg text-gray-400">
                Here is your Activity Overview
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewData.map((data, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] rounded-2xl p-6 flex flex-col items-start shadow-lg transition transform hover:scale-105"
                style={{
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div className="text-3xl">{data.icon}</div>
                <h3 className="text-lg font-medium text-gray-200 mt-2">
                  {data.title}
                </h3>
                <p className="text-2xl font-bold mt-1">{data.value}</p>
                <div
                  className={`flex items-center text-sm font-medium mt-2 ${
                    data.increased ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {data.increased ? (
                    <TrendingUp className="w-5 h-5 mr-1" />
                  ) : (
                    <TrendingDown className="w-5 h-5 mr-1" />
                  )}
                  {data.change}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="my-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <div
                key={index}
                className="bg-[#1A1A1A] p-6 rounded-xl flex items-center justify-between shadow-md hover:scale-105 transition transform"
                style={{ backdropFilter: "blur(8px)" }}
                onClick={action.action}
              >
                <div className="flex items-center gap-4">
                  {action.icon}
                  <span className="text-lg font-semibold text-white">
                    {action.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            <ChartComponent
              title="Total Active Users"
              description="January - June 2024"
              comment1="Trending up by 5.2% this month"
              comment2="Showing total visitors for the last 6 months"
              trending={<TrendingUp className="h-4 w-4 text-green-400" />}
            />
            <ChartComponent
              title="Total Users"
              description="January - June 2024"
              comment1="Trending up by 10.5% this month"
              comment2="Showing total users"
              trending={<TrendingUp className="h-4 w-4 text-green-400" />}
            />
            <ChartComponent
              title="Total Payments"
              description="January - June 2024"
              comment1="Trending up by 7.2% this month"
              comment2="Showing total payments for the last 3 months"
              trending={<TrendingUp className="h-4 w-4 text-green-400" />}
            />
            <ChartComponent
              title="Total SMS Numbers Received"
              description="January - June 2024"
              comment1="Dropped by 2.2% this month"
              comment2="Showing total SMS Numbers for the last 6 months"
              trending={<TrendingDown className="h-4 w-4 text-red-400" />}
            />
          </div>

          {/* System Health Status */}
          <div className="my-8 p-6 bg-[#1A1A1A] rounded-xl flex items-center justify-between shadow-md">
            <div className="flex items-center gap-4">
              <Cpu className="w-6 h-6 text-blue-400" />
              <span className="text-lg text-white">System Health: Online</span>
            </div>
            <div className="text-sm text-gray-400">
              Everything is running smoothly.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
