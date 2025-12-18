import React from "react";
import Header from "../components/Header";

function Profile() {
  return (
    <>
      <Header />

      {/* LEFT PROFILE SIDEBAR */}
      <aside className="fixed top-24 left-4 w-[270px] h-[85vh] bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-xl font-bold text-blue-900">
          Personal Info
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Manage your account details
        </p>

        {/* Avatar */}
        <div className="flex flex-col items-center relative">
          <img
            src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"
            alt="profile"
            className="w-28 h-28 rounded-full shadow-lg"
          />
          <button className="absolute right-6 bottom-2 bg-teal-500 text-white p-2 rounded-full shadow hover:bg-teal-600">
            ✎
          </button>
        </div>

        {/* Info */}
        <div className="mt-6 space-y-4">
          <div>
            <p className="text-sm font-semibold text-gray-600">Full Name</p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-2 font-medium text-gray-700">
              Shinas
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-600">User ID</p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-2 text-sm text-gray-700 break-all">
              6921bf914d7950b1e2304040
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-gray-600">Email</p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-2 text-sm text-gray-700">
              shinasshoukath756@gmail.com
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex justify-center mt-6">
            <button
              className="
                bg-orange-500 hover:bg-orange-600
                text-white font-semibold
                px-4 py-2 rounded-xl
                shadow-md transition
                active:scale-95
              "
            >
              Edit Profile
            </button>
          </div>
        </div>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="pt-24 ml-[300px] pr-6 pb-10  min-h-screen">
        {/* PAPER / CARD */}
        <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-8 min-h-[400px]">
          

          <div className="space-y-8">

  {/* PAGE TITLE */}
  <div>
    <h1 className="text-2xl font-bold text-gray-800">My Bookings</h1>
    <p className="text-sm text-gray-500">
      View your house and appliance booking history
    </p>
  </div>

  {/* SUMMARY CARDS */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white rounded-2xl shadow p-5 ">
      <h3 className="text-sm text-gray-500">Total Bookings</h3>
      <p className="text-2xl font-bold text-blue-600">12</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 ">
      <h3 className="text-sm text-gray-500">House Bookings</h3>
      <p className="text-2xl font-bold text-green-600">7</p>
    </div>

    <div className="bg-white rounded-2xl shadow p-5 ">
      <h3 className="text-sm text-gray-500">Appliance Bookings</h3>
      <p className="text-2xl font-bold text-orange-500">5</p>
    </div>
  </div>

  {/* HOUSE BOOKINGS */}
  <div className="bg-white rounded-3xl shadow-xl  p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
       House Booking History
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="px-4 py-3 text-left">House Name</th>
            <th className="px-4 py-3 text-left">Location</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody className="">
          <tr>
            <td className="px-4 py-3 font-medium">Green Villa</td>
            <td className="px-4 py-3">Kochi</td>
            <td className="px-4 py-3">12 Jun 2025</td>
            <td className="px-4 py-3">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Confirmed
              </span>
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3 font-medium">City Heights</td>
            <td className="px-4 py-3">Trivandrum</td>
            <td className="px-4 py-3">02 May 2025</td>
            <td className="px-4 py-3">
              <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
                Pending
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  {/* APPLIANCE BOOKINGS */}
  <div className="bg-white rounded-3xl shadow-xl  p-6">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">
      Appliance Booking History
    </h2>

    <div className="overflow-x-auto">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-600">
            <th className="px-4 py-3 text-left">Appliance</th>
            <th className="px-4 py-3 text-left">Brand</th>
            <th className="px-4 py-3 text-left">Date</th>
            <th className="px-4 py-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody className="">
          <tr>
            <td className="px-4 py-3 font-medium">Washing Machine</td>
            <td className="px-4 py-3">LG</td>
            <td className="px-4 py-3">15 Jun 2025</td>
            <td className="px-4 py-3">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                Delivered
              </span>
            </td>
          </tr>

          <tr>
            <td className="px-4 py-3 font-medium">Refrigerator</td>
            <td className="px-4 py-3">Samsung</td>
            <td className="px-4 py-3">20 May 2025</td>
            <td className="px-4 py-3">
              <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full">
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
