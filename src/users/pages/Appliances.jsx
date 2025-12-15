import React from "react";
import Header from '../components/Header'
import UrbanFooter from '../../components/UrbanFooter'
import UsersSidebar from '../components/UsersSidebar'

function Appliances() {
  return (
    <>
      {/* FIXED NAVBAR */}
      <Header />

      {/* FIXED SIDEBAR */}
      <UsersSidebar />

      {/* CONTENT AREA */}
      <div className="pt-24 pl-[260px] pr-6 pb-10 bg-gray-50 min-h-screen ">
         {/* PAGE WRAPPER */}
        <div className="p-6 md:p-8 rounded-3xl shadow-xl border bg-white border-gray-100">

             <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800">
              Rent Appliances
            </h1>
            <p className="text-gray-500 mt-1">
              Choose from essential home appliances like washing machines, refrigerators, and gas stoves — delivered and set up at your location.
            </p>
          </div>

       {/* 📦 APPLIANCE HORIZONTAL CARDS */}
<div className="space-y-6 mt-6">

  {/* Washing Machine */}
  <div className="bg-white flex items-center gap-6 p-6 rounded-2xl border border-gray-200 shadow">
    {/* <img
      src="https://cdn-icons-png.flaticon.com/512/1048/1048949.png"
      alt="Washing Machine"
      className="w-20"/> */}

    <div className="flex-1">
      <h2 className="text-xl font-bold text-gray-900">Washing Machine</h2>
      <p className="text-gray-800">Brand:LG</p>
      <p className="text-gray-600 mt-1">
      Semi-Automatic 
      </p>
      <p className="text-blue-600 font-medium mt-1">Status: Available</p>
    </div>

    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl">
      Book Now
    </button>
  </div>

  {/* wash 2  */}
  <div className="bg-white flex items-center gap-6 p-6 rounded-2xl border border-gray-200 shadow">
    {/* <img
      src="https://cdn-icons-png.flaticon.com/512/1048/1048949.png"
      alt="Washing Machine"
      className="w-20"
    /> */}

    <div className="flex-1">
      <h2 className="text-xl font-bold text-gray-900">Washing Machine</h2>
      <p className="text-gray-800">Brand:LG</p>
      <p className="text-gray-600 mt-1">
        Automatic
      </p>
      <p className="text-blue-600 font-medium mt-1">Status: Available</p>
    </div>

    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl">
      Book Now
    </button>
  </div>

  {/* Refrigerator */}
  <div className="bg-white flex items-center gap-6 p-6 rounded-2xl border border-gray-200 shadow">
    {/* <img
      src="https://cdn-icons-png.flaticon.com/512/1047/1047716.png"
      alt="Refrigerator"
      className="w-20"
    /> */}

    <div className="flex-1">
      <h2 className="text-xl font-bold text-gray-900">Refrigerator</h2>
      <p className="text-gray-800">Brand:LG</p>
      <p className="text-gray-600 mt-1">
        Single Door / Double Door / Mini-Fridge models.
      </p>
      <p className="text-green-600 font-medium mt-1">Status: Limited Stock</p>
    </div>

    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl">
      Book Now
    </button>
  </div>

  {/* Stove / Gas Cylinder */}
  <div className="bg-white flex items-center gap-6 p-6 rounded-2xl border border-gray-200 shadow">
    {/* <img
      src=""
      alt="Stove"
      className="w-20"
    /> */}

    <div className="flex-1">
      <h2 className="text-xl font-bold text-gray-900">Stove / Gas Cylinder</h2>
      <p className="text-gray-600 mt-1">
        Single Burner / Double Burner + Cylinder connection.
      </p>
      <p className="text-orange-600 font-medium mt-1">Status: Few Left</p>
    </div>

    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl">
      Book Now
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

export default Appliances;