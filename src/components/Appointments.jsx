import React from "react";
import {
  CheckCircle,
  Clock,
  AlertCircle,
  Copy,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Appointments = () => {
  const appointments = [
    {
      name: "Jane D.",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      type: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "09:00",
    },
    {
      name: "Jane D.",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      type: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "10:00",
    },
    {
      name: "Jane D.",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      type: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "11:00",
    },
    {
      name: "Jane D.",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      type: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "12:00",
    },
    {
      name: "Jane D.",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      type: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "02:00",
    },
    {
      name: "Jane D.",
      phone: "01960685765",
      email: "admin@gmail.com",
      device: "Apple/Iphone 13pro",
      type: "Screen",
      date: "02/06/2026",
      slot: "1",
      time: "03:00",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-[#111c44] p-6 rounded-xl border border-gray-800">
          <div className="flex items-start gap-3 mb-2">
            <CalendarIcon className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400 text-sm font-medium">
              Total Booked
            </span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">34</div>
          <p className="text-emerald-500 text-xs font-medium">+8 this week</p>
        </div>

        <div className="bg-[#111c44] p-6 rounded-xl border border-gray-800">
          <div className="flex items-start gap-3 mb-2">
            <CheckCircle className="w-5 h-5 text-emerald-500" />
            <span className="text-gray-400 text-sm font-medium">AI Booked</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">28</div>
          <p className="text-gray-500 text-xs font-medium">82% of total</p>
        </div>

        <div className="bg-[#111c44] p-6 rounded-xl border border-gray-800">
          <div className="flex items-start gap-3 mb-2">
            <AlertCircle className="w-5 h-5 text-amber-500" />
            <span className="text-gray-400 text-sm font-medium">Pending</span>
          </div>
          <div className="text-3xl font-bold text-white mb-1">3</div>
          <p className="text-gray-500 text-xs font-medium">
            Awaiting confirmation
          </p>
        </div>
      </div>

      {/* Booking Link */}
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-300">Booking Link</h3>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 bg-[#111c44] border border-gray-800 rounded-lg px-4 py-3 text-gray-300 text-sm font-mono overflow-x-auto">
            https://techstore.com/book?id=store123
          </div>
          <button className="flex items-center gap-2 bg-[#2b355e] hover:bg-[#343e69] text-white px-6 py-3 rounded-lg transition-colors font-medium whitespace-nowrap">
            <Copy className="w-4 h-4" />
            <span>Copy Link</span>
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="bg-[#111c44] border border-gray-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-700/50">
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Client Name
                </th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Client Phone
                </th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Client mail
                </th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Device
                </th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Repair Type
                </th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider text-center">
                  Slot no
                </th>
                <th className="p-4 text-xs font-medium text-gray-400 uppercase tracking-wider text-right">
                  Start Time
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              {appointments.map((apt, index) => (
                <tr key={index} className="hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <span className="text-blue-400 hover:underline cursor-pointer font-medium text-sm">
                      {apt.name}
                    </span>
                  </td>
                  <td className="p-4 text-gray-300 text-sm">{apt.phone}</td>
                  <td className="p-4 text-gray-300 text-sm">{apt.email}</td>
                  <td className="p-4 text-gray-300 text-sm">{apt.device}</td>
                  <td className="p-4 text-gray-300 text-sm">{apt.type}</td>
                  <td className="p-4 text-gray-300 text-sm">{apt.date}</td>
                  <td className="p-4 text-gray-300 text-sm text-center">
                    {apt.slot}
                  </td>
                  <td className="p-4 text-gray-300 text-sm text-right">
                    {apt.time}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 text-sm text-blue-400 py-4">
        <button className="flex items-center gap-1 hover:text-blue-300 disabled:opacity-50">
          <ChevronLeft className="w-4 h-4" />
          Previous
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-500/10">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-100/90 text-blue-900 font-medium">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-500/10">
          3
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-500/10">
          4
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-500/10">
          5
        </button>
        <span className="text-gray-500">...</span>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-blue-500/10">
          11
        </button>
        <button className="flex items-center gap-1 hover:text-blue-300">
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// Simple Calendar icon component since it was missing in the import
const CalendarIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

export default Appointments;
