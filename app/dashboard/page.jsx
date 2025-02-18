"use client";
import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Script from "next/script";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
  });

  // Handle session loading before redirecting
  useEffect(() => {
    console.log("Session data:", session);
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    } else {
      setForm({
        name: session.user.name || "",
        email: session.user.email || "",
        username: session.user.username || "",
        profilepic: session.user.image || "",
        coverpic: "",
      });
    }
  }, [session, status, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User details updated:", form);
    alert("Profile updated!");
  };

  useEffect(() => {
    if (typeof window !== "undefined" && window.paypal) {
      window.paypal
        .Buttons({
          createOrder: function (data, actions) {
            return actions.order.create({
              purchase_units: [
                {
                  amount: { value: "10.00" },
                },
              ],
            });
          },
          onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
              alert("Thank you for your donation! Your payment was successful.");
            });
          },
          onCancel: function (data) {
            alert("Payment cancelled.");
          },
        })
        .render("#paypal-button-container");
    }
  }, []);

  if (status === "loading") return <p className="text-white">Loading...</p>;
  if (!session) return null; // Prevent flashing before redirect

  return (
    <div className="bg-black min-h-screen flex flex-col items-center justify-center text-white p-4">
      <h2 className="text-3xl font-bold mb-6">Welcome to Your Dashboard</h2>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-xl"
      >
        <div className="mb-4">
          <label className="text-lg font-semibold" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-semibold" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="text-lg font-semibold" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={form.username}
            onChange={handleChange}
            className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md border-2 border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
          >
            Save
          </button>
        </div>
      </form>

      {/* PayPal Button - Direct Payment */}
      <div className="mt-8">
        <h3 className="text-2xl font-semibold mb-4">Support with PayPal</h3>
        <div id="paypal-button-container" className="mb-8"></div>
      </div>

      {/* PayPal Script */}
      <Script
        src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== "undefined" && window.paypal) {
            window.paypal
              .Buttons({
                createOrder: function (data, actions) {
                  return actions.order.create({
                    purchase_units: [{ amount: { value: "10.00" } }],
                  });
                },
                onApprove: function (data, actions) {
                  return actions.order.capture().then(function (details) {
                    alert("Thank you for your donation! Your payment was successful.");
                  });
                },
                onCancel: function (data) {
                  alert("Payment cancelled.");
                },
              })
              .render("#paypal-button-container");
          }
        }}
      />
    </div>
  );
};

export default Dashboard;
