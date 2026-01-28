import React from "react";

const StatsCard = ({
  title,
  value,
  percentage,
  isPositive,
  icon: Icon,
  iconColor,
  iconBgColor,
}) => {
  return (
    <div className="bg-[#111c44] rounded-2xl p-5 flex flex-col justify-between shadow-lg border border-gray-800/50 hover:border-gray-700 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-gray-400 text-sm font-medium mb-1">{title}</h3>
          <p className="text-3xl font-bold text-white mb-2">{value}</p>
        </div>
        <div
          className={`p-3 rounded-xl ${iconBgColor} flex items-center justify-center`}
        >
          <Icon className={`w-6 h-6 ${iconColor}`} />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <span
          className={`text-xs font-bold px-1.5 py-0.5 rounded ${isPositive ? "text-green-500 bg-green-500/10" : "text-red-500 bg-red-500/10"}`}
        >
          {isPositive ? "+" : "-"}
          {percentage}
        </span>
      </div>
    </div>
  );
};

export default StatsCard;
