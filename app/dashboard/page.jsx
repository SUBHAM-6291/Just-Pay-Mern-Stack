import React from "react";

const Page = ({ params }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-40 w-full">
        <img
          src="https://pbs.twimg.com/profile_banners/44196397/1576183471/1500x500"
          alt="Cover"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Profile Picture */}
      <div className="relative -mt-14 flex justify-center">
        <img
          src="https://pbs.twimg.com/profile_images/1689730893907304448/O1MgWJey_400x400.jpg"
          alt="Profile"
          className="w-28 h-28 rounded-full border-4 border-white"
        />
      </div>

      {/* Profile Info */}
      <div className="text-center p-4">
        <h1 className="text-2xl font-bold">{params.username}</h1>
        <p className="text-gray-600">@{params.username}</p>
        <p className="text-gray-700 mt-2">Building cool stuff on the internet 🚀</p>

        {/* Followers & Following */}
        <div className="flex justify-center gap-6 mt-4 text-gray-700">
          <div>
            <span className="font-bold">1.2K</span> Followers
          </div>
          <div>
            <span className="font-bold">560</span> Following
          </div>
        </div>

        {/* Edit Profile Button */}
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Page;
