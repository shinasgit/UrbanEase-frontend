"use client";

import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function UrbanFooter() {
  return (
    <footer className="w-full bg-white py-4 border-t mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-3">
        
        <p className="text-gray-600 text-sm">
          © 2025 UrbanEase. All rights reserved.
        </p>

        <div className="flex items-center gap-4 text-gray-600 text-xl">
          <a href="#" className="hover:text-blue-600"><FaFacebook /></a>
          <a href="#" className="hover:text-pink-600"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
        </div>

      </div>
    </footer>
  );
}
