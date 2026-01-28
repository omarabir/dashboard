import React, { useState } from "react";
import {
  Search,
  Phone,
  Clock,
  Calendar,
  AlertCircle,
  Play,
  FileText,
  CheckCircle,
  XCircle,
  ArrowRight,
} from "lucide-react";

const CallLogs = () => {
  const [selectedCall, setSelectedCall] = useState(0);

  const calls = [
    {
      id: 0,
      number: "+1 (555) 345-6789",
      date: "2025-12-16 • 09:42 AM",
      duration: "5:23",
      status: "Quote Provided",
      tag: "Screen",
      badge: "AI Resolved",
      badgeColor: "bg-emerald-500/10 text-emerald-500",
      transcript: [
        {
          role: "AI Assistant",
          text: "Thank you for calling UBreakIFix! How can I help you today?",
        },
        {
          role: "Customer",
          text: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?",
        },
        {
          role: "AI Assistant",
          text: "I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?",
        },
        { role: "Customer", text: "Yes, please! When are you available?" },
        {
          role: "AI Assistant",
          text: "Great! I have availability today at 2:00 PM or tomorrow at 10:00 AM. Which works better for you?",
        },
      ],
    },
    {
      id: 1,
      number: "+1 (555) 345-6789",
      date: "2025-12-16 • 09:42 AM",
      duration: "5:23",
      status: "Escalated to technician",
      tag: "Software",
      badge: "Warm Transfer",
      badgeColor: "bg-orange-500/10 text-orange-500",
      transcript: [],
    },
    {
      id: 2,
      number: "+1 (555) 345-6789",
      date: "2025-12-16 • 09:42 AM",
      duration: "5:23",
      status: "Appointment Booked",
      tag: "Battery",
      badge: "Appointment",
      badgeColor: "bg-blue-500/10 text-blue-500",
      transcript: [],
    },
    {
      id: 3,
      number: "+1 (555) 345-6789",
      date: "2025-12-16 • 09:42 AM",
      duration: "0:20",
      status: "Call Dropped",
      tag: "Unknown",
      badge: "Dropped",
      badgeColor: "bg-red-500/10 text-red-500",
      transcript: [],
    },
    {
      id: 4,
      number: "+1 (555) 345-6789",
      date: "2025-12-16 • 09:42 AM",
      duration: "5:23",
      status: "Quote Provided",
      tag: "Screen",
      badge: "AI Resolved",
      badgeColor: "bg-emerald-500/10 text-emerald-500",
      transcript: [],
    },
  ];

  const activeCall = calls[selectedCall];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search by phone number, issue type..."
              className="pl-10 pr-4 py-2 bg-[#111c44] border border-gray-700 rounded-lg text-sm text-gray-200 focus:outline-none focus:border-blue-500 w-full sm:w-64"
            />
          </div>

          <select className="bg-[#111c44] border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
            <option>All Type</option>
          </select>

          <select className="bg-[#111c44] border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
            <option>All Issues</option>
          </select>

          <select className="bg-[#111c44] border border-gray-700 text-gray-200 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
            <option>Today</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Call List */}
        <div className="lg:col-span-5 space-y-4">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Call List
          </h3>
          <div className="space-y-3">
            {calls.map((call, index) => (
              <div
                key={index}
                onClick={() => setSelectedCall(index)}
                className={`p-4 rounded-xl border cursor-pointer transition-all ${
                  selectedCall === index
                    ? "bg-blue-600/10 border-blue-500"
                    : "bg-[#111c44] border-gray-800 hover:border-gray-700"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-white font-medium">{call.number}</h4>
                      <p className="text-xs text-gray-400">{call.date}</p>
                    </div>
                  </div>
                  <span
                    className={`px-2 py-1 rounded text-xs font-medium ${call.badgeColor}`}
                  >
                    {call.badge}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-gray-400 pl-[52px]">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{call.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="w-3 h-3 text-emerald-500" />
                    <span>{call.status}</span>
                  </div>
                  <span className="bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded text-xs">
                    {call.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call Details */}
        <div className="lg:col-span-7">
          <h3 className="text-lg font-semibold text-gray-300 mb-4">
            Call Details
          </h3>
          <div className="bg-[#111c44] border border-gray-800 rounded-xl p-6">
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <p className="text-sm text-gray-400 mb-1">Phone Number</p>
                <p className="text-white font-medium text-lg">
                  +1 (555) 123-4567
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Duration</p>
                <p className="text-white font-medium text-lg">4:32</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Date & Time</p>
                <p className="text-white font-medium">2025-12-16 10:45 AM</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Issue Type</p>
                <p className="text-white font-medium">Screen</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Call Type</p>
                <span className="inline-block px-2 py-1 rounded text-xs font-medium bg-emerald-500/10 text-emerald-500">
                  AI Resolved
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Outcome</p>
                <p className="text-white font-medium">Quote provided</p>
              </div>
            </div>

            <button className="w-full bg-purple-900/40 hover:bg-purple-900/60 text-purple-200 py-3 rounded-lg flex items-center justify-center gap-2 mb-8 transition-colors border border-purple-500/30">
              <Play className="w-4 h-4 fill-current" />
              <span>Play Audio Recording</span>
            </button>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-4 h-4 text-blue-400" />
                <h4 className="text-white font-medium">
                  Conversation Transcript
                </h4>
              </div>

              <div className="bg-[#0b1533] rounded-lg p-4 space-y-4 max-h-[400px] overflow-y-auto">
                {activeCall.transcript && activeCall.transcript.length > 0 ? (
                  activeCall.transcript.map((msg, i) => (
                    <div key={i} className="space-y-1">
                      <p
                        className={`text-xs font-semibold ${msg.role === "AI Assistant" ? "text-emerald-400" : "text-blue-400"}`}
                      >
                        {msg.role}:
                      </p>
                      <p className="text-sm text-gray-300 leading-relaxed">
                        {msg.text}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-sm text-center py-4">
                    No transcript available for this call.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
