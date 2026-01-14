"use client";
import React, { useEffect } from "react";

import Header from "../components/Header";
import UrbanFooter from "../../components/UrbanFooter";
import UsersSidebar from "../components/UsersSidebar";
import { IoHomeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Details from "./Details";
import { Carousel } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { GetHouseUserAPI } from "../../services/allAPI";
import { serverURL } from "../../services/serverURL";



function HouseBooking() {

  //to hold token from local storgar
  const [token,setToken] = useState('')

  const[getHouseUser,setGetHouseUser] = useState([])

  const getAllHouse = async(token)=>{
    // const token = JSON.parse( sessionStorage.getItem("token") )
    const updatedToken = token.replace(/"/g, "");
    const reqHeader = {
      Authorization: `Bearer ${updatedToken}`,
    };
    console.log(reqHeader);
    try {
      const response = await GetHouseUserAPI(reqHeader)
      console.log(response);
      setGetHouseUser(response.data)
      
    } catch (error) {
      console.log("Error"+error);
      
    }
  }

  useEffect(()=>{
    setToken(sessionStorage.getItem('token'))
    getAllHouse(token)
  },[token])

  const [currentPage, setCurrentPage] = useState(1);

const onPageChange = (page) => setCurrentPage(page);
  return (
    <div>
      {/* FIXED NAVBAR */}
      <Header />

      {/* FIXED SIDEBAR */}
      <UsersSidebar />

      {/* CONTENT AREA */}
      <div className="pt-24 pl-[260px] pr-6 pb-10 bg-gray-50 min-h-screen">
        {/* PAGE WRAPPER */}
        <div className="p-6 md:p-8 rounded-3xl shadow-xl border bg-white border-gray-100">
          {/* HEADER */}
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800">
              Find Housing
            </h1>
            <p className="text-gray-500 mt-1">
              Explore verified hostels and apartments near your university.
            </p>
          </div>

          {/* SEARCH + FILTER */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative w-full sm:flex-grow">
              <input
                type="text"
                placeholder="Search by name or location..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <button className="px-4 py-2 border rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center">
              <span className="ml-2">Apply Filters</span>
            </button>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {/* CARD 1 */}
            {
              getHouseUser?.length>0?
              getHouseUser.map((item)=>(
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-56">
                 <div className="h-56 ">
                      <Carousel>
                        {item.uploadImage && item.uploadImage.length > 0 ? item.uploadImage.map(item=>( <img src={`${serverURL}/uploads/${item}`} alt="..." />)):
                        <h3>No images</h3> }
                       
                        

                      </Carousel>
                    </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                {/* TOP ROW → Hostel Name (left) + Single Room Badge (right) */}
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">
                    {item.hostelName}
                  </h3>
                  <span className="px-2 py-1 text-xs bg-gray-100 rounded-lg whitespace-nowrap">
                     {item.propertyType}
                  </span>
                </div>

                {/* LOCATION BELOW HOSTEL NAME */}
                <p className="text-sm font-bold flex items-center gap-1 mt-1">
                  <IoLocationOutline className="text-gray-600" />
                  {item.location}
                </p>

                {/* PRICE */}
                <div className="flex items-center text-xl font-bold text-blue-600 mt-2">
                  <span className="ml-2">₹{item.rent}</span>
                  <span className="text-sm ml-1 text-gray-500">/ Month</span>
                </div>

                {/* BUTTONS */}
                <div className="flex gap-2 mt-auto pt-4">
  <button className="flex-grow bg-blue-600 text-white py-1 rounded-lg flex items-center justify-center">
    <Details />
  </button>
</div>

              </div>
            </div>
              )):
              "No Houses Available"
            }

          </div>
              <div className="flex justify-center">
  <Pagination
    currentPage={currentPage}
    totalPages={100}
    onPageChange={onPageChange}
    className="
      [&_button]:bg-blue-600
      [&_button]:text-white
      [&_button]:border-blue-800
      [&_button:hover]:bg-blue-900
      [&_button[aria-current='page']]:bg-blue-900
      [&_button[aria-current='page']]:text-white
    "
  />
</div>


          {/* FOOTER */}
          <UrbanFooter />
        </div>
      </div>

      
    </div>
  );
}

export default HouseBooking;
