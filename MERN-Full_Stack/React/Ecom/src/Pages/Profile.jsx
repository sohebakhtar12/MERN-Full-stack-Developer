import React from "react";

function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 flex items-center gap-6">
          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-24 h-24 rounded-full border-4 border-green-500"
          />

          <div>
            <h1 className="text-3xl font-bold">Soheb Akhtar</h1>
            <p className="text-gray-600">soheb@gmail.com</p>
            <p className="text-gray-500">Member Since 2026</p>

            <button className="mt-3 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-4xl">📦</h2>
            <h3 className="font-bold text-xl mt-2">Orders</h3>
            <p className="text-gray-500">12 Orders</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-4xl">❤️</h2>
            <h3 className="font-bold text-xl mt-2">Wishlist</h3>
            <p className="text-gray-500">8 Products</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-4xl">📍</h2>
            <h3 className="font-bold text-xl mt-2">Addresses</h3>
            <p className="text-gray-500">2 Saved</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow text-center">
            <h2 className="text-4xl">💳</h2>
            <h3 className="font-bold text-xl mt-2">Payments</h3>
            <p className="text-gray-500">UPI & Cards</p>
          </div>

        </div>

        {/* Recent Orders */}
        <div className="bg-white rounded-xl shadow mt-8 p-6">
          <h2 className="text-2xl font-bold mb-5">Recent Orders</h2>

          <div className="border-b py-4 flex justify-between">
            <div>
              <h3 className="font-semibold">Nike Running Shoes</h3>
              <p className="text-gray-500">Order #10245</p>
            </div>

            <div className="text-right">
              <p className="font-bold text-green-600">₹3,499</p>
              <span className="text-green-500">Delivered</span>
            </div>
          </div>

          <div className="border-b py-4 flex justify-between">
            <div>
              <h3 className="font-semibold">Wireless Earbuds</h3>
              <p className="text-gray-500">Order #10231</p>
            </div>

            <div className="text-right">
              <p className="font-bold text-green-600">₹2,999</p>
              <span className="text-yellow-500">Shipped</span>
            </div>
          </div>
        </div>

        {/* Logout */}
        <div className="text-center mt-8">
          <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg">
            Logout
          </button>
        </div>

      </div>
    </div>
  );
}

export default Profile;