"use client";
import React, { useContext, useEffect } from "react";
import Header from "../components/Header";
import UrbanFooter from "../../components/UrbanFooter";
import UsersSidebar from "../components/UsersSidebar";
import { IoHomeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { FiFilter } from "react-icons/fi";
import Details from "./Details";
import { Carousel } from "flowbite-react";
import { Pagination } from "flowbite-react";
import { useState } from "react";
import { GetHouseUserAPI } from "../../services/allAPI";
import { serverURL } from "../../services/serverURL";
import  { searchContext } from "../../contextShareAPI/ContextShare";


function HouseBooking() {

  //to hold token from local storage
  const [token,setToken] = useState('')

  const [getHouseUser,setGetHouseUser] = useState([])

  //filter
  const [filterHouse,setFilterHouse] = useState([])

  //search
  
  const {searchKey,setSearchKey} = useContext(searchContext)
  console.log(searchKey);
  

  const getAllHouse = async(searchKey,token)=>{
  // const token = JSON.parse( sessionStorage.getItem("token") )
  const updatedToken = token.replace(/"/g, "");
  const reqHeader = {
      Authorization: `Bearer ${updatedToken}`,
    };
    console.log(reqHeader);
    try {
      const response = await GetHouseUserAPI(searchKey,reqHeader)
      console.log(response);
      setGetHouseUser(response.data)
      setFilterHouse(response.data)
      
    } catch (error) {
      console.log("Error"+error);
      
    }
  }

  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedProperty, setSelectedProperty] = useState("");

  const handleApplyFilter = () => {
    let filtered = [...filterHouse];
    if (selectedLocation) {
      filtered = filtered.filter(item => item.location?.toLowerCase().trim() === selectedLocation.toLowerCase().trim());
    }
    if (selectedProperty) {
      filtered = filtered.filter(item => item.propertyType?.toLowerCase().trim() === selectedProperty.toLowerCase().trim());
    }
    setGetHouseUser(filtered);
  };

  const handleResetFilter = () => {
    setSelectedLocation("");
    setSelectedProperty("");
    setGetHouseUser(filterHouse);
  };


  useEffect(()=>{
    setToken(sessionStorage.getItem('token'))
    if(token){
      getAllHouse(searchKey,token)
    }
  },[searchKey,token])

  const [currentPage, setCurrentPage] = useState(1);

const onPageChange = (page) => setCurrentPage(page);
  return (
    <div>
      {/* FIXED NAVBAR */}
      <Header />

      {/* FIXED SIDEBAR */}
      <UsersSidebar />

      {/* CONTENT AREA */}
      <div className="ue-bg-page pt-24 pl-[260px] pr-6 pb-10 bg-gray-50 min-h-screen transition-colors duration-300">
        {/* PAGE WRAPPER */}
        <div className="ue-bg-surface ue-border p-6 md:p-8 rounded-3xl shadow-xl border bg-white border-gray-100 transition-colors duration-300">
          {/* HEADER */}
          <div className="mb-8">
            <h1 className="ue-text-primary text-3xl font-extrabold text-gray-800">
              Find Housing
            </h1>
            <p className="ue-text-muted text-gray-500 mt-1">
              Explore verified hostels and apartments near your university.
            </p>
          </div>

          {/* SEARCH + FILTER */}
         <div className="flex flex-col gap-4 mb-8">
  {/* Search & Filter Button */}
  

  {/* Filter Options (UI only) */}
  <div className="mb-8">
  {/* Search & Filter */}
  <div className="flex flex-col sm:flex-row gap-4">
    <input value={searchKey}
      onChange={(e)=>setSearchKey(e.target.value)}
      type="text" 
      placeholder="Search by name or location..."
      className="w-full pl-4 pr-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-[#0D1F33] dark:text-gray-100 bg-white text-gray-900 placeholder-gray-500 rounded-lg focus:ring-2 focus:ring-[#5BA4D4]"
    />

    {/* Hidden checkbox */}
    <input type="checkbox" id="filterModal" className="hidden peer" />

    {/* Open Modal Button */}
    <label
      htmlFor="filterModal"
      className="cursor-pointer px-5 py-3 flex items-center justify-center border dark:border-gray-600 rounded-lg bg-gray-100 text-gray-800 dark:bg-[#1B3A5C] hover:bg-gray-200 dark:hover:bg-[#2A4B70] dark:text-gray-100 transition-colors"
      title="Apply Filters"
    >
      <FiFilter className="text-xl" />
    </label>

    {/* Modal Overlay */}
    <div className="fixed inset-0 bg-black/50 hidden peer-checked:flex items-center justify-center z-50">
      {/* Modal Box */}
      <div className="bg-white dark:bg-[#1B3A5C] rounded-xl shadow-xl w-full max-w-md p-6 transition-colors duration-300 border dark:border-gray-700">
        <div className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
          Apply Filters
        </div>

        {/* Location */}
        <div className="mb-4">
          <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Location</h3>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <label className="flex items-center gap-2 cursor-pointer">
              <input onChange={(e)=>setSelectedLocation(e.target.value)} checked={selectedLocation === "Kakkanad"} value="Kakkanad" type="radio" name="location" className="accent-[#5BA4D4] w-4 h-4 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
              Kakkanad
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input onChange={(e)=>setSelectedLocation(e.target.value)} checked={selectedLocation === "Kaloor"} value="Kaloor" type="radio" name="location" className="accent-[#5BA4D4] w-4 h-4 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
              Kaloor
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input onChange={(e)=>setSelectedLocation(e.target.value)} checked={selectedLocation === "Palarivattom"} value="Palarivattom" type="radio" name="location" className="accent-[#5BA4D4] w-4 h-4 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
              Palarivattom
            </label>
          </div>
        </div>

        {/* Property Type */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-700 dark:text-gray-300 mb-2">Property Type</h3>
          <div className="space-y-2 text-gray-700 dark:text-gray-300">
            <label className="flex items-center gap-2 cursor-pointer">
              <input onChange={(e)=>setSelectedProperty(e.target.value)} checked={selectedProperty === "Hostel"} value="Hostel" type="radio" name="propertyType" className="accent-[#5BA4D4] w-4 h-4 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
              Hostel
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input onChange={(e)=>setSelectedProperty(e.target.value)} checked={selectedProperty === "House"} value="House" type="radio" name="propertyType" className="accent-[#5BA4D4] w-4 h-4 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
              House
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input onChange={(e)=>setSelectedProperty(e.target.value)} checked={selectedProperty === "Flat"} value="Flat" type="radio" name="propertyType" className="accent-[#5BA4D4] w-4 h-4 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600" />
              Flat
            </label>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="flex justify-end gap-3 mt-4 border-t dark:border-gray-700 pt-4">
          <label 
            htmlFor="filterModal" onClick={handleResetFilter}
            className="cursor-pointer px-4 py-2 border dark:border-gray-600 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-[#2A4B70] transition-colors"
          >
            Reset
          </label>

          <label
            htmlFor="filterModal" onClick={handleApplyFilter}
            className="cursor-pointer px-4 py-2 bg-[#5BA4D4] text-white rounded-lg hover:bg-[#4a90c0] transition-colors shadow-sm"
          >
            Apply
          </label>
        </div>
      </div>
    </div>
  </div>
</div>

</div>


          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {/* CARD 1 */}
            {
              getHouseUser?.length>0?
              getHouseUser.map((item)=>(
                <div className="ue-card bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col transition-colors duration-300">
              <div className="h-56">
                 <div className="h-56 ">
                      <Carousel>
                        {item.uploadImage && item.uploadImage.length > 0 ? item.uploadImage.map(item=>( <img src={`${serverURL}/uploads/${item}`} alt="..." />)):
                        <h3 className="text-[#5BA4D4] flex items-center justify-center h-full">No images uploaded</h3> }
                       
                        

                      </Carousel>
                    </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                {/* TOP ROW → Hostel Name (left) + Single Room Badge (right) */}
                  <div className="flex justify-between items-start">
                    <h3 className="ue-text-primary text-lg font-bold">
                      {item.hostelName}
                    </h3>
                    <span className="ue-badge px-2 py-1 text-xs bg-gray-100 rounded-lg whitespace-nowrap">
                       {item.propertyType}
                    </span>
                  </div>

                {/* LOCATION BELOW HOSTEL NAME */}
                <p className="text-sm font-bold flex items-center gap-1 mt-1">
                  <IoLocationOutline className="text-gray-600" />
                  {item.location}
                </p>

                {/* PRICE */}
                <div className="flex items-center text-xl font-bold text-[#5BA4D4] mt-2">
                  <span className="ml-2">₹{item.rent}</span>
                  <span className="text-sm ml-1 text-gray-500">/ Month</span>
                </div>

                {/* BUTTONS */}
                <div className="flex mt-auto pt-4 w-full">
                  <Details id={item?._id} />
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
      [&_button]:bg-white dark:[&_button]:bg-[#1B3A5C]
      [&_button]:text-gray-700 dark:[&_button]:text-gray-200
      [&_button]:border-gray-200 dark:[&_button]:border-gray-600
      [&_button:hover]:bg-gray-100 dark:[&_button:hover]:bg-[#2A4B70]
      [&_button[aria-current='page']]:bg-[#5BA4D4] dark:[&_button[aria-current='page']]:bg-[#5BA4D4]
      [&_button[aria-current='page']]:text-white dark:[&_button[aria-current='page']]:text-white
      [&_button[aria-current='page']]:border-[#5BA4D4] dark:[&_button[aria-current='page']]:border-[#5BA4D4]
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
