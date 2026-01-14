import React, { useState,useEffect } from "react";
import Header from '../components/Header'
import UrbanFooter from '../../components/UrbanFooter'
import UsersSidebar from '../components/UsersSidebar'
import { GetAppUserAPI } from "../../services/allAPI";


function Appliances() {

  const [token,setToken] = useState('')

  const [getApp,setGetApp]=useState([])

  const getAppliance = async(token)=>{
    const updatedToken = token.replace(/"/g, "");
    const reqHeader = {
      Authorization: `Bearer ${updatedToken}`,
    };
    console.log(reqHeader);
    try {
      const response = await GetAppUserAPI(reqHeader)
      console.log(response);
      setGetApp(response.data)
      
    } catch (error) {
      console.log("Error"+error);
    }
  }

  useEffect(()=>{
    setToken(sessionStorage.getItem('token'))
    getAppliance(token)
  },[token])

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

  {
    getApp?.length>0?
    getApp.map((item)=>(
      <div className="bg-white flex items-center gap-6 p-6 rounded-2xl border border-gray-200 shadow">
    {/* <img
      src="https://cdn-icons-png.flaticon.com/512/1048/1048949.png"
      alt="Washing Machine"
      className="w-20"/> */}

    <div className="flex-1">
      <h2 className="text-xl font-bold text-gray-900">Product:{item.product}</h2>
      <p className="text-gray-800">Brand:{item.brand}</p>
      <p className="text-gray-600 mt-1">
      {item.type}
      </p>
      <p className="text-blue-600 font-medium mt-1">Status: Available</p>
    </div>

    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl">
      Book Now
    </button>
  </div>
    )):"No Appliances Found"
  }
  

 

 
  

</div>
        

      </div>
      </div>

      {/* FOOTER */}
      <UrbanFooter />
    </>
  );
}

export default Appliances;