import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Mon", calls: 45 },
  { name: "Tue", calls: 62 },
  { name: "Wed", calls: 58 },
  { name: "Thu", calls: 75 },
  { name: "Fri", calls: 95 },
  { name: "Sat", calls: 98 },
  { name: "Sun", calls: 55 },
];

const CallTrendChart = () => {
  return (
    <div className="bg-[#111c44] p-6 rounded-2xl shadow-lg border border-gray-800/50">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="text-white text-lg font-semibold">
            Call Trends - This Week
          </h3>
          <p className="text-gray-400 text-sm">Total 472 calls</p>
        </div>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-sm btn-outline text-gray-300 border-gray-700 hover:border-gray-500 hover:bg-gray-800 font-normal normal-case"
          >
            This Week <span className="text-xs">▼</span>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-[#1b2b5e] rounded-box w-32 border border-gray-700 text-gray-200"
          >
            <li>
              <a>Last Week</a>
            </li>
            <li>
              <a>Last Month</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="h-[250px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={true}
              stroke="#1f2937"
            />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9ca3af", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1f2937",
                borderColor: "#374151",
                color: "#fff",
              }}
              itemStyle={{ color: "#fff" }}
            />
            <Area
              type="monotone"
              dataKey="calls"
              stroke="#3b82f6"
              fillOpacity={1}
              fill="url(#colorCalls)"
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CallTrendChart;
