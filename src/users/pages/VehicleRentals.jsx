import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UsersSidebar from '../components/UsersSidebar';

export default function VehicleRentals() {
    
    return (
        <div className="ue-bg-page min-h-screen transition-colors duration-300">
            <Header />
            <UsersSidebar />
            
            <div className="pt-24 pl-[260px] pr-6 pb-10">
                <div className="ue-bg-surface p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-[#2A4B70] bg-white dark:bg-[#1B3A5C] transition-colors duration-300">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Vehicle Rentals</h1>
                        <p className="text-gray-500 dark:text-gray-300 mt-2">Rent bikes and scooters from verified local providers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {/* Placeholder Card */}
                        <div className="bg-white dark:bg-[#0D1F33] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2A4B70] overflow-hidden group hover:shadow-lg transition-all">
                            <div className="h-48 bg-gray-200 dark:bg-[#1B3A5C] flex items-center justify-center relative">
                                <span className="text-gray-400 text-sm">Image</span>
                                <div className="absolute top-3 left-3 bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300 text-xs font-bold px-2.5 py-1 rounded">
                                    Verified Provider
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-gray-800 dark:text-white text-lg">Honda Activa 6G</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">Provider: City Rides</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold text-green-600 dark:text-green-400">₹400<span className="text-xs font-normal text-gray-500">/day</span></span>
                                    </div>
                                    <button className="text-sm font-medium text-white bg-blue-600 px-4 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
