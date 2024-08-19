import React, { useState, useEffect } from 'react';
import { useAuth } from "../Store/useAuth";

function Profile() {
  const { user } = useAuth();
  console.log(user)
  const [profileImg, setProfileImg] = useState("../../../images/user.png");

  useEffect(() => {
    if (user && user.profileimg) {
      setProfileImg(user.profileimg);
    }
  }, [user]);

  return (
    <div className="w-[80vw] h-[90vh] overflow-y-scroll overflow-x-hidden p-8 bg-gray-100">
      
      <div className="bg-white rounded-lg shadow-md p-6 flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <img className="w-24 h-24 rounded-full" src={profileImg} alt="Profile" />
          <div>
            <h1 className="text-2xl font-bold">{user && user.fullname}</h1>
            <p className="text-gray-500">{user && user.role}</p>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <p className="text-gray-600">{user && user.email}</p>
          <div>
            <h2 className="text-sm text-gray-500">Current time</h2>
            <p>{new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>

      {/* Bio and Details Section */}
      <div className="flex gap-8">
        <div className="w-[60%]">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Bio</h2>
            <p className="text-gray-600">{user && user.bio || " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi dolorum, rerum labore alias placeat dolor molestiae minima ullam totam facere."}</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">My Activity </h2>
            <div className="flex justify-between">
              <p>Created Remedy</p>
              <span className="bg-green-100 my-2 text-green-700 px-2 py-1 rounded">{user && user.remedyList.length || "0"}</span>
            </div> 

            <div className="flex justify-between">
              <p>Badge</p>
              <span className="bg-gray-200 my-2 text-gray-500 px-2 py-1 rounded">{user && user.badge || "Not yet"}</span>
            </div>

            <div className="flex justify-between">
              <p>Certificate</p>
              <span className="bg-gray-200 my-2 text-gray-500 px-2 py-1 rounded">{user && user.badge || "Not yet"}</span>
            </div>
          </div>
        </div>

        <div className="w-[40%]">
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">Details</h2>

            <div>
              <p className="font-bold text-gray-600">Phone no</p>
              <p>{user && user.ph_no || "123-456-7890"}</p>
            </div>

            <div className="mt-4">
              <p className="font-bold text-gray-600">Location</p>
              <p>{user && user.location || "Delhi"}</p>
            </div> 

            <div className="mt-4">
              <p className="font-bold text-gray-600">Language</p>
              <p>{user && user.peers && user.peers.join(', ') || "English"}</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4">Controls</h2> 
            <div className="flex justify-between">
              <p>Update Profile</p>
              <span className="bg-blue-600 hover:cursor-pointer text-white px-2 py-1 rounded">Edit</span>
            </div>
            <div className="flex justify-between mt-4">
              <p>Delete Account</p>
              <span className="bg-red-600 text-white px-2 py-1 rounded hover:cursor-pointer">Delete</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
