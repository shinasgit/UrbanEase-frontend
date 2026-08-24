import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import UrbanFooter from "../../components/UrbanFooter";
import UsersSidebar from "../components/UsersSidebar";
import { IoCallOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GetHelpUserAPI } from "../../services/allAPI";


function Services() {

  const [token,setToken] = useState('')
  
    const [getHelp,setGetHelp]=useState([])

    const getHelper = async(token)=>{
        const updatedToken = token.replace(/"/g, "");
        const reqHeader = {
          Authorization: `Bearer ${updatedToken}`,
        };
        console.log(reqHeader);
        try {
          const response = await GetHelpUserAPI(reqHeader)
          console.log(response);
          setGetHelp(response.data)
          
        } catch (error) {
          console.log("Error"+error);
        }
      }
    
      useEffect(()=>{
        setToken(sessionStorage.getItem('token'))
        getHelper(token)
      },[token])

  return (
    <>
      {/* FIXED NAVBAR */}
      <Header />

      {/* FIXED SIDEBAR */}
      <UsersSidebar />

      {/* CONTENT AREA */}
      <div className="ue-bg-page pt-24 pl-[260px] pr-6 pb-10 bg-gray-50 min-h-screen transition-colors duration-300">
        {/* PAGE WRAPPER */}
        <div className="ue-bg-surface ue-border p-6 md:p-8 rounded-3xl shadow-xl border bg-white border-gray-100 transition-colors duration-300">

         {/* PAGE TITLE + DESCRIPTION */}
          <div className="mb-8">
            <h1 className="ue-text-primary text-3xl font-extrabold text-gray-800">
              Find Helpers
            </h1>

            <p className="ue-text-muted text-gray-500 mt-1">
              Connect with trusted professionals like plumbers, electricians, carpenters, and mechanics
              for quick assistance anytime.
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="flex justify-center mb-6">
            <input
              type="text"
              placeholder="Search helpers…"
              className="w-full md:w-1/2 px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-[#0D1F33] dark:text-gray-100 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#5BA4D4]"
            />
          </div>

        {/* Helper Cards Row */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* Helper 1 */}
  {
    getHelp?.length>0?
    getHelp.map((item)=>(
      <div className="ue-card bg-white rounded-2xl border border-gray-200 shadow p-6 flex justify-between items-center transition-colors duration-300">
    <div>
      <h2 className="ue-text-primary text-xl font-semibold">{item.jobType}</h2>
      <p className="ue-text-muted text-gray-700 flex items-center gap-2">
      <CiUser className="text-lg" />
      <b>Name:</b> {item.helpername}
    </p>

    <p className="ue-text-muted text-gray-700 flex items-center gap-2 mt-1">
      <IoCallOutline className="text-lg" />
      <b>Phone:</b> {item.number}
    </p>
    </div>

    <button className="bg-[#5BA4D4] hover:bg-[#4a90c0] text-white px-5 py-2.5 rounded-xl transition-colors">
      Call Now
    </button>
  </div>
    )):"No Helpers Available"
  }

  


</div>

        </div>
      </div>

      {/* FOOTER */}
      <UrbanFooter />
    </>
  );
}

export default Services;
