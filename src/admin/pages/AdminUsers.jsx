import React, { useEffect,useState } from "react";
import AdminHeader from "../components/AdminHeader";
import AdminSideBar from "../components/AdminSideBar";
import { TabItem, Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { GetUserAdminAPI } from "../../services/allAPI";


function AdminUsers() {

  const [token,setToken] = useState("")
   const [adminUser,setAdminUser] = useState([])

   const getAdminUser = async()=>{
    const token = JSON.parse( sessionStorage.getItem("token") )
    // const updatedToken = token.replace(/"/g, "");
    const reqHeader = {
      Authorization: `Bearer ${token}`,
    };
    console.log(reqHeader);
    try {
      const response = await GetUserAdminAPI(reqHeader)
      console.log(response);
      setAdminUser(response?.data)
      console.log(setAdminUser);
    } catch (error) {
      console.log("Error"+error);
      
    }
   }

   useEffect(()=>{
    getAdminUser()
   },[])

  return (
    <>
      <AdminHeader />
      <AdminSideBar />

      {/* MAIN CONTENT */}
      <main className="ml-68 mt-20 p-6 bg-gray-100 min-h-[calc(100vh-4rem)]">
        <div className="bg-white rounded-xl shadow p-6">
          <h1 className="text-gray-600">User</h1>
          <Tabs
            aria-label="Tabs with icons"
            variant="underline"
            className="flex justify-center"
          >
            <TabItem active title="Profile" icon={HiUserCircle}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-gray-50 border-b">
                    <tr className="text-sm font-semibold text-gray-600">
                      <th className="px-6 py-4">ID</th>
                      <th className="px-6 py-4">NAME</th>
                      <th className="px-6 py-4">EMAIL</th>
                      <th className="px-6 py-4">ROLE</th>

                      <th className="px-6 py-4">ACTIONS</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y">
                    {/* Row 1 */}
                    {
                      adminUser?.length>0?
                      adminUser.map((item)=>(
                        <tr className="text-gray-700">
                      <td className="px-6 py-4 font-medium">{item._id}</td>
                      <td className="px-6 py-4">{item.username}</td>
                      <td className="px-6 py-4">{item.email}</td>
                      <td className="px-6 py-4">{item.role}</td>

                      <td className="px-6 py-4 space-x-4">
                        <span className="text-blue-600 cursor-pointer hover:underline">
                          Edit
                        </span>
                        <span className="text-red-600 cursor-pointer hover:underline">
                          Delete
                        </span>
                      </td>
                    </tr>
                      )):
                      "No Users Found"
                    }
                  </tbody>
                </table>
              </div>
            </TabItem>
            <TabItem title="Dashboard" icon={MdDashboard}>
              Clicking another tab will toggle the visibility of this one for
              the next. The tab JavaScript swaps classes to control the content
              visibility and styling.
            </TabItem>
          </Tabs>
        </div>
      </main>
    </>
  );
}

export default AdminUsers;
