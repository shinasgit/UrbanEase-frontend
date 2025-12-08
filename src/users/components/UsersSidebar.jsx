import React from "react";
import { FiHome, FiBox, FiUsers, FiPhone, FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";


export default function UsersSidebar() {
  return (
    <div className="fixed top-24 left-6 w-56 h-[85vh]">
      <div className="bg-white h-full p-6 rounded-3xl shadow-xl border border-gray-200 flex flex-col justify-between">

        <nav className="space-y-2">
          {/* Find Housing */}
          <Link to={"/housebook"}>
          <button 
            className="flex items-center space-x-3 px-4 py-3 w-full 
            rounded-xl text-gray-700 hover:bg-gray-100"
          >
            <FiHome className="w-5 h-5" />
            <span>Find Housing</span>
          </button>
          </Link>

          {/* Rent Appliances (Active) */}
          <Link to={"/appliancesbook"}>
          <button 
            className="flex items-center space-x-3 px-4 py-3 w-full 
            rounded-xl text-gray-700 hover:bg-gray-100"
          >
            <FiBox className="w-5 h-5" />
            <span>Rent Appliance</span>
          </button>
          </Link>

          {/* Find Helpers */}
          <Link to={"/services"}>
          <button  
            className="flex items-center space-x-3 px-4 py-3 w-full 
            rounded-xl text-gray-700 hover:bg-gray-100"
          >
            <FiUsers className="w-5 h-5" />
            <span>Find Helpers</span>
          </button></Link>

          {/* Local Helplines */}
          <Link to={"/helpline"}>
          <button
            className="flex items-center space-x-3 px-4 py-3 w-full 
            rounded-xl text-gray-700 hover:bg-gray-100"
          >
            <FiPhone className="w-5 h-5" />
            <span>Local Helplines</span>
          </button></Link>
        </nav>

        {/* DARK MODE */}
        <div className="pt-4 border-t border-gray-100">
          <button className="w-full flex items-center justify-between p-3 rounded-xl text-gray-600 hover:bg-gray-100">
            <div className="flex items-center gap-3">
              <FiMoon className="w-5 h-5" />
              <span>Dark Mode</span>
            </div>

            <div className="relative w-10 h-5 bg-gray-200 rounded-full">
              <div className="absolute w-4 h-4 bg-gray-400 rounded-full top-0.5 left-0.5"></div>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
