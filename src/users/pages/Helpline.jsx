import React from "react";
import Header from "../components/Header";
import UrbanFooter from "../../components/UrbanFooter";
import UsersSidebar from "../components/UsersSidebar";

function Helpline() {
  return (
    <>
      {/* FIXED NAVBAR */}
      <Header />

      {/* FIXED SIDEBAR */}
      <UsersSidebar />

      {/* CONTENT AREA */}
      <div className="pt-24 pl-[260px] pr-6 pb-10 bg-gray-50 min-h-screen">
        {/* PAGE WRAPPER */}
        <div className="p-6 md:p-8 rounded-3xl shadow-xl border bg-white border-gray-100">
          
          <div className="mb-8">
            <h1 className="text-3xl font-extrabold text-gray-800">
              Local Helpline Contacts
            </h1>
            <p className="text-gray-500 mt-1">
              Easily access essential local services including police, railway
              station, private bus stand, and KSRTC bus stand for quick
              assistance anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Police Station */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Police Station</h2>

                <p className="text-gray-700 flex items-center gap-2">
                  <b>Location:</b> Near Town Circle
                </p>

                <p className="text-gray-700 flex items-center gap-2">
                  <b>Phone:</b> 100 / 9876543210
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="tel:100"
                  className="bg-blue-800 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 text-center"
                >
                  Call Now
                </a>

                <a
                  href="https://maps.google.com/?q=Police+Station"
                  target="_blank"
                  className="bg-sky-500 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 text-center"
                >
                  Location
                </a>
              </div>
            </div>

            {/* Railway Station */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Railway Station</h2>

                <p className="text-gray-700 flex items-center gap-2">
                  <b>Location:</b> Central Railway Station
                </p>

                <p className="text-gray-700 flex items-center gap-2">
                  <b>Phone:</b> 139 / 9123456780
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="tel:139"
                  className="bg-blue-800 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 text-center"
                >
                  Call Now
                </a>

                <a
                  href="https://maps.google.com/?q=Railway+Station"
                  target="_blank"
                  className="bg-sky-500 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 text-center"
                >
                  Location
                </a>
              </div>
            </div>

            {/* Private Bus Stand */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">Private Bus Stand</h2>

                <p className="text-gray-700 flex items-center gap-2">
                  <b>Location:</b> Main City Private Bus Stand
                </p>

                <p className="text-gray-700 flex items-center gap-2">
                  <b>Phone:</b> 9876501234
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="tel:9876501234"
                  className="bg-blue-800 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 text-center"
                >
                  Call Now
                </a>

                <a
                  href="https://maps.google.com/?q=Private+Bus+Stand"
                  target="_blank"
                  className="bg-sky-500 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 text-center"
                >
                  Location
                </a>
              </div>
            </div>

            {/* KSRTC Bus Stand */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow p-6 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-semibold">KSRTC Bus Stand</h2>

                <p className="text-gray-700 flex items-center gap-2">
                  <b>Location:</b> KSRTC Depot, City Center
                </p>

                <p className="text-gray-700 flex items-center gap-2">
                  <b>Phone:</b> 0481-1234567
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="tel:04811234567"
                  className="bg-blue-800 text-white px-5 py-2.5 rounded-xl hover:bg-blue-700 text-center"
                >
                  Call Now
                </a>

                <a
                  href="https://maps.google.com/?q=KSRTC+Bus+Stand"
                  target="_blank"
                  className="bg-sky-500 text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 text-center"
                >
                  Location
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <UrbanFooter />
    </>
  );
}

export default Helpline;
