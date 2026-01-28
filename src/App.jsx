import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import StatsCard from "./components/StatsCard";
import CallTrendChart from "./components/CallTrendChart";
import RecentActivity from "./components/RecentActivity";
import RepairRequests from "./components/RepairRequests";
import CallLogs from "./components/CallLogs";
import Appointments from "./components/Appointments";
import Settings from "./components/Settings";
import {
  Phone,
  Bot,
  ArrowRightLeft,
  Calendar,
  FileWarning,
  Clock,
  Menu,
} from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const stats = [
    {
      title: "Total Calls Today",
      value: "127",
      percentage: "12%",
      isPositive: true,
      icon: Phone,
      iconBgColor: "bg-blue-500",
      iconColor: "text-white",
    },
    {
      title: "AI-Handled Calls",
      value: "98",
      percentage: "77%",
      isPositive: true,
      icon: Bot,
      iconBgColor: "bg-fuchsia-500",
      iconColor: "text-white",
    },
    {
      title: "Warm Transfer",
      value: "23",
      percentage: "18%",
      isPositive: true,
      icon: ArrowRightLeft,
      iconBgColor: "bg-orange-500",
      iconColor: "text-white",
    },
    {
      title: "Appointments Booked",
      value: "34",
      percentage: "8%",
      isPositive: true,
      icon: Calendar,
      iconBgColor: "bg-green-500",
      iconColor: "text-white",
    },
    {
      title: "Missed/Failed Calls",
      value: "6",
      percentage: "3%",
      isPositive: false,
      icon: FileWarning,
      iconBgColor: "bg-red-500",
      iconColor: "text-white",
    },
    {
      title: "Avg Call Duration",
      value: "3:42",
      percentage: "15%",
      isPositive: true,
      icon: Clock,
      iconBgColor: "bg-indigo-500",
      iconColor: "text-white",
    },
  ];

  const getTitle = () => {
    switch (activeTab) {
      case "call-logs":
        return "Call Logs & History";
      case "appointments":
        return "Appointments";
      case "settings":
        return "Settings";
      default:
        return "Dashboard Overview";
    }
  };

  const renderContent = () => {
    switch (activeTab) {
      case "call-logs":
        return <CallLogs />;
      case "appointments":
        return <Appointments />;
      case "settings":
        return <Settings />;
      case "dashboard":
      default:
        return (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <StatsCard key={index} {...stat} />
              ))}
            </div>

            <div className="mb-8">
              <CallTrendChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <RecentActivity />
              <RepairRequests />
            </div>
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0b1533] font-sans selection:bg-blue-500/30">
      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileOpen={isMobileOpen}
        setIsMobileOpen={setIsMobileOpen}
      />

      <main className="lg:ml-64 p-4 md:p-8 transition-all duration-300">
        <div className="lg:hidden flex justify-between items-center mb-6">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 bg-[#111c44] rounded-lg text-white border border-gray-700"
          >
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold text-white">{getTitle()}</h1>
          <div className="w-10"></div>
        </div>

        <div className="hidden lg:block">
          <DashboardHeader title={getTitle()} />
        </div>

        {renderContent()}
      </main>
    </div>
  );
}

export default App;
