import React from "react";
import Header from "../components/Header";
import UrbanFooter from "../../components/UrbanFooter";
import UsersSidebar from "../components/UsersSidebar";
import { IoHomeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import Details from "./Details";
import { Carousel } from "flowbite-react";



function HouseBooking() {
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
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-56">
                 <div className="h-56 ">
                      <Carousel>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                      </Carousel>
                    </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                {/* TOP ROW → Hostel Name (left) + Single Room Badge (right) */}
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">
                    The Scholars' Hub Hostel
                  </h3>
                  <span className="px-2 py-1 text-xs bg-gray-100 rounded-lg whitespace-nowrap">
                    Single Room
                  </span>
                </div>

                {/* LOCATION BELOW HOSTEL NAME */}
                <p className="text-sm font-bold flex items-center gap-1 mt-1">
                  <IoLocationOutline className="text-gray-600" />
                  Kakkanad
                </p>

                {/* PRICE */}
                <div className="flex items-center text-xl font-bold text-blue-600 mt-2">
                  <span className="ml-2">₹5000</span>
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

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-56">
                 <div className="h-56 ">
                      <Carousel>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                      </Carousel>
                    </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                {/* TOP ROW → Hostel Name (left) + Single Room Badge (right) */}
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">
                    The Scholars' Hub Hostel
                  </h3>
                  <span className="px-2 py-1 text-xs bg-gray-100 rounded-lg whitespace-nowrap">
                    Single Room
                  </span>
                </div>

                {/* LOCATION BELOW HOSTEL NAME */}
                <p className="text-sm font-bold flex items-center gap-1 mt-1">
                  <IoLocationOutline className="text-gray-600" />
                  Kakkanad
                </p>

                {/* PRICE */}
                <div className="flex items-center text-xl font-bold text-blue-600 mt-2">
                  <span className="ml-2">₹5000</span>
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

            {/* CARD 1 */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-56">
                 <div className="h-56 ">
                      <Carousel>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                      </Carousel>
                    </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                {/* TOP ROW → Hostel Name (left) + Single Room Badge (right) */}
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">
                    The Scholars' Hub Hostel
                  </h3>
                  <span className="px-2 py-1 text-xs bg-gray-100 rounded-lg whitespace-nowrap">
                    Single Room
                  </span>
                </div>

                {/* LOCATION BELOW HOSTEL NAME */}
                <p className="text-sm font-bold flex items-center gap-1 mt-1">
                  <IoLocationOutline className="text-gray-600" />
                  Kakkanad
                </p>

                {/* PRICE */}
                <div className="flex items-center text-xl font-bold text-blue-600 mt-2">
                  <span className="ml-2">₹5000</span>
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

            {/* CARD 4 */}
            
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
              <div className="h-56">
                 <div className="h-56 ">
                      <Carousel>
                        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
                        <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
                      </Carousel>
                    </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                {/* TOP ROW → Hostel Name (left) + Single Room Badge (right) */}
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold">
                    The Scholars' Hub Hostel
                  </h3>
                  <span className="px-2 py-1 text-xs bg-gray-100 rounded-lg whitespace-nowrap">
                    Single Room
                  </span>
                </div>

                {/* LOCATION BELOW HOSTEL NAME */}
                <p className="text-sm font-bold flex items-center gap-1 mt-1">
                  <IoLocationOutline className="text-gray-600" />
                  Kakkanad
                </p>

                {/* PRICE */}
                <div className="flex items-center text-xl font-bold text-blue-600 mt-2">
                  <span className="ml-2">₹5000</span>
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
          </div>
          {/* FOOTER */}
          <UrbanFooter />
        </div>
      </div>
    </div>
  );
}

export default HouseBooking;
