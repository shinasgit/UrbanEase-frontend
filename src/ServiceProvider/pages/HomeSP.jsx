import React from "react";
import { Tabs, TabItem, TextInput } from "flowbite-react";
import { HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import { HiAdjustments } from "react-icons/hi";

import HeaderSP from "../components/HeaderSP";
import { IoHomeOutline } from "react-icons/io5";
import { PiWashingMachine } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { FileInput, HelperText, Label } from "flowbite-react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

function HomeSP() {
  // const inputStyle =
  //   "text-black bg-white focus:ring-blue-500 focus:border-blue-500";

  




  return (
    <>
      <HeaderSP />

      <div className="pt-28 px-6 pb-10 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Service Provider Dashboard
        </h1>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <Tabs
            aria-label="Main tabs"
            variant="underline"
            className="flex justify-center"
          >
            {/* HOUSE MANAGE */}
            <TabItem title="House Manage" icon={IoHomeOutline} >
              <div className="mt-6 p-6 rounded-xl bg-gray-50">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  House Manage
                </h2>

                <Tabs
                  aria-label="House Tabs"
                  variant="underline"
                  className="flex justify-center"
                  
                >
                  {/* HOUSE DATA */}
                  <TabItem title="House Data" icon={HiUserCircle}>
                    <div className="max-w-md mx-auto text-gray-800 mt-6">
                      <TextInput style={{ color: "black" }} placeholder="Hostel Name" />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Location" />
                      {/* // inputClassName={inputStyle} */}
                      <TextInput style={{ color: "black" }} className="mt-3" type="number" placeholder="Rent" />
                      <TextInput style={{ color: "black" }} className="mt-3" type="number" placeholder="Deposit" />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Property Type" />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Nearby Metro" />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Nearby Bus Stop" />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="No of Vacancy" />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Furnishing Type" />
                      <FileInput style={{ color: "black" }} className="my-3" id="file-upload-helper-text" />
                      <HelperText style={{ color: "black" }} className="mt-1">
                        SVG, PNG, JPG or GIF (MAX. 800x400px).
                      </HelperText>
                      <div className="flex justify-center mt-4">
                        <Stack direction="row" spacing={2}>
                          <Button variant="contained" color="success">
                            Submit
                          </Button>
                        </Stack>
                      </div>
                    </div>
                  </TabItem>

                  {/* DASHBOARD */}
                  <TabItem title="Bookings" icon={HiClipboardList}>
  <div className="mt-6 bg-white rounded-xl shadow p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">
      House Bookings
    </h3>

    <table className="w-full text-sm text-left">
      <thead className="bg-gray-100 text-gray-600">
        <tr>
          <th className="px-4 py-2">Tenant</th>
          <th className="px-4 py-2">House</th>
          <th className="px-4 py-2">Date</th>
          {/* <th className="px-4 py-2">Status</th> */}
        </tr>
      </thead>

      <tbody className="">
        <tr>
          <td className="px-4 py-2">Rahul</td>
          <td className="px-4 py-2">Green Villa</td>
          <td className="px-4 py-2">12 Jan 2025</td>
          {/* <td className="px-4 py-2">
            <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
              Confirmed
            </span>
          </td> */}
        </tr>

        <tr>
          <td className="px-4 py-2">Anu</td>
          <td className="px-4 py-2">Sunrise Hostel</td>
          <td className="px-4 py-2">15 Jan 2025</td>
          {/* <td className="px-4 py-2">
            <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
              Pending
            </span>
          </td> */}
        </tr>
      </tbody>
    </table>
  </div>
</TabItem>

                </Tabs>
              </div>
            </TabItem>

            {/* APPLIANCE */}
            <TabItem title="Appliance Manage" icon={PiWashingMachine}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-800">
                  Appliance Manage
                </h2>
                <Tabs aria-label="Tabs with icons" variant="underline" className="flex justify-center">

                  <TabItem active title="Appliance" icon={HiUserCircle}>
                    <div className="max-w-md mx-auto text-gray-800 mt-6">
                      <TextInput style={{ color: "black" }} placeholder="Product " />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Brand" />
                      {/* <TextInput style={{ color: "black" }} className="mt-3" type="number" placeholder="Working" /> */}
                      <TextInput style={{ color: "black" }} className="mt-3"  placeholder="Status" />
                      <div className="flex justify-center mt-4">
                        <Stack direction="row" spacing={2}>
                          <Button variant="contained" color="success">
                            Submit
                          </Button>
                        </Stack>
                      </div>
                      </div>
                      
                  </TabItem>

                 <TabItem title="Bookings" icon={HiClipboardList}>
  <div className="mt-6 bg-white rounded-2xl shadow-md p-6">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">
    Appliance Bookings
  </h3>

  <div className="overflow-x-auto">
    <table className="w-full text-sm text-left border-collapse">
      <thead className="bg-gray-100 text-gray-700">
        <tr>
          <th className="px-4 py-3 font-medium">Customer</th>
          <th className="px-4 py-3 font-medium">Appliance</th>
          <th className="px-4 py-3 font-medium">Duration</th>
          <th className="px-4 py-3 font-medium text-center">Status</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200">
        <tr className="hover:bg-gray-50 transition">
          <td className="px-4 py-3">Fahad</td>
          <td className="px-4 py-3">Washing Machine</td>
          <td className="px-4 py-3">3 Months</td>
          <td className="px-4 py-3 text-center">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
              Active
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

</TabItem>



                </Tabs>
              </div>
            </TabItem>

            {/* HELPERS */}
            <TabItem title="Helpers Manage" icon={FaRegUser}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-800">
                  Helpers Manage
                </h2>
                <Tabs aria-label="Tabs with icons" variant="underline" className="flex justify-center">

                  <TabItem active title="Helpers" icon={HiUserCircle}>
                    <div className="max-w-md mx-auto text-gray-800 mt-6">
                      <TextInput style={{ color: "black" }} placeholder="Job Type " />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Name" />
                      <TextInput style={{ color: "black" }} className="mt-3" type="number" placeholder="Number" />
                      <div className="flex justify-center mt-4">
                        <Stack direction="row" spacing={2}>
                          <Button variant="contained" color="success">
                            Submit
                          </Button>
                        </Stack>
                      </div>
                      </div>
                      
                  </TabItem>

                 <TabItem title="Bookings" icon={HiClipboardList}>
  <div className="mt-6 bg-white rounded-xl shadow p-4">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">
      Helper Bookings
    </h3>

    <table className="w-full text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-3">Customer</th>
          <th className="px-4 py-3">Helper</th>
          <th className="px-4 py-3">Job</th>
          <th className="px-4 py-3">Status</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        <tr>
          <td className="px-4 py-2">Neha</td>
          <td className="px-4 py-2">Ramesh</td>
          <td className="px-4 py-2">Cleaning</td>
          <td className="px-4 py-2 text-green-600">Completed</td>
        </tr>
      </tbody>
    </table>
  </div>
</TabItem>



                </Tabs>
              </div>
            </TabItem>

            {/* CONTACTS */}
            <TabItem title="Contacts" icon={HiClipboardList}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-800">
                  Contacts & Support
                </h2>
                <Tabs aria-label="Tabs with icons" variant="underline" className="flex justify-center">

                  <TabItem active title="Local Helpline" icon={HiUserCircle}>
                    <div className="max-w-md mx-auto text-gray-800 mt-6">
                      <TextInput style={{ color: "black" }} placeholder="Bus/Police/Railway/Auto Station" />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Location" />
                      <TextInput style={{ color: "black" }} className="mt-3" type="number" placeholder="Phone Number" />
                      <div className="flex justify-center mt-4">
                        <Stack direction="row" spacing={2}>
                          <Button variant="contained" color="success">
                            Submit
                          </Button>
                        </Stack>
                      </div>
                      </div>
                      
                  </TabItem>

                  <TabItem title="Preview" icon={MdDashboard}>
                    <p className="text-gray-600">
                      This is <span className="font-semibold text-gray-900">Dashboard</span>{" "}
                      tab's associated content. Clicking another tab will toggle the visibility.
                    </p>
                  </TabItem>


                </Tabs>
              </div>
            </TabItem>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default HomeSP;
