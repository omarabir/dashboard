import React from "react";
import {
  LayoutDashboard,
  Phone,
  Calendar,
  Settings,
  LogOut,
  Zap,
  X,
  Home,
} from "lucide-react";

const Sidebar = ({
  activeTab = "dashboard",
  setActiveTab,
  isMobileOpen,
  setIsMobileOpen,
}) => {
  const navItems = [
    { id: "dashboard", label: "Dashboard Overview", icon: Home },
    { id: "call-logs", label: "Call Logs", icon: Phone },
    { id: "appointments", label: "Appointments", icon: Calendar },
    { id: "settings", label: "Settings", icon: Settings },
  ];

  const handleNavClick = (id) => {
    if (setActiveTab) setActiveTab(id);
    if (setIsMobileOpen) setIsMobileOpen(false);
  };

  return (
    <>
     
      {isMobileOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setIsMobileOpen(false)}
        ></div>
      )}

      <div
        className={`
        bg-[#0b1533] h-screen flex flex-col border-r border-gray-800/50 fixed left-0 top-0 z-40 transition-transform duration-300 ease-in-out w-64
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        <div className="p-8 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-[#00D4FF] to-[#00FF88] p-2 rounded-xl shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              <Zap className="w-6 h-6 text-black " />
            </div>
          </div>

          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {navItems.map((item) => (
            <div key={item.id} className="relative group">
              {activeTab === item.id && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-xl blur-sm opacity-100"></div>
              )}
              <button
                onClick={() => handleNavClick(item.id)}
                className={`relative w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  activeTab === item.id
                    ? "bg-gradient-to-r from-[#1e2952] to-transparent  text-white font-medium shadow-xl   shadow-white/30"
                    : "text-gray-400 hover:bg-[#111c44] hover:text-white"
                }`}
              >
                <item.icon
                  className={`w-5 h-5 ${activeTab === item.id ? "text-gray-200" : "text-gray-400"}`}
                />
                <span>{item.label}</span>
              </button>
            </div>
          ))}
        </nav>

        <div className="p-4 mb-4">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-500/10 rounded-xl transition-all font-medium">
            <LogOut className="w-5 h-5" />
            <span>Log Out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
