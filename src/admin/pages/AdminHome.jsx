import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";

function AdminHome() {
  return (
    <>
      <AdminHeader />
      <AdminSideBar />

      <main className="
        ml-64 mt-16
        p-6
        bg-gray-100
        min-h-screen
      ">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 m-5">
          Dashboard Overview
        </h1>

       

        {/* TABLE / CONTENT */}
        <div className="bg-white rounded-lg shadow p-6 ml-3">
          <h2 className="text-lg font-semibold mb-4">
            Recent Activities
          </h2>
           {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-sm text-gray-500">Total Users</p>
            <h2 className="text-2xl font-bold mt-2">1,245</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-sm text-gray-500">Service Providers</p>
            <h2 className="text-2xl font-bold mt-2">312</h2>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <p className="text-sm text-gray-500">Bookings</p>
            <h2 className="text-2xl font-bold mt-2">856</h2>
          </div>
        </div>
        </div>
      </main>
    </>
  );
}

export default AdminHome;
