import React from "react";
import { Bell } from "lucide-react";

const DashboardHeader = ({ title }) => {
  return (
    <header className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-300 hover:text-white transition-colors">
          <Bell className="w-6 h-6" />
          <span className="absolute top-1 right-2 w-2 h-2 bg-blue-500 rounded-full border border-[#0b1533]"></span>
        </button>
        <div className="avatar cursor-pointer">
          <div className="w-10 rounded-full ring ring-offset-base-100 ring-offset-2 ring-blue-500/20">
            <img
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              alt="User avatar"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
