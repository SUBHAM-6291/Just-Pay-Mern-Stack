"use client";

import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbar = ["Home", "About", "Projects", "Signup", "Login"];

  return (
    <nav className="bg-black text-white flex flex-col p-4 w-full">
      {/* Main Navbar Section */}
      <div className="flex items-center justify-between w-full px-6 py-2">
        {/* Logo Section */}
        <div className="text-2xl font-mono">JUST PAY💳</div>

        {/* Desktop Navigation (Shifted to Right) */}
        <div className="hidden md:flex flex-1 justify-end space-x-6 text-lg">
          {navbar.map((item) => (
            <li
              key={item}
              className="hover:text-gray-400 cursor-pointer transition-colors duration-300 list-none"
            >
              {item}
            </li>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-14 left-0 w-full bg-gray-900 text-white p-4 shadow-lg flex flex-col space-y-3 md:hidden">
          {navbar.map((item) => (
            <li
              key={item}
              className="hover:text-gray-400 cursor-pointer transition-colors duration-300 text-center"
              onClick={() => setIsOpen(false)} // Close menu on click
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
