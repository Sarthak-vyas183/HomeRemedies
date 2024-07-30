import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css'; // Ensure Tailwind CSS is imported

const Remedies = () => {
  const [remedies, setRemedies] = useState([]);

  useEffect(() => {
    const fetchRemedies = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/auth/remedies');
        const res = await response.json();
        setRemedies(res.data);
      } catch (error) {
        console.error('Error fetching remedies:', error);
        alert("Failed to load remedies.");
      }
    };

    fetchRemedies();
  }, []);

  const getImageSrc = (buffer) => {
    if (!buffer) return '';
    const binary = new Uint8Array(buffer.data).reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    const base64String = window.btoa(binary);
    return `data:image/jpeg;base64,${base64String}`;
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Remedies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {remedies.length > 0 ? (
          remedies.map((remedy) => (
            <div key={remedy._id} className="remedy-card bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
              <img 
                src={getImageSrc(remedy.image)} 
                alt={remedy.title} 
                className="w-full h-48 object-cover" 
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{remedy.title}</h2>
                <p className="text-gray-700 mb-2">{remedy.description}</p>
                <div className="mb-2">
                  <strong className="text-gray-800">Ingredients:</strong>
                  <ul className="list-disc list-inside text-gray-600">
                    {remedy.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-2">
                  <strong className="text-gray-800">Steps:</strong>
                  <ol className="list-decimal list-inside text-gray-600">
                    {remedy.steps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                </div>
                <div className="mb-2">
                  <strong className="text-gray-800">Ailments:</strong>
                  <ul className="list-disc list-inside text-gray-600">
                    {remedy.ailments.map((ailment, index) => (
                      <li key={index}>{ailment}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-gray-800"><strong>Effectiveness:</strong> {remedy.effectiveness}</p>
              </div>
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
