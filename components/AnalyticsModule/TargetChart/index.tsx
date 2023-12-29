"use client";

import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const TargetChart = () => {
  const currentViews = 19;
  const totalViewsTarget = 300;

  //   const data = [
  //     { name: "Current Views", value: currentViews, fill: "#8884d8" },
  //     {
  //       name: "Total Views Target",
  //       value: totalViewsTarget - currentViews,
  //       fill: "#eee",
  //     },
  //   ];

  const data = [
    { name: "Current Views", views: currentViews },
    { name: "Total Views Target", views: totalViewsTarget },
  ];

  return (
    <>
      <div style={{ width: "100%", height: 300 }} className="flex items-center">
        <ResponsiveContainer width="100%" height={300}>
          {/* <RadialBarChart
            cx="50%"
            cy="50%"
            innerRadius="20%"
            outerRadius="80%"
            barSize={10}
            data={data}
          >
            <RadialBar
              label={{ position: "insideStart", fill: "#fff" }}
              background
              dataKey="value"
            />
            <Legend
              iconSize={10}
              layout="vertical"
              verticalAlign="middle"
              align="right"
            />
          </RadialBarChart> */}
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="views" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default TargetChart;
