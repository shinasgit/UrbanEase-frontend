import React from "react";
import Header from "../components/Header";
import UrbanFooter from "../../components/UrbanFooter";
import { FaHome, FaTools, FaBroom } from "react-icons/fa";
import BlurText from "../../../React-bits/BlurText";
// import GridScan from './GridScan';


function Home() {

  const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

  return (
    <>
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="pt-24">

        

        {/* HERO SECTION */}
        <section className="rounded  bg-gradient-to-r from-blue-300 to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <div className="flex justify-center items-center gap-3 mb-4">
              <img src="/logo.png" alt="logo" className="w-14 h-14" />
              <h1 className="text-4xl sm:text-5xl font-extrabold">
                <BlurText
  text="Urban Ease"
  delay={300}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-5xl "
/>
                
              </h1>
            </div>

            <p className="text-xl sm:text-2xl font-semibold">
              
              Find & Book Local Homes and Services
            </p>

            <p className="mt-4 text-gray-100 max-w-2xl mx-auto">
              Quick, reliable and affordable bookings for houses, appliances,
              and local services — all in one place.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <a
                href="/login"
                className="px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
              >
                Get Started
              </a>
              
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              Why Choose UrbanEase?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2">Easy Booking</h3>
                <p className="text-gray-600 text-sm">
                  Book houses and services in just a few clicks with transparent
                  pricing.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2">
                  Verified Providers
                </h3>
                <p className="text-gray-600 text-sm">
                  All service providers are verified for safety and quality.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2">Secure Payments</h3>
                <p className="text-gray-600 text-sm">
                  Multiple payment options with complete transaction security.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
              Popular Services
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 shadow rounded-2xl text-center hover:shadow-lg transition">
                <FaHome className="text-4xl text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-lg">House Booking</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Find PGs, hostels, flats and apartments easily.
                </p>
              </div>

              <div className="p-6 shadow rounded-2xl text-center hover:shadow-lg transition">
                <FaTools className="text-4xl text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-lg">Appliances</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Rent or repair appliances like washing machines and fridges.
                </p>
              </div>

              <div className="p-6 shadow rounded-2xl text-center hover:shadow-lg transition">
                <FaBroom className="text-4xl text-blue-600 mx-auto mb-4" />
                <h4 className="font-semibold text-lg">Cleaning Services</h4>
                <p className="mt-2 text-sm text-gray-600">
                  Professional cleaning services at affordable prices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="py-16 bg-gradient-to-r from-blue-300 to-blue-800">
  <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* USER SECTION */}
    <div className="text-white text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold">
        Join as a User
      </h2>
      <p className="mt-3 text-gray-200">
        Find homes, appliances, helpers, and city services easily.
      </p>
      <a
        href="/register"
        className="inline-block mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
      >
        Create User Account
      </a>
    </div>

    {/* SERVICE PROVIDER SECTION */}
    <div className="text-white text-center bg-white/10 backdrop-blur-md p-10 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold">
        Join as a Service Provider
      </h2>
      <p className="mt-3 text-gray-200">
        List your services, reach customers, and grow your business.
      </p>
      <a
        href="/register"
        className="inline-block mt-6 px-8 py-3 bg-white text-blue-700 font-semibold rounded-xl hover:bg-gray-100 transition"
      >
        Create Provider Account
      </a>
    </div>

  </div>
</section>


        {/* FOOTER */}
        <UrbanFooter />
      </main>
    </>
  );
}

export default Home;
