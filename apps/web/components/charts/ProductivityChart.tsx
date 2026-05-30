"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const data = [
  { day:"Mon", value:4 },
  { day:"Tue", value:7 },
  { day:"Wed", value:5 },
  { day:"Thu", value:9 },
  { day:"Fri", value:8 }
];

export default function ProductivityChart() {
  return (
    <ResponsiveContainer
      width="100%"
      height={350}
    >
      <LineChart data={data}>
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="value"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
