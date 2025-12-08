import React from "react";
import Header from "../components/Header";
import UrbanFooter from "../../components/UrbanFooter";
import UsersSidebar from "../components/UsersSidebar";


function Home() {
  return (
    <>
      <div className="flex pt-24">
        {" "}
        {/* Push content below fixed header */}
        {/* <UsersSidebar /> */}
        <main className=" w-full">
          {" "}
          {/* Push content beside sidebar */}
          {/* Hero */}
          <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-5 flex items-center justify-center gap-3">
                <img src="/logo.png" alt="logo" className="w-15 h-12" />
                Urban Ease
              </h1>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                Find & Book Local Homes and Services
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Quick, reliable and affordable bookings — cleaning, appliances,
                rentals and more, all in one place.
              </p>
              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="/login"
                  className="inline-block px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Get Started
                </a>
              </div>
            </div>
          </section>
          {/* Features */}
          <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Easy Booking
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Reserve homes or services in a few clicks with clear pricing
                    and availability.
                  </p>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Verified Providers
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    We verify providers so you get safe, quality service every
                    time.
                  </p>
                </div>
                <div className="p-6 bg-white border border-gray-100 rounded-lg shadow-sm">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Secure Payments
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    Pay securely through our platform using multiple payment
                    options.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Services (simple list) */}
          <section id="services" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Popular Services
              </h2>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <h4 className="font-semibold">House Booking</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Search listings, compare and book homes for short or long
                    stays.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Appliance Repair</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Certified technicians for fast appliance fixes at your
                    doorstep.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-lg border border-gray-100">
                  <h4 className="font-semibold">Cleaning Services</h4>
                  <p className="mt-2 text-sm text-gray-600">
                    Regular or deep cleaning options to keep your home spotless.
                  </p>
                </div>
              </div>
            </div>
          </section>
          <UrbanFooter />
        </main>
      </div>
    </>
  );
}

export default Home;
