import React from "react";

const activities = [
  {
    text: "AI booked appointment for iPhone 13 screen repair",
    time: "2 min ago",
    statusColor: "bg-green-500",
  },
  {
    text: "Warm transfer to technician - Software issue",
    time: "5 min ago",
    statusColor: "bg-orange-500",
  },
  {
    text: "Quote provided for iPad battery replacement",
    time: "6 min ago",
    statusColor: "bg-green-500",
  },
  {
    text: "Call dropped after 12 seconds",
    time: "15 min ago",
    statusColor: "bg-red-500",
  },
];

const RecentActivity = () => {
  return (
    <div className="bg-[#111c44] p-6 rounded-2xl shadow-lg border border-gray-800/50 h-full">
      <h3 className="text-white text-lg font-semibold mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="flex gap-4 items-start p-3 hover:bg-[#1b2b5e]/50 rounded-xl transition-colors cursor-default"
          >
            <div className="mt-1.5 flex-shrink-0">
              <div
                className={`w-2.5 h-2.5 rounded-full ${activity.statusColor}`}
              ></div>
            </div>
            <div>
              <p className="text-gray-200 text-sm font-medium leading-tight">
                {activity.text}
              </p>
              <p className="text-gray-500 text-xs mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;
