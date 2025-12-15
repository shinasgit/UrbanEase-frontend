import React from 'react'
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";


function AdminProviders() {
  return (
    <>
    <AdminHeader />
      <AdminSideBar />

      {/* MAIN CONTENT */}
      <main className="ml-68 mt-20 p-6 bg-gray-100 min-h-[calc(100vh-4rem)]">
         <div className="bg-white rounded-xl shadow p-6">
            <p className="text-gray-600">Admin provider content goes here</p>
        
         </div>
      </main>
    </>
  )
}

export default AdminProviders