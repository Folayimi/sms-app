"use client";
import { Area, AreaChart, CartesianGrid, BarChart, Bar, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import TopUp from "@/components/popups/TopUp";

import { ChartComponent } from "@/components/ChartComponent";
import { DotsVertical, ChevronRightOutline, Phone } from "heroicons-react";
import { useRouter } from "next/navigation";
import { ArrowRightOutline } from "heroicons-react";
import {
  ArrowUp,
  ArrowDown,
  ShoppingCart,
  Users,
  Package,
  Star,
  MessageCircle,
  Activity,
  Cpu,
  ContactRoundIcon,
  Bell,
  ChartBar,
  CheckCircle,
  LogIn,
  MessageSquare,
  PhoneCall,
  Wallet,
  AlertTriangleIcon,
  HeadsetIcon,
} from "lucide-react";

type AnalysisData = {
  totalNoOfBasicUsers?: number;
  totalRoutesCreated?: number;
};

type Stat = {
  title: string;
  value: string;
  change: string;
  increased?: boolean;
  lowBalance?: boolean;
  icon: any;
  status: any;
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

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

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
  const [topUp, setTopUp] = useState<boolean>(false);


  const overviewData: Stat[] = [
    {
      title: "Active Numbers",
      value: "5",
      change: "+1 this month",
      increased: true,
      icon: <PhoneCall className="w-4 h-4 text-[#8B5CF6]" />,
      status: "3 active * 2 expiring",
    },
    {
      title: "Recent Messages",
      value: "127",
      change: "+23 today",
      increased: true,
      icon: <MessageSquare className="w-4 h-4 text-[#8B5CF6]" />,
      status: "24h volume",
    },
    {
      title: "Available Balance",
      value: "$24.50",
      change: "Low balance",
      lowBalance: true,
      icon: <Wallet className="w-4 h-4 text-[#8B5CF6]" />,
      status: (
        <div
          className="flex items-center gap-2 bg-[#8B5CF6] text-white text-[12px] font-semibold px-2 py-2 rounded-[12px] cursor-pointer hover:bg-[#7E57C2] transition-all duration-300"
          onClick={() => {
            setTopUp(true);
            console.log("clicked")
          }}
        >
          <p>Top up</p>
        </div>
      ),
    },
    {
      title: "Message Activity",
      value: "342",
      change: "+12% this week",
      increased: true,
      icon: <ChartBar className="w-4 h-4 text-[#8B5CF6]" />,
      status: "7d volume",
    },
  ];

  const quickActions = [
    {
      title: "Receive SMS",
      icon: <MessageSquare className="w-4 h-4 text-[#8B5CF6]" />,
      action: () => router.push("/users/add"),
    },
    {
      title: "Rent Numbers",
      icon: <PhoneCall className="w-4 h-4 text-[#8B5CF6]" />,
      action: () => router.push("/sms/logs"),
    },
    {
      title: "Analytics",
      icon: <ChartBar className="w-4 h-4 text-[#8B5CF6]" />,
      action: () => router.push("/routes/manage"),
    },
  ];

  const messages = [
    {
      sender: "Amazon",
      message: "Your verification code is 482913. Do not share thi...",
      number: "+1 (415) 555-3890",
      time: "12:45 PM",
      type: "Verification",
    },
    {
      sender: "PayPal",
      message: "Your PayPal security code is 395721. It expires in 1...",
      number: "+1 (415) 555-7291",
      time: "10:23 AM",
      type: "Verification",
    },
    {
      sender: "Uber",
      message: "Your Uber code: 847302. Use this to verify your ac...",
      number: "+1 (415) 555-3890",
      time: "Yesterday",
      type: "Verification",
    },
    {
      sender: "DoorDash",
      message: "Your DoorDash verification code is 294751.",
      number: "+1 (415) 555-7291",
      time: "Yesterday",
      type: "Verification",
    },
    {
      sender: "Airbnb",
      message: "Your Airbnb verification code is 583921.",
      number: "+1 (415) 555-3890",
      time: "Apr 7",
      type: "Verification",
    },
  ];

  const activities = [
    {
      icon: (
        <div className="h-8 w-8 rounded-full mt-1 flexmm bg-green-500/10">
          <PhoneCall className="text-green-500 w-4 h-4" />
        </div>
      ),
      title: "Number Activated",
      description: "New number +1 (415) 555-3890 has been activated.",
      time: "2h ago",
    },
    {
      icon: (
        <div className="h-8 w-8 rounded-full mt-1 flexmm bg-yellow-500/10">
          <Wallet className="text-yellow-500 w-4 h-4" />
        </div>
      ),
      title: "Low Balance Alert",
      description: "Your account balance is below $25. Consider adding funds.",
      time: "3h ago",
    },
    {
      icon: (
        <div className="h-8 w-8 rounded-full mt-1 flexmm bg-blue-500/10">
          <MessageSquare className="text-blue-500 w-4 h-4" />
        </div>
      ),
      title: "New Messages",
      description: "You've received 12 new messages today.",
      time: "5h ago",
    },
    {
      icon: (
        <div className="h-8 w-8 rounded-full mt-1 flexmm bg-purple-500/10">
          <LogIn className="text-purple-500 w-4 h-4" />
        </div>
      ),
      title: "New Login",
      description: "New login from Chrome on Windows.",
      time: "1d ago",
    },
    {
      icon: (
        <div className="h-8 w-8 rounded-full mt-1 flexmm bg-emerald-500/10">
          <CheckCircle className="text-emerald-500 w-4 h-4" />
        </div>
      ),
      title: "Payment Successful",
      description: "Payment of $15.00 was successfully processed.",
      time: "2d ago",
    },
  ];

  const numbers = [
    {
      icon: (
        <div className="h-8 w-8 rounded-full mt-1 flexmm bg-green-500/10">
          <PhoneCall className="text-green-500 w-4 h-4" />
        </div>
      ),
      status: "Active",
      number: "+1 (415) 555-3890",
      description: "Expires in 27 days",
    },
    {
      icon: (
        <div className="h-8 w-8 rounded-full mt-1 flexmm bg-green-500/10">
          <PhoneCall className="text-green-500 w-4 h-4" />
        </div>
      ),
      status: "Active",
      number: "+1 (415) 555-3890",
      description: "Expires in 27 days",
    },
    {
      icon: (
        <div className="h-8 w-8 rounded-full mt-1 flexmm bg-yellow-500/10">
          <PhoneCall className="text-yellow-500 w-4 h-4" />
        </div>
      ),
      status: "Expiring soon",
      number: "+1 (415) 555-3890",
      description: "Expires in 3 days",
    },
    {
      icon: (
        <div className="h-8 w-8 rounded-full mt-1 flexmm bg-yellow-500/10">
          <PhoneCall className="text-yellow-500 w-4 h-4" />
        </div>
      ),
      status: "Expiring soon",
      number: "+1 (415) 555-3890",
      description: "Expires in 3 days",
    },
    {
      icon: (
        <div className="h-8 w-8 rounded-full mt-1 flexmm bg-green-500/10">
          <PhoneCall className="text-green-500 w-4 h-4" />
        </div>
      ),
      status: "Active",
      number: "+1 (415) 555-3890",
      description: "Expires in 27 days",
    },
  ];

  useEffect(() => {
    // Fetch user data logic here
  }, [searchQuery]);

  return (
    <div className="bg-[#101827] backdrop-blur-[12px] lg:mt-[50px] mt-[40px] pb-[40px] text-white px-[30px] pt-12">
      {topUp && <TopUp />}
      {!userToken && (
        <div className="w-full h-full cflexss">
          {/* Stats Section */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {overviewData.map((data, index) => (
              <div
                key={index}
                className="bg-[#29303D] backdrop-blur-[12px] text-[12px] rounded-2xl px-5 py-4 flexbm shadow-lg"
              >
                <div className="cflexss gap-[12px]">
                  <h3 className="font-medium text-[#9CA3AF]">{data.title}</h3>
                  <p className="text-[25px] font-bold">{data.value}</p>
                  <div
                    className={`flex items-center font-medium ${
                      data.increased ? "text-green-400" : "text-red-400"
                    } ${data.lowBalance && "text-yellow-400"}`}
                  >
                    {data.increased && !data.lowBalance && (
                      <ArrowUp className="w-5 h-5 mr-1" />
                    )}
                    {!data.increased && !data.lowBalance && (
                      <ArrowDown className="w-5 h-5 mr-1" />
                    )}
                    {data.lowBalance && (
                      <AlertTriangleIcon className="w-5 h-5 mr-1 text-yellow-400" />
                    )}
                    {data.change}
                  </div>
                </div>
                <div className="flex flex-col justify-between items-end h-full">
                  <div className="h-8 w-8 rounded-full flexmm bg-[#8B5CF6]/10">
                    {data.icon}
                  </div>
                  <div className="text-[12px] text-[#9CA3AF]">
                    {data.status}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Chart Section */}
          <div className="w-full flex justify-between items-start lg:flex-nowrap flex-wrap mt-6 gap-6 ">
            {/* <ChartComponent
              title="Total Active Users"
              description="January - June 2024"
              comment1="Trending up by 5.2% this month"
              comment2="Showing total visitors for the last 6 months"
              trending={<ArrowUp className="h-4 w-4 text-green-400" />}
              className="w-full lg:w-[60%] "
            /> */}
            <Card className="w-full lg:w-[60%] bg-[#29303D] rounded-[20px] backdrop-blur-[12px] border border-gray-800">
              <CardHeader className="w-full flexbm">
                <CardTitle>Message Activity</CardTitle>
                <div className="flex space-x-1 bg-gray-800 rounded-full p-[3px]">
                  <button className="px-3 py-1 text-xs font-medium rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6]">
                    24h
                  </button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full">
                    7d
                  </button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full">
                    30d
                  </button>
                </div>
              </CardHeader>
              <CardContent className="w-full">
                <ChartContainer
                  className="w-full h-auto lg:max-h-[290px]"
                  config={chartConfig}
                >
                  <AreaChart
                    accessibilityLayer
                    data={chartData}
                    margin={{
                      left: 12,
                      right: 12,
                    }}
                  >
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="dot" />}
                    />
                    <Area
                      dataKey="mobile"
                      type="natural"
                      fill="#4B575D"
                      fillOpacity={0.4}
                      stroke="#FBBF72"
                      stackId="a"
                    />
                    <Area
                      dataKey="desktop"
                      type="natural"
                      fill="#374C5A"
                      fillOpacity={0.4}
                      stroke="#8DD3C7"
                      stackId="a"
                    />
                    <Area
                      dataKey="desktop"
                      type="natural"
                      fill="#2E3C4E"
                      fillOpacity={0.4}
                      stroke="#57B5E7"
                      stackId="a"
                    />
                  </AreaChart>
                </ChartContainer>
              </CardContent>
              <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                  <div className="grid gap-2">
                    <div className="flex items-center gap-2 font-medium leading-none">
                      Trending up by 5.2% this month{" "}
                      <ArrowUp className="h-4 w-4" />
                    </div>
                    <div className="flex items-center gap-2 leading-none text-muted-foreground">
                      January - June 2024
                    </div>
                  </div>
                </div>
              </CardFooter>
            </Card>
            <div className="cflexss w-full lg:w-[40%] gap-[25px] p-[20px] bg-[#29303D] rounded-[20px] backdrop-blur-[12px] text-[14px]">
              <p className="font-semibold">Quick Actions</p>
              <div className="w-full pb-4 grid grid-cols-2 gap-4 border-b-2 border-[#1F2937]">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className="w-full bg-[#242C39] hover:bg-[#1F2937] px-6 py-4 rounded-[20px] flexmm gap-[10px] cursor-pointer"
                    onClick={action.action}
                  >
                    <div className="w-full cflexmm gap-4">
                      <div className="h-8 w-8 rounded-full flexmm bg-[#8B5CF6]/10">
                        {action.icon}
                      </div>
                      <span className="font-semibold text-center text-white">
                        {action.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="font-semibold">Need Help?</p>
              <div className="w-full bg-[#242C39] hover:bg-[#1F2937] p-4 rounded-[20px] flexbm cursor-pointer">
                <div className="flexmm gap-4">
                  <div className="h-8 w-8 rounded-full flexmm bg-[#8B5CF6]/10">
                    <HeadsetIcon className="w-4 h-4 text-[#8B5CF6]" />
                  </div>
                  <p>Contact Support</p>
                </div>
                <ArrowRightOutline
                  className="w-5 h-5 text-white ml-auto"
                  onPointerEnterCapture={() => {}}
                  onPointerLeaveCapture={() => {}}
                />
              </div>
            </div>
          </div>

          <div className="w-full flexbs mt-6 gap-4 flex-wrap lg:flex-nowrap">
            <Card className="w-full bg-[#29303D] rounded-[20px] h-[500px] backdrop-blur-[12px] border border-gray-800 lg:w-[60%]">
              <CardContent className="w-full p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-[14px] font-semibold">Recent Messages</h2>
                  <Link
                    href="#"
                    className="text-[14px] text-purple-500 hover:underline flexm gap-[8px]"
                  >
                    View All
                    <ChevronRightOutline
                      className="w-4 h-4"
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    />
                  </Link>
                </div>
                <div className="w-full overflow-y-auto max-h-[350px] overflow-x-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-xs text-gray-400 border-b border-gray-800">
                        <th className="pb-3 font-medium">Sender</th>
                        <th className="pb-3 font-medium">Message</th>
                        <th className="pb-3 font-medium">Number</th>
                        <th className="pb-3 font-medium">Time</th>
                        <th className="pb-3 font-medium">Type</th>
                        <th className="pb-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody className="text-[12px]">
                      {messages.map((msg, index) => {
                        return (
                          <tr className="border-b border-gray-800" key={index}>
                            <td className="py-3">{msg.sender}</td>
                            <td className="py-3 max-w-xs truncate">
                              {msg.message}
                            </td>
                            <td className="py-3">{msg.number}</td>
                            <td className="py-3 text-gray-400">{msg.time}</td>
                            <td className="py-3">
                              <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs">
                                {msg.type}
                              </span>
                            </td>
                            <td className="py-3">
                              <button className="w-8 h-8 rounded-full hover:bg-gray-800 flex items-center justify-center">
                                <i className="ri-more-2-fill"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <Card className="w-full lg:w-[40%] h-[500px] bg-[#1F2634] text-white">
              <CardContent className="w-full">
                <h2 className="text-[14px] font-semibold mb-4">
                  Recent Activity
                </h2>
                <div className="space-y-4 text-[12px]">
                  {activities.map((act, index) => (
                    <div key={index} className="flex items-start gap-3">
                      {act.icon}
                      <div>
                        <div className="text-sm font-medium">{act.title}</div>
                        <div className="text-white/70">{act.description}</div>
                        <div className="text-[10px] text-white/50 mt-1">
                          {act.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <a
                  href="#"
                  className="text-[12px] text-center text-blue-400 hover:underline block mt-4"
                >
                  View All Activity
                </a>
              </CardContent>
            </Card>
          </div>

          <div className="w-full flexbs mt-6 gap-4 flex-wrap lg:flex-nowrap">
            <Card className="w-full bg-[#29303D] rounded-[20px] h-[500px] backdrop-blur-[12px] border border-gray-800 p-3 lg:w-[50%]">
              <CardContent className="w-full p-4">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-[14px] font-semibold">Your Numbers</h2>
                  <Link
                    href="#"
                    className="text-[14px] text-purple-500 flexmm gap-[8px]"
                  >
                    Manage
                    <ChevronRightOutline
                      className="w-4 h-4"
                      onPointerEnterCapture={() => {}}
                      onPointerLeaveCapture={() => {}}
                    />
                  </Link>
                </div>
                <div className="w-full cflexss gap-[10px]">
                  {numbers.map((item, index) => (
                    <div
                      className="w-full flex items-center justify-between p-3 bg-gray-800/50 rounded-[20px]"
                      key={index}
                    >
                      <div className="w-full flex items-center gap-3">
                        {item.icon}
                        <div>
                          <h4 className="font-medium">{item.number}</h4>
                          <div className="flex items-center gap-2 mt-1">
                            <span
                              className={`px-2 py-0.5 ${
                                item.status === "Active"
                                  ? "bg-green-500/20 text-green-400"
                                  : "bg-yellow-500/20 text-yellow-400"
                              } rounded-full text-xs`}
                            >
                              {item.status}
                            </span>
                            <span className="text-xs text-gray-400">
                              {item.description}
                            </span>
                          </div>
                        </div>
                      </div>
                      <DotsVertical
                        className="w-4 h-4"
                        onPointerEnterCapture={() => {}}
                        onPointerLeaveCapture={() => {}}
                      />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="w-full bg-[#29303D] rounded-[20px] backdrop-blur-[12px] border border-gray-800 lg:w-[50%]">
              <CardHeader className="w-full flexbm">
                <CardTitle>Usage Statistics</CardTitle>
                <div className="flex space-x-1 bg-gray-800 rounded-full p-[3px]">
                  <button className="px-3 py-1 text-xs font-medium rounded-full bg-[#8B5CF6]/10 text-[#8B5CF6]">
                    7d
                  </button>
                  <button className="px-3 py-1 text-xs font-medium rounded-full">
                    30d
                  </button>
                </div>
              </CardHeader>
              <CardContent className="w-ful">
                <ChartContainer
                  className="h-auto lg:max-h-[250px] w-full"
                  config={chartConfig}
                >
                  <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      tickMargin={10}
                      axisLine={false}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="desktop" fill="#FC996A" radius={8} />
                  </BarChart>
                </ChartContainer>
              </CardContent>
              <CardFooter className="grid lg:grid-cols-3 grid-cols-1 gap-4 pb-8">
                <div className="p-3 bg-gray-800/50 rounded-[20px] text-center">
                  <h4 className="text-xs text-gray-400 mb-1">Total Messages</h4>
                  <p className="text-xl font-bold">342</p>
                  <span className="text-xs text-green-400">+12%</span>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg text-center">
                  <h4 className="text-xs text-gray-400 mb-1">Avg. per Day</h4>
                  <p className="text-xl font-bold">48.9</p>
                  <span className="text-xs text-green-400">+5%</span>
                </div>
                <div className="p-3 bg-gray-800/50 rounded-lg text-center">
                  <h4 className="text-xs text-gray-400 mb-1">Peak Time</h4>
                  <p className="text-xl font-bold">2-4 PM</p>
                  <span className="text-xs text-gray-400">Consistent</span>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overview;
