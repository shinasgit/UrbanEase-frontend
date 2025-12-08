import React from "react";
import Header from "../components/Header";
import UrbanFooter from "../../components/UrbanFooter";
import UsersSidebar from "../components/UsersSidebar";
import { IoCallOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
function Services() {
  return (
    <>
      {/* FIXED NAVBAR */}
      <Header />

      {/* FIXED SIDEBAR */}
      <UsersSidebar />

      {/* CONTENT AREA */}
      <div className="pt-24 pl-[260px] pr-6 pb-10 bg-gray-50 min-h-screen">
        {/* PAGE WRAPPER */}
        <div className="p-6 md:p-8 rounded-3xl shadow-xl border bg-white border-gray-100">

         {/* PAGE TITLE + DESCRIPTION */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800">
              Find Helpers
            </h1>

            <p className="text-gray-500 mt-1">
              Connect with trusted professionals like plumbers, electricians, carpenters, and mechanics
              for quick assistance anytime.
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search helpers…"
              className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

        {/* Helper Cards Row */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* Helper 1 */}
  <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 flex justify-between items-center">
    <div>
      <h2 className="text-xl font-semibold">Plumber</h2>
      <p className="text-gray-700 flex items-center gap-2">
      <CiUser className="text-lg" />
      <b>Name:</b> Ramesh Kumar
    </p>

    <p className="text-gray-700 flex items-center gap-2">
      <IoCallOutline className="text-lg" />
      <b>Phone:</b> 9876543210
    </p>
    </div>

    <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700">
      Call Now
    </button>
  </div>

  {/* Helper 2 */}
  <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 flex justify-between items-center">
    <div>
      <h2 className="text-xl font-semibold">Electrician</h2>
      <p className="text-gray-700"><b>Name:</b> Akshay Kumar</p>
      <p className="text-gray-700"><b>Phone:</b> 9123456780</p>
    </div>

    <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700">
      Call Now
    </button>
  </div>

  {/* Helper 3 */}
  <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 flex justify-between items-center">
    <div>
      <h2 className="text-xl font-semibold">Car Mechanic</h2>
      <p className="text-gray-700"><b>Name:</b> Salman Ali</p>
      <p className="text-gray-700"><b>Phone:</b> 9090909090</p>
    </div>

    <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700">
      Call Now
    </button>
  </div>

  {/* Helper 4 */}
  <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 flex justify-between items-center">
    <div>
      <h2 className="text-xl font-semibold">Plumber</h2>
      <p className="text-gray-700 flex items-center gap-2">
      <CiUser className="text-lg" />
      <b>Name:</b> Ramesh Kumar
    </p>

    <p className="text-gray-700 flex items-center gap-2">
      <IoCallOutline className="text-lg" />
      <b>Phone:</b> 9876543210
    </p>
    </div>

    <button className="bg-blue-600 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700">
      Call Now
    </button>
  </div>


</div>

        </div>
      </div>

      {/* FOOTER */}
      <UrbanFooter />
    </>
  );
}

export default Services;
