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
                      <TextInput placeholder="Hostel Name" />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Location" />
                      {/* // inputClassName={inputStyle} */}
                      <TextInput className="mt-3" type="number" placeholder="Rent" />
                      <TextInput className="mt-3" type="number" placeholder="Deposit" />
                      <TextInput className="mt-3" placeholder="Property Type" />
                      <TextInput className="mt-3" placeholder="Nearby Metro" />
                      <TextInput className="mt-3" placeholder="Nearby Bus Stop" />
                      <TextInput className="mt-3" placeholder="No of Vacancy" />
                      <TextInput className="mt-3" placeholder="Furnishing Type" />
                      <FileInput className="my-3" id="file-upload-helper-text" />
                      <HelperText className="mt-1">
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
                  <TabItem title="Preview" icon={MdDashboard}>
                    <div className="text-center text-gray-700 py-10">
                      Dashboard content here
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
                      <TextInput placeholder="Product " />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Brand" />
                      <TextInput className="mt-3" type="number" placeholder="Working" />
                      <TextInput className="mt-3" type="number" placeholder="Status" />
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

            {/* HELPERS */}
            <TabItem title="Helpers Manage" icon={FaRegUser}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-800">
                  Helpers Manage
                </h2>
                <Tabs aria-label="Tabs with icons" variant="underline" className="flex justify-center">

                  <TabItem active title="Helpers" icon={HiUserCircle}>
                    <div className="max-w-md mx-auto text-gray-800 mt-6">
                      <TextInput placeholder="Job Type " />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Name" />
                      <TextInput className="mt-3" type="number" placeholder="Number" />
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

            {/* CONTACTS */}
            <TabItem title="Contacts" icon={HiClipboardList}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl">
                <h2 className="text-lg font-semibold text-gray-800">
                  Contacts & Support
                </h2>
                <Tabs aria-label="Tabs with icons" variant="underline" className="flex justify-center">

                  <TabItem active title="Local Helpline" icon={HiUserCircle}>
                    <div className="max-w-md mx-auto text-gray-800 mt-6">
                      <TextInput placeholder="Bus/Police/Railway/Auto Station" />
                      <TextInput style={{ color: "black" }} className="mt-3" placeholder="Location" />
                      <TextInput className="mt-3" type="number" placeholder="Phone Number" />
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
