import React, { useState } from "react";
import { FilePenLine } from "lucide-react";

const Settings = () => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "Jane D.",
    email: "jane@gmail.com",
    storeName: "Ubreakifix Store",
    storeAddress: "123 Main Street, New York, NY 10001",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-700">
        <div className="flex gap-6">
          <button className="pb-3 border-b-2 border-white text-white font-medium text-sm">
            Profile
          </button>
          <button className="pb-3 border-b-2 border-transparent text-gray-400 hover:text-gray-300 font-medium text-sm">
            Password Settings
          </button>
        </div>
      </div>

      <div className="py-6">
        <p className="text-gray-200 mb-6 font-medium">Profile Image</p>

        <div className="flex items-center gap-6 mb-10">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-700 bg-gray-800">
              <img
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                alt="Profile"
                className="w-full h-full object-cover opacity-80"
              />
            </div>

            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="absolute bottom-0 right-[-90px] shadow-xl shadow-white/50 bg-slate-600/80 backdrop-blur-sm border border-slate-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 hover:bg-slate-500 transition-all"
              >
                Edit Profile
              </button>
            )}

            {isEditing && (
              <div className="absolute bottom-0 right-3 bg-[#7AA3CC] p-1.5 rounded-lg shadow-lg translate-x-1/4 translate-y-1/4">
                <FilePenLine className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
        </div>

        {isEditing ? (
          <div className="space-y-6 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-2">
                <label className="text-gray-200 text-lg font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-[#111c44] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-200 text-lg font-medium">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#111c44] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-2">
                <label className="text-gray-200 text-lg font-medium">
                  Store Name
                </label>
                <input
                  type="text"
                  name="storeName"
                  value={formData.storeName}
                  onChange={handleChange}
                  className="w-full bg-[#111c44] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-200 text-lg font-medium">
                  Store Address
                </label>
                <input
                  type="text"
                  name="storeAddress"
                  value={formData.storeAddress}
                  onChange={handleChange}
                  className="w-full bg-[#111c44] border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="flex justify-center pt-8">
              <button
                onClick={handleSave}
                className="bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 px-12 rounded-xl text-lg shadow-lg hover:shadow-emerald-500/20 transition-all"
              >
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8 max-w-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-gray-800/50">
              <span className="text-white font-medium text-lg w-48">
                Full Name:
              </span>
              <span className="text-gray-300 text-lg">{formData.fullName}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-gray-800/50">
              <span className="text-white font-medium text-lg w-48">
                Email:
              </span>
              <span className="text-gray-300 text-lg">{formData.email}</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center py-2 border-b border-gray-800/50">
              <span className="text-white font-medium text-lg w-48">
                Store Name:
              </span>
              <span className="text-gray-300 text-lg">
                {formData.storeName}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center py-2">
              <span className="text-white font-medium text-lg w-48">
                Store Address:
              </span>
              <span className="text-gray-300 text-lg">
                {formData.storeAddress}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
