"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
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
    color: "#8AB4F8", // light blue
  },
  mobile: {
    label: "Mobile",
    color: "#BB86FC", // purple
  },
} satisfies ChartConfig;

export function ChartComponent({
  title,
  description,
  comment1,
  comment2,
  trending,
}: {
  title: string;
  description: string;
  comment1: string;
  comment2: string;
  trending?: React.ReactNode;
}) {
  return (
    <Card className="bg-[#1A1A1A] text-white border border-white/10 shadow-md rounded-xl">
      <CardHeader>
        <CardTitle className="text-white">{title}</CardTitle>
        <CardDescription className="text-gray-400">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid stroke="#2C2C2C" vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tick={{ fill: "#CCCCCC" }}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="#8AB4F8"
              strokeWidth={2}
              dot={{ fill: "#8AB4F8" }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

      <CardFooter className="flex-col items-start gap-2 text-sm text-gray-300">
        <div className="flex gap-2 font-medium leading-none text-white">
          {comment1} {trending}
        </div>
        <div className="leading-none text-gray-400">{comment2}</div>
      </CardFooter>
    </Card>
  );
}
