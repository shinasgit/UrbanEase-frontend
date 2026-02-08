import React from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";
import { getBookingAdmin } from "../../services/allAPI";
import { useState } from "react";
import { useEffect } from "react";

function AdminBooking() {
  const [getBooking, setGetBooking] = useState([]);
  const [token, setToken] = useState("");

  const getBookingData = async (token) => {
    console.log(token);
    const updatedToken = token.replace(/"/g,"")

    const reqHeader = {
      Authorization: `Bearer ${updatedToken}`,
    };
    console.log(reqHeader);
    try {
      const response = await getBookingAdmin(reqHeader)
      console.log(response);
      setGetBooking(response?.data)
      
    } catch (error) {
      console.log(error);
    }
  };

  //sewssion storsge nn get eyynel useeffect le kodknm
  useEffect(() => {
   setToken(sessionStorage.getItem("token"))
    getBookingData(token);
  }, [token]);

  return (
    <>
      <AdminHeader />
      <AdminSideBar />

      {/* MAIN CONTENT */}
      <main className="ml-68 mt-20 p-6 bg-gray-100 min-h-[calc(100vh-4rem)]">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          {/* PAGE TITLE */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">All Bookings</h1>
          </div>

          {/* FILTER TABS */}
          <div className="flex gap-4 mb-6">
            <span className="px-4 py-2 rounded-lg bg-blue-600 text-white text-sm font-medium">
              All
            </span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm">
              Pending
            </span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm">
              Approved
            </span>
            <span className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm">
              Rejected
            </span>
          </div>

          {/* BOOKINGS TABLE */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-700">
                  <th className="px-4 py-3 text-left">User ID</th>
                  <th className="px-4 py-3 text-left">User</th>
                  <th className="px-4 py-3 text-left">Name</th>
                  <th className="px-4 py-3 text-left">Type</th>
                  {/* <th className="px-4 py-3 text-left">Date</th>
                  <th className="px-4 py-3 text-left">Duration</th> */}
                  <th className="px-4 py-3 text-left">Status</th>
                  <th className="px-4 py-3 text-left">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                {/* ROW 1 */}
                {
                  getBooking?.length>0?
                  getBooking.map((item)=>(
                    <tr>
                  <td className="px-4 py-3">{item.userID}</td>
                  <td className="px-4 py-3 font-medium text-gray-800">{item.username}</td>
                  <td className="px-4 py-3">{item.name}</td>
                  <td className="px-4 py-3">{item.type}</td>
                  {/* <td className="px-4 py-3">12/03/2025</td>
                  <td className="px-4 py-3">6 Months</td> */}
                  <td className="px-4 py-3">
                    <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <button className="text-blue-600 hover:underline text-sm">
                      View
                    </button>
                  </td>
                </tr>
                  ))
                  :
                "No Bookings Yet"
                }

                
                
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </>
  );
}

export default AdminBooking;
