import React, { useEffect, useState } from "react";
import { CiChat1 } from "react-icons/ci";
import { IoNotificationsOutline } from "react-icons/io5";

import { Button, Modal, ModalBody, ModalHeader } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { FiMoon, FiSun } from "react-icons/fi";

import { Card, Dropdown, DropdownItem } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import { LayoutDashboard, User, LogOut, GraduationCap, ChevronRight } from "lucide-react";

export default function Header() {

  //get user details
  const [userData , setUserData]= useState({})

  console.log(userData);
  

  let userDetails = JSON.parse(sessionStorage.getItem('userDetails'))
  console.log(userDetails);
  
  const navigate= useNavigate()

  const logOut = async()=>{
    sessionStorage.clear()
    navigate("/")
  }


  useEffect(()=>{
    setUserData(userDetails)
  },[])

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // Dark mode state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);
  return (
    <div className="fixed top-0 left-0 right-0 z-50 ue-bg-page pt-3 pb-2 transition-colors duration-300">
      <header className="ue-header bg-white w-[98%] mx-auto shadow-lg rounded-2xl border border-gray-200 ue-border px-6 py-2 flex items-center justify-between transition-colors duration-300"
      >
      {/* LEFT: Logo */}
      <div className="flex items-center gap-2">
        <div className="h-9 w-9 rounded-lg overflow-hidden shadow">
          <img
            src="/logo.png"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="ue-text-primary text-lg font-bold text-gray-800 transition-colors duration-300">UrbanEase</h1>
      </div>

      {/* MIDDLE SEARCH */}
      {/* <div className="hidden md:block w-1/3 relative">
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-10 pr-4 py-1.5 border border-gray-300 rounded-lg text-sm"
                />
                <svg
                    className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div> */}

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <button className="p-2 h-9 w-9 rounded-full bg-gray-50 dark:bg-[#1B3A5C] dark:hover:bg-[#2A4B70] transition-colors">
            <CiChat1 className="text-gray-600 dark:text-gray-300 text-lg" />
          </button>

          <button className="relative p-2 h-9 w-9 rounded-full bg-gray-50 dark:bg-[#1B3A5C] dark:hover:bg-[#2A4B70] transition-colors">
            <IoNotificationsOutline className="text-gray-600 dark:text-gray-300 text-lg" />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Dark Mode Button */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 h-9 w-9 rounded-full bg-gray-50 dark:bg-[#1B3A5C] hover:bg-gray-200 dark:hover:bg-[#2A4B70] transition flex items-center justify-center"
            title="Toggle Dark Mode"
          >
            {darkMode ? (
              <FiSun className="text-yellow-500 text-lg" />
            ) : (
              <FiMoon className="text-gray-600 text-lg" />
            )}
          </button>
        </div>

        {/* <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity">
              Sign In
            </button> */}

        {
          userData?
          <div className="relative">
            {/* TRIGGER */}
            <div 
              onClick={() => setDropdownOpen(!dropdownOpen)} 
              className="flex items-center bg-gray-100 dark:bg-[#1B3A5C] rounded-xl px-3 py-1.5 shadow-sm transition-colors cursor-pointer hover:bg-gray-200 dark:hover:bg-[#2A4B70] select-none"
            >
              <div className="flex flex-col text-right mr-3">
                <span className="font-medium text-gray-800 dark:text-gray-100 text-sm">
                  {userData.username}
                </span>
                <span className="text-xs text-gray-800 dark:text-gray-300">{userData.email}</span>
              </div>
              <div className="w-9 h-9 rounded-full overflow-hidden relative border border-transparent dark:border-[#2A4B70]">
                <img
                  src={userData.profile}
                  alt="user profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* OVERLAY FOR OUTSIDE CLICK */}
            {dropdownOpen && (
              <div className="fixed inset-0 z-40" onClick={() => setDropdownOpen(false)}></div>
            )}

            {/* DROPDOWN PANEL */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-3 w-72 bg-white dark:bg-[#1B3A5C] rounded-2xl shadow-xl border border-gray-200 dark:border-[#2A4B70] p-5 z-50 text-gray-800 dark:text-gray-200">
                
                {/* Header Profile Info */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="relative h-12 w-12 rounded-full shrink-0">
                    <img src={userData.profile} className="w-full h-full rounded-full object-cover" />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-white dark:border-[#1B3A5C] rounded-full"></span>
                  </div>
                  <div className="flex flex-col overflow-hidden">
                    <span className="font-bold text-gray-900 dark:text-white text-base truncate">{userData.username}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-300 truncate">{userData.email}</span>
                  </div>
                </div>

                {/* Menu Section */}
                <div className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3 px-1">
                  My Account
                </div>

                <div className="space-y-2">
                  <button onClick={() => { setDropdownOpen(false); navigate("/profile"); }} className="w-full flex items-center justify-between p-3.5 rounded-xl bg-gray-50 dark:bg-[#0D1F33] hover:bg-gray-100 dark:hover:bg-[#2A4B70] transition-colors border border-transparent dark:hover:border-[#386292]">
                    <div className="flex items-center gap-3">
                      <User className="w-4 h-4 text-blue-500 dark:text-blue-400" />
                      <span className="font-semibold text-gray-800 dark:text-gray-200 text-sm">Profile Settings</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                  </button>

                  <button onClick={() => { setDropdownOpen(false); logOut(); }} className="w-full flex items-center justify-between p-3.5 rounded-xl bg-gray-50 dark:bg-[#0D1F33] hover:bg-red-50 dark:hover:bg-red-900/40 transition-colors group mt-2 border border-transparent hover:border-red-200 dark:hover:border-red-900/50">
                    <div className="flex items-center gap-3">
                      <LogOut className="w-4 h-4 text-red-500" />
                      <span className="font-semibold text-red-600 dark:text-red-400 text-sm">Logout</span>
                    </div>
                  </button>
                </div>

              </div>
            )}
          </div>
        :

        <div className=" flex">
              <a
                href="/login"
                className="px-8 py-3  text-blue-100 font-semibold rounded-xl bg-blue-800 hover:bg-gray-100 hover:text-blue-800 transition"
              >
                Login
              </a>
              
            </div>
          
          
        }

        
      </div>
    </header>
    </div>
  );
}
