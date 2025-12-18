"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function UrbanFooter() {
  return (
    <footer className="w-full bg-white border-t mt-10">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold text-blue-800">UrbanEase</h2>
          <p className="text-sm text-gray-600">
            Making city life simple, smart, and stress-free.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            © 2025 UrbanEase. All rights reserved.
          </p>
        </div>

        {/* CENTER */}
        <div className="flex flex-col items-center gap-2 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-700" />
            <a
              href="mailto:support@urbanease.com"
              className="hover:text-blue-700 transition"
            >
              support@urbanease.com
            </a>
          </div>
          <p className="text-xs text-gray-500">
            Need help? We’re just a mail away.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center md:justify-end gap-5 text-xl text-gray-600">
          <a href="#" className="hover:text-blue-600 transition"><FaFacebook /></a>
          <a href="#" className="hover:text-pink-600 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-sky-500 transition"><FaTwitter /></a>
        </div>

      </div>
    </footer>
  );
}
