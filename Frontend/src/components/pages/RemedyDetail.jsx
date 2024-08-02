import React from 'react';
import { useAuth } from '../Store/useAuth';

function RemedyDetail() {
    const { Curr_remedy } = useAuth();
    
    // If Curr_remedy is not yet loaded, show a loading message or some placeholder content
    if (!Curr_remedy) return <div className='text-black'>Loading...</div>;

    const { userId, title, description, ingredients, steps, ailments, effectiveness, isVerified, likes, image, upload_date } = Curr_remedy;

    const getImageSrc = (buffer) => {
        if (!buffer) return "";
        const binary = new Uint8Array(buffer.data).reduce(
            (acc, byte) => acc + String.fromCharCode(byte),
            ""
        );
        const base64String = window.btoa(binary);
        return `data:image/jpeg;base64,${base64String}`;
    };

    return (
        <div className='w-[100vw] h-[90vh] bg-gray-100 p-8 relative top-[10vh]'>
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h1 className='text-4xl font-bold mb-4'>{title}</h1>
                <img src={getImageSrc(image)} alt={title} className="w-full h-64 object-cover mb-4 rounded" />
                <p className="mb-4"><strong>Description:</strong> {description || "No description available"}</p>
                <p className="mb-4"><strong>Ingredients:</strong> {ingredients && ingredients.length > 0 ? ingredients.join(', ') : "No ingredients listed"}</p>
                <p className="mb-4"><strong>Steps:</strong> {steps && steps.length > 0 ? steps.join(', ') : "No steps provided"}</p>
                <p className="mb-4"><strong>Ailments:</strong> {ailments && ailments.length > 0 ? ailments.join(', ') : "No ailments specified"}</p>
                <p className="mb-4"><strong>Effectiveness:</strong> {effectiveness || "Effectiveness not rated"}</p>
                <p className="mb-4"><strong>Verified:</strong> {isVerified ? "Yes" : "No"}</p>
                <p className="mb-4"><strong>Likes:</strong> {likes.length}</p>
                <p className="mb-4"><strong>Upload Date:</strong> {new Date(upload_date).toLocaleString()}</p>
                <div className="flex space-x-4">
                    <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">Like</button>
                    <button className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700">Dislike</button>
                </div>
            </div>
        </div>
    );
}

export default RemedyDetail;
