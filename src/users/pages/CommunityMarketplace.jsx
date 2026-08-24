import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UsersSidebar from '../components/UsersSidebar';

export default function CommunityMarketplace() {
    const [listings, setListings] = useState([]);

    // We would fetch from /api/community-listing here
    
    return (
        <div className="ue-bg-page min-h-screen transition-colors duration-300">
            <Header />
            <UsersSidebar />
            
            <div className="pt-24 pl-[260px] pr-6 pb-10">
                <div className="ue-bg-surface p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-[#2A4B70] bg-white dark:bg-[#1B3A5C] transition-colors duration-300">
                    <div className="flex justify-between items-end mb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Community Marketplace</h1>
                            <p className="text-gray-500 dark:text-gray-300 mt-2">Buy, sell, or rent everyday items from your neighbors.</p>
                        </div>
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-xl shadow-md transition-colors">
                            Post an Item
                        </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {/* Placeholder Card */}
                        <div className="bg-white dark:bg-[#0D1F33] rounded-2xl shadow-sm border border-gray-100 dark:border-[#2A4B70] overflow-hidden group hover:shadow-lg transition-all">
                            <div className="h-48 bg-gray-200 dark:bg-[#1B3A5C] flex items-center justify-center relative">
                                <span className="text-gray-400 text-sm">Image</span>
                                <div className="absolute top-3 left-3 bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 text-xs font-bold px-2.5 py-1 rounded">
                                    For Sale
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-gray-800 dark:text-white text-lg">Study Table & Chair</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">Almost new study table, perfect for students. Pick up only.</p>
                                <div className="mt-4 flex items-center justify-between">
                                    <span className="text-xl font-bold text-blue-600 dark:text-blue-400">₹1,200</span>
                                    <button className="text-sm font-medium text-white bg-gray-800 dark:bg-[#2A4B70] px-4 py-1.5 rounded-lg hover:bg-gray-700 dark:hover:bg-[#386292] transition-colors">
                                        Contact
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
