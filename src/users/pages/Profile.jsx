import React from "react";
import Header from "../components/Header";
import {useEffect , useState } from "react";

function Profile() {

  const [userData , setUserData]= useState({})
  
    console.log(userData);
    
  
    let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
    console.log(userDetails);

    useEffect(()=>{
        setUserData(userDetails)
      },[])

  return (
    <>
      <Header />

      {/* LEFT PROFILE SIDEBAR */}
      <aside className="fixed top-24 left-4 w-[270px] h-[85vh] bg-white dark:bg-[#1B3A5C] rounded-2xl shadow-lg border border-transparent dark:border-[#2A4B70] p-6 transition-colors duration-300">
        <h2 className="text-xl font-bold text-blue-900 dark:text-white">
          Personal Info
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-300 mb-6">
          Manage your account details
        </p>

        {/* Avatar */}
        <div className="flex flex-col items-center relative">
          <img
            src={userData.profile}
            alt="profile"
            className="w-28 h-28 rounded-full shadow-lg"
          />
          <button className="absolute right-6 bottom-2 bg-teal-500 text-white p-2 rounded-full shadow hover:bg-teal-600 transition">
            ✎
          </button>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-4">
          <div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Full Name</p>
            <div className="bg-blue-50 dark:bg-[#0D1F33] border border-blue-200 dark:border-[#2A4B70] rounded-xl px-4 py-2 font-medium text-gray-700 dark:text-gray-200 transition-colors">
              {userData.username}
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-600 dark:text-gray-300">Email</p>
            <div className="bg-blue-50 dark:bg-[#0D1F33] border border-blue-200 dark:border-[#2A4B70] rounded-xl px-4 py-2 text-sm text-gray-700 dark:text-gray-200 transition-colors">
              {userData.email}
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="mt-8 border-t border-gray-100 dark:border-[#2A4B70] pt-6 space-y-2">
            <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">Community</h3>
            <button className="w-full text-left px-4 py-2.5 rounded-xl bg-blue-50 text-blue-700 dark:bg-[#2A4B70] dark:text-blue-300 font-medium transition-colors">
              My Listings
            </button>
            <button className="w-full text-left px-4 py-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#0D1F33] font-medium transition-colors">
              Sell Item
            </button>
            <button className="w-full text-left px-4 py-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#0D1F33] font-medium transition-colors">
              Rent Item
            </button>
            
            <h3 className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3 mt-6">Activity</h3>
            <button className="w-full text-left px-4 py-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#0D1F33] font-medium transition-colors">
              My Rental Requests
            </button>
            <button className="w-full text-left px-4 py-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#0D1F33] font-medium transition-colors">
              My Orders
            </button>
            <button className="w-full text-left px-4 py-2.5 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-[#0D1F33] font-medium transition-colors">
              My Earnings
            </button>
          </div>
        </div>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="pt-24 ml-[300px] pr-6 pb-10 min-h-screen transition-colors duration-300">
        {/* PAPER / CARD */}
        <div className="bg-white dark:bg-[#1B3A5C] rounded-xl shadow-xl border border-gray-100 dark:border-[#2A4B70] p-8 min-h-[400px] transition-colors duration-300">
          

          <div className="space-y-8">

  {/* PAGE TITLE */}
  <div>
    <h1 className="text-2xl font-bold text-gray-800 dark:text-white">My Bookings</h1>
    <p className="text-sm text-gray-500 dark:text-gray-300">
      View your house and appliance booking history
    </p>
  </div>

  {/* SUMMARY CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white dark:bg-[#0D1F33] rounded-2xl shadow p-5 border border-transparent dark:border-[#2A4B70] transition-colors">
      <h3 className="text-sm text-gray-500 dark:text-gray-300">Total Bookings</h3>
      <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">12</p>
    </div>

    <div className="bg-white dark:bg-[#0D1F33] rounded-2xl shadow p-5 border border-transparent dark:border-[#2A4B70] transition-colors">
      <h3 className="text-sm text-gray-500 dark:text-gray-300">House Bookings</h3>
      <p className="text-2xl font-bold text-green-600 dark:text-green-400">7</p>
    </div>

    <div className="bg-white dark:bg-[#0D1F33] rounded-2xl shadow p-5 border border-transparent dark:border-[#2A4B70] transition-colors">
      <h3 className="text-sm text-gray-500 dark:text-gray-300">Appliance Bookings</h3>
      <p className="text-2xl font-bold text-orange-500 dark:text-orange-400">5</p>
    </div>
  </div>

  {/* HOUSE BOOKINGS */}
  <div className="bg-white dark:bg-[#0D1F33] rounded-3xl shadow-xl p-6 border border-transparent dark:border-[#2A4B70] transition-colors">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
       House Booking History
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-[#1B3A5C] text-gray-600 dark:text-gray-300">
            <th className="px-4 py-3 text-left rounded-l-lg">House Name</th>
            <th className="px-4 py-3 text-left">Location</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left rounded-r-lg">Status</th>
          </tr>
        </thead>

        <tbody className="dark:text-gray-300 divide-y divide-gray-100 dark:divide-[#2A4B70]/50">
          <tr>
            <td className="px-4 py-3 font-medium">Green Villa</td>
            <td className="px-4 py-3">Kochi</td>
            <td className="px-4 py-3">12 Jun 2025</td>
            <td className="px-4 py-3">
              <span className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 px-3 py-1 rounded-full whitespace-nowrap">
                Confirmed
              </span>
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3 font-medium">City Heights</td>
            <td className="px-4 py-3">Trivandrum</td>
            <td className="px-4 py-3">02 May 2025</td>
            <td className="px-4 py-3">
              <span className="bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-400 px-3 py-1 rounded-full whitespace-nowrap">
                Pending
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* APPLIANCE BOOKINGS */}
  <div className="bg-white dark:bg-[#0D1F33] rounded-3xl shadow-xl p-6 border border-transparent dark:border-[#2A4B70] transition-colors">
    <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
      Appliance Booking History
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 dark:bg-[#1B3A5C] text-gray-600 dark:text-gray-300">
            <th className="px-4 py-3 text-left rounded-l-lg">Appliance</th>
            <th className="px-4 py-3 text-left">Brand</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left rounded-r-lg">Status</th>
          </tr>
        </thead>

        <tbody className="dark:text-gray-300 divide-y divide-gray-100 dark:divide-[#2A4B70]/50">
          <tr>
            <td className="px-4 py-3 font-medium">Washing Machine</td>
            <td className="px-4 py-3">LG</td>
            <td className="px-4 py-3">15 Jun 2025</td>
            <td className="px-4 py-3">
              <span className="bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400 px-3 py-1 rounded-full whitespace-nowrap">
                Delivered
              </span>
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3 font-medium">Refrigerator</td>
            <td className="px-4 py-3">Samsung</td>
            <td className="px-4 py-3">20 May 2025</td>
            <td className="px-4 py-3">
              <span className="bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400 px-3 py-1 rounded-full whitespace-nowrap">
                Cancelled
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

</div>

        </div>
      </main>
    </>
  );
}

export default Profile;
