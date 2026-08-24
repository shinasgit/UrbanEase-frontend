import React from "react";
import { FiHome, FiBox, FiUsers, FiPhone, FiTruck, FiShoppingBag } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

export default function UsersSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const getBtnClass = (path) => {
    const isActive = currentPath === path;
    const baseClass = "flex items-center space-x-3 px-4 py-3 w-full rounded-xl transition-colors duration-200";
    
    if (isActive) {
      return `${baseClass} bg-[#5BA4D4] text-white shadow-md`;
    }
    return `${baseClass} ue-sidebar-btn text-gray-700 hover:bg-gray-100`;
  };

  return (
    <div className="fixed top-24 left-4 w-56 h-[85vh]">
      <div className="ue-sidebar bg-white h-full p-6 rounded-3xl shadow-xl border border-gray-200 flex flex-col justify-between transition-colors duration-300">

        <nav className="space-y-2">
          {/* Find Housing */}
          <Link to={"/housebook"}>
          <button className={getBtnClass("/housebook")}>
            <FiHome className="w-5 h-5" />
            <span>Find Housing</span>
          </button>
          </Link>

          {/* Rent Appliances */}
          <Link to={"/appliancesbook"}>
          <button className={getBtnClass("/appliancesbook")}>
            <FiBox className="w-5 h-5" />
            <span>Rent Appliance</span>
          </button>
          </Link>

          {/* Find Helpers */}
          <Link to={"/services"}>
          <button className={getBtnClass("/services")}>
            <FiUsers className="w-5 h-5" />
            <span>Find Helpers</span>
          </button></Link>

          {/* Local Helplines */}
          <Link to={"/helpline"}>
          <button className={getBtnClass("/helpline")}>
            <FiPhone className="w-5 h-5" />
            <span>Local Helplines</span>
          </button></Link>

          {/* Rental Vehicles */}
          <Link to={"/vehicle-rentals"}>
          <button className={getBtnClass("/vehicle-rentals")}>
            <FiTruck className="w-5 h-5" />
            <span>Rental Vehicles</span>
          </button></Link>

          {/* Community Marketplace */}
          <Link to={"/community-marketplace"}>
          <button className={getBtnClass("/community-marketplace")}>
            <FiShoppingBag className="w-5 h-5" />
            <span>Community Market</span>
          </button></Link>
        </nav>

      </div>
    </div>
  );
}
