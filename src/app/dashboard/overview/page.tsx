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
      icon: <ShoppingCart className="w-8 h-8 text-blue-500" />,
    },
    {
      title: "New Users",
      value: "3,120",
      change: "-4.8%",
      increased: false,
      icon: <Users className="w-8 h-8 text-green-500" />,
    },
    {
      title: "Orders Processed",
      value: "8,431",
      change: "+6.2%",
      increased: true,
      icon: <Package className="w-8 h-8 text-yellow-500" />,
    },
    {
      title: "Customer Reviews",
      value: "1,245",
      change: "-2.1%",
      increased: false,
      icon: <Star className="w-8 h-8 text-purple-500" />,
    },
  ];

  const createJSON = (tableData: TableData) => {
    const array: UserData[] = Object.values(tableData.payload);
    const filteredData = array.filter(
      (data) =>
        (data.email && data.email.includes(searchQuery.toLowerCase())) ||
        (data.phonenumber &&
          data.phonenumber.includes(searchQuery.toLowerCase()))
    );
    setUsers(filteredData);
  };

  useEffect(() => {
    // Fetch user data logic here
  }, [searchQuery]);

  return (
    <>
      {!userToken && (
        <div className="w-full text-black px-[30px] mt-[100px]">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-semibold text-2xl">
                Hi, {adminData?.firstname || "John"}{" "}
                {adminData?.lastname || "Doe"}
              </h1>
              <p>Here is your Activity Overview</p>
            </div>
          </div>
          <div className="w-full my-5 flex items-center justify-between flex-wrap">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
              {overviewData.map((data, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 shadow-md rounded-2xl p-5 flex flex-col items-start transition transform hover:scale-105"
                >
                  {/* Icon */}
                  <div className="text-3xl">{data.icon}</div>

                  {/* Title */}
                  <h3 className="text-gray-700 dark:text-gray-300 text-lg font-medium mt-2">
                    {data.title}
                  </h3>

                  {/* Value */}
                  <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                    {data.value}
                  </p>

                  {/* Growth Indicator */}
                  <div
                    className={`flex items-center text-sm font-medium mt-2 ${
                      data.increased ? "text-green-500" : "text-red-500"
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
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 justify-start items-center pb-[60px] mt-[40px]">
            <ChartComponent
              title="Total Active Users"
              description="January - June 2024"
              comment1="Trending up by 5.2% this month"
              comment2="Showing total visitors for the last 6 months"
              trending={<TrendingUp className="h-4 w-4" />}
            />
            <ChartComponent
              title="Total Users"
              description="January - June 2024"
              comment1="Trending up by 10.5% this month"
              comment2="Showing total users"
              trending={<TrendingUp className="h-4 w-4" />}
            />
            <ChartComponent
              title="Total Payments"
              description="January - June 2024"
              comment1="Trending up by 7.2% this month"
              comment2="Showing total payments for the last 3 months"
              trending={<TrendingUp className="h-4 w-4" />}
            />
            <ChartComponent
              title="Total SMS Numbers Received"
              description="January - June 2024"
              comment1="Dropped by 2.2% this month"
              comment2="Showing total SMS Numbers for the last 6 months"
              trending={<TrendingDown className="h-4 w-4" />}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Overview;
