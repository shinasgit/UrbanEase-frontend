import React from "react";
import { Tabs, TabItem } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";
import HeaderSP from "../components/HeaderSP";
import { IoHomeOutline } from "react-icons/io5";
import { PiWashingMachine } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { Label, TextInput } from "flowbite-react";

function HomeSP() {
  return (
    <>
      <HeaderSP />

      <div className="pt-28 px-6 pb-10 bg-gray-100 min-h-screen">
        {/* Page Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Service Provider Dashboard
        </h1>

        {/* Tabs Card */}
        <div className="bg-white rounded-xl shadow-lg p-6 flex justify-center">
          <Tabs aria-label="Default tabs" variant="underline">
            {/* Profile Tab */}
            <TabItem active title="House Manage" icon={IoHomeOutline}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  House Manage
                </h2>
                <p className="text-gray-600">
                  Manage your service provider profile, update details, and
                  customize your visibility.
                </p>
                <div>
                  
                  <TextInput className="" id="base" type="text" sizing="md" />
                </div>
              </div>
            </TabItem>

            {/* Dashboard Tab */}
            <TabItem title="Appliance Manage" icon={PiWashingMachine}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Appliance Manage
                </h2>
                <p className="text-gray-600">
                  View your service statistics, bookings, and recent activity.
                </p>
              </div>
            </TabItem>

            {/* Settings Tab */}
            <TabItem title="Helpers Manage" icon={FaRegUser}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Settings
                </h2>
                <p className="text-gray-600">
                  Update your availability, pricing, and notification settings.
                </p>
              </div>
            </TabItem>

            {/* Contacts Tab */}
            <TabItem title="Contacts" icon={HiClipboardList}>
              <div className="mt-6 bg-gray-50 p-6 rounded-xl shadow-sm">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">
                  Contacts & Support
                </h2>
                <p className="text-gray-600">
                  View customer inquiries and support requests.
                </p>
              </div>
            </TabItem>
          </Tabs>
        </div>
      </div>
    </>
  );
}

export default HomeSP;
