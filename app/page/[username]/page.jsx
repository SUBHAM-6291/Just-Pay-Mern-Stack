"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";

const Page = ({ params = {} }) => {
  const { data: session } = useSession();
  const username = session?.user?.name || params?.username || "Guest";

  // States
  const [susername, setUsername] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  

  // Razorpay Payment Handler
  const handleRazorpayPayment = () => {
    if (!amount || amount <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    alert(`Payment of ₹${amount} for ${message || "Donation"} initiated!`);
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0 animate-pulse">
        <video autoPlay loop muted className="w-full h-full object-cover brightness-50">
          <source
            src="https://static.videezy.com/system/resources/previews/000/052/161/original/4K_Futuristic_Gaming_Background.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Main Card */}
      <div className="relative z-10 max-w-3xl bg-black bg-opacity-90 border border-purple-500 rounded-2xl p-8 shadow-xl transform hover:scale-105 transition duration-500 animate-spin-slow">
        {/* Profile Section */}
        <div className="text-center">
          <div className="relative inline-block animate-bounce-slow">
            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 animate-pulse"></div>
            <img
              src="https://media3.giphy.com/media/zJqN3BoSPKfeQI4Woq/giphy.webp?cid=ecf05e47rbkjpsub12ykdtc4o0dt4sbl2u89e94q4boo3736&ep=v1_gifs_search&rid=giphy.webp&ct=g"
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-white absolute top-1 left-1 hover:scale-125 transition-transform duration-300 shadow-xl animate-wiggle"
            />
          </div>
          <h1 className="text-3xl font-extrabold mt-4 neon-text animate-text-glow">{username}</h1>
          <p className="text-gray-400 text-lg">@{username.toLowerCase().replace(/\s+/g, "_")}</p>
        </div>

        {/* Donation Section */}
        <div className="mt-6 bg-opacity-90 border-2 border-gray-700 p-6 rounded-lg animate-flicker">
          <h2 className="text-2xl font-bold text-center mb-4 text-purple-300 animate-text-wave">Support the Stream</h2>

          <div className="flex flex-col gap-4 text-center">
            <input
              type="text"
              value={susername}
              onChange={(e) => setUsername(e.target.value)}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg border-2 border-gray-700 focus:ring-2 focus:ring-purple-500 hover:border-purple-400 transition animate-glitch"
              placeholder="Enter your name"
            />
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg border-2 border-gray-700 focus:ring-2 focus:ring-purple-500 hover:border-purple-400 transition animate-float"
              placeholder="Enter amount"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="px-4 py-2 bg-gray-900 text-white rounded-lg border-2 border-gray-700 focus:ring-2 focus:ring-purple-500 hover:border-purple-400 transition animate-pulse"
              placeholder="Enter a message (optional)"
            />
          </div>

          {/* Payment Button */}
          <button
            onClick={handleRazorpayPayment}
            className="mt-6 w-full py-3 bg-gradient-to-r from-purple-600 to-red-500 text-white font-semibold rounded-lg hover:from-red-500 hover:to-purple-600 transition-all duration-300 shadow-lg animate-glow animate-shake"
          >
            Pay with Razorpay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;