"use client";
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
  const { data: session } = useSession();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-black text-white flex items-center justify-between p-4 w-full">
      <div className="text-2xl font-mono">JUST PAY 💳</div>

      <div className="flex gap-4">
        {session ? (
          <>
            {/* Dropdown Button */}
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
            >
               welcome {session.user.email}
              <svg className="w-3 h-3 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l4 4 4-4" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute right-10 top-14 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                      Dashboard
                    </Link>
                  </li>
                
                  <li>
                    <button
                      onClick={() => signOut()}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <Link href="/login">
            <button className="relative px-6 py-2 text-lg font-semibold rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 shadow-lg 
                         hover:scale-105 transition-transform duration-300 overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="relative z-10">Login</span>
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
