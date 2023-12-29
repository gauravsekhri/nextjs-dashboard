"use client";

import { formatPostDate } from "@/utils/helperFunctions";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// const data = [
//   {
//     name: "Jan",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Feb",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Mar",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Apr",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "May",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Jun",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Jul",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Aug",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Sep",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Oct",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Nov",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
//   {
//     name: "Dec",
//     total: Math.floor(Math.random() * 5000) + 1000,
//   },
// ];

// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const timeData = [
  { date: "2023-01-01", count: 5 },
  { date: "2023-01-02", count: 8 },
  { date: "2023-01-03", count: 12 },
  // Add more data points as needed
];

export function TrafficChart({ data }: { data: any }) {
  const xAxisTickFormatter = (tick: any) => {
    return formatPostDate(tick); // Format the date as desired
  };

  return (
    // <ResponsiveContainer width="100%" height={350}>
    //   {/* <BarChart data={data}>
    //     <XAxis
    //       dataKey="name"
    //       stroke="#888888"
    //       fontSize={12}
    //       tickLine={false}
    //       axisLine={false}
    //     />
    //     <YAxis
    //       stroke="#888888"
    //       fontSize={12}
    //       tickLine={false}
    //       axisLine={false}
    //       tickFormatter={(value) => `$${value}`}
    //     />
    //     <Bar
    //       dataKey="total"
    //       fill="currentColor"
    //       radius={[4, 4, 0, 0]}
    //       className="fill-primary"
    //     />
    //   </BarChart> */}
    //   <LineChart width={500} height={300} data={data}>
    //     <XAxis dataKey="name" />
    //     <YAxis />
    //     {/* <CartesianGrid stroke="#eee" strokeDasharray="5 5" /> */}
    //     {/* <Line type="monotone" dataKey="uv" stroke="#8884d8" /> */}
    //     <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    //   </LineChart>
    // </ResponsiveContainer>
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        {/* <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart> */}
        <AreaChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <XAxis dataKey="date" tickFormatter={xAxisTickFormatter} />

          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="count"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
