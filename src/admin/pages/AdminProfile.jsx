import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";

export default function AdminProfile() {
  return (
    <>
      <AdminHeader />
      <AdminSideBar />

      {/* MAIN CONTENT */}
      <main className="ml-64 mt-18 p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-sm shadow overflow-hidden">

          {/* Top Section */}
          <div className="bg-gray-800 p-6">
            <h2 className="text-2xl font-bold text-white">
              Edit Admin Profile
            </h2>
            <p className="text-blue-100 text-sm">
              Update your personal information
            </p>
          </div>

          {/* Content */}
          <div className="p-8">

            {/* Profile Image */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xl font-bold">
                A
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  Admin User
                </h3>
                <p className="text-sm text-gray-500">
                  Administrator Account
                </p>
                <button className="mt-2 text-sm text-blue-600 hover:underline">
                  Change Profile Picture
                </button>
              </div>
            </div>

            {/* Form */}
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter full name"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter email"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="Leave blank to keep current password"
                  className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </form>

            {/* Buttons */}
            <div className="flex justify-end gap-4 mt-8">
              <button className="px-6 py-2 rounded-lg border text-gray-600 hover:bg-gray-100">
                Cancel
              </button>
              <button className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700">
                Save Changes
              </button>
            </div>

          </div>
        </div>
      </main>
    </>
  );
}
