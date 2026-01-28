import React from "react";

const requests = [
  { name: "Screen Repair", count: 156, percentage: 70, color: "progress-info" }, // cyan
  {
    name: "Battery Replacement",
    count: 89,
    percentage: 40,
    color: "progress-info",
  },
  {
    name: "Back Glass Repair",
    count: 67,
    percentage: 30,
    color: "progress-info",
  },
  {
    name: "Software Issues",
    count: 45,
    percentage: 20,
    color: "progress-info",
  },
];



const RepairRequests = () => {
  return (
    <div className="bg-[#111c44] p-6 rounded-2xl shadow-lg border border-gray-800/50 h-full">
      <h3 className="text-white text-lg font-semibold mb-6">
        Top Repair Requests
      </h3>
      <div className="space-y-6">
        {requests.map((req, index) => (
          <div key={index}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-gray-300 font-medium">{req.name}</span>
              <span className="text-gray-500">{req.count} requests</span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <div
                className="bg-cyan-500 h-2 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.5)]"
                style={{ width: `${req.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RepairRequests;
