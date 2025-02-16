"use client";

import React from "react";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-black text-white flex items-center justify-between p-4 w-full">
      {/* Logo Section */}
      <div className="text-2xl font-mono">JUST PAY 💳</div>

      {/* Animated Login Button */}

      <div>
        <Link href={"./login"}>
      <button className="relative px-6 py-2 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg 
                         hover:scale-105 transition-transform duration-300 overflow-hidden group">
        <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
        <span className="relative z-10">Login</span>
      </button></Link>
      </div>
    </nav>
  );
};

export default Navbar;
