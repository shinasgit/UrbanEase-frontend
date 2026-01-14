import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";

export default function AdminHome() {
  return (
    <>
      <AdminHeader />
      <AdminSideBar />

      {/* MAIN CONTENT */}
      <main className="ml-64 mt-20 p-6 bg-gray-100 min-h-screen">
        <div className="bg-white rounded-xl shadow-lg p-6">
        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Admin Dashboard
          </h1>
          
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {[
            { title: "Users", value: "1,245" },
            { title: "Orders", value: "320" },
            { title: "Revenue", value: "₹2.4L" },
            { title: "Settings", value: "Manage" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6"
            >
              <p className="text-sm text-gray-500">{item.title}</p>
              <h2 className="text-2xl font-bold mt-2">
                {item.value}
              </h2>
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">
              Recent Activities
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>✔ New user registered</li>
              <li>✔ Order #234 completed</li>
              <li>✔ Revenue updated</li>
              <li>✔ System backup completed</li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow p-6">
            <h3 className="text-xl font-semibold mb-4">
              Quick Actions
            </h3>
            <div className="flex flex-col gap-3">
              <button className="border rounded-lg py-2">
                Add User
              </button>
              <button className="border rounded-lg py-2">
                View Reports
              </button>
              
            </div>
          </div>
        </div>
        </div>
      </main>
    </>
  );
}
