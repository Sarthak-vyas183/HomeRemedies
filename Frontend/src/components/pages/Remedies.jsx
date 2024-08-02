import React, { useState, useEffect } from "react";

import { useAuth } from "../Store/useAuth";
import { useNavigate } from "react-router-dom";

const Remedies = () => {
  const [remedies , setRemedies] = useState([])
  const {setCurr_remedy} = useAuth()
  const navigate = useNavigate();
  useEffect(() => {
    const fetchRemedies = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/auth/remedies");
        const res = await response.json();
        setRemedies(res.data);
      } catch (error) {
        console.error("Error fetching remedies:", error);
        alert("Failed to load remedies.");
      }
    };

    fetchRemedies();
  }, []);

  const getImageSrc = (buffer) => {
    if (!buffer) return "";
    const binary = new Uint8Array(buffer.data).reduce(
      (acc, byte) => acc + String.fromCharCode(byte),
      ""
    );
    const base64String = window.btoa(binary);
    return `data:image/jpeg;base64,${base64String}`;
  };

  const currentRemedyId = (remedy) => {
    setCurr_remedy(remedy)
       navigate("/remedydetail")
  }

  return (
    <div className="relative top-[10vh] min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Remedies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {remedies.length > 0 ? (
          remedies.map((remedy) => (
            <div
              key={remedy._id}
              className="remedy-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <div
                className="w-full h-48 bg-cover bg-center flex justify-end p-2"
                style={{ backgroundImage: `url(${getImageSrc(remedy.image)})` }}
              >
                {remedy.isVerified ? (
                  <img
                    src="../../../images/verified-icon.png"
                    className="w-8 h-8 bg-green-500 rounded-full "
                    alt=""
                  />
                ) : (
                  <img
                    src="../../../images/danger.png"
                    className="w-8 h-8 bg-red-500 rounded-full "
                    alt=""
                  />
                )}
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{remedy.title}</h2>
                <p className="text-gray-700 mb-2">{remedy.description}</p>
              </div>
              <button
                className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
                onClick={() => currentRemedyId(remedy)}
              >
                Read More
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-700">No remedies available</p>
        )}
      </div>
    </div>
  );
};

export default Remedies;
