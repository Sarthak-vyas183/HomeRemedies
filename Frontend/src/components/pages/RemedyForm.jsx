import React, { useState } from 'react';
import {useAuth} from "../Store/useAuth"
const RemedyForm = () => {
    const {token} = useAuth();

    const [formData, setFormData] = useState({
        
        title: '',
        description: '',
        ingredients: '',
        steps: '',
        ailments: '',
        effectiveness: '',
        image: null
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const payload = { ...formData };
        payload.ingredients = payload.ingredients.split(',');
        payload.steps = payload.steps.split(',');
        payload.ailments = payload.ailments.split(',');

        const data = new FormData();
        for (const key in payload) {
            if (key === 'image') {
                data.append(key, payload[key]);
            } else {
                data.append(key, JSON.stringify(payload[key]));
            }
        }

        try {
            const response = await fetch('http://localhost:3000/api/user/create', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`
                },
                body: data
            });
            if (response.ok) {
                alert('Remedy submitted successfully');
                setFormData({
                    
                    title: '',
                    description: '',
                    ingredients: '',
                    steps: '',
                    ailments: '',
                    effectiveness: '',
                    image: null
                });
            } else {
                alert('Error submitting remedy');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto my-8 p-4 border rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Submit a Remedy</h2>
            <form onSubmit={handleSubmit} className="space-y-4" enctype="multipart/form-data" >
               
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={formData.title} 
                        onChange={handleChange} 
                        className="mt-1 p-2 w-full border rounded-md"
                        required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea 
                        name="description" 
                        value={formData.description} 
                        onChange={handleChange} 
                        className="mt-1 p-2 w-full border rounded-md" 
                        rows="4"
                        required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Ingredients (comma separated)</label>
                    <input 
                        type="text" 
                        name="ingredients" 
                        value={formData.ingredients} 
                        onChange={handleChange} 
                        className="mt-1 p-2 w-full border rounded-md"
                        required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Steps (comma separated)</label>
                    <input 
                        type="text" 
                        name="steps" 
                        value={formData.steps} 
                        onChange={handleChange} 
                        className="mt-1 p-2 w-full border rounded-md"
                        required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Ailments (comma separated)</label>
                    <input 
                        type="text" 
                        name="ailments" 
                        value={formData.ailments} 
                        onChange={handleChange} 
                        className="mt-1 p-2 w-full border rounded-md"
                        required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Effectiveness</label>
                    <input 
                        type="text" 
                        name="effectiveness" 
                        value={formData.effectiveness} 
                        onChange={handleChange} 
                        className="mt-1 p-2 w-full border rounded-md"
                        required 
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Image</label>
                    <input 
                        type="file" 
                        name="image" 
                        onChange={handleImageChange} 
                        className="mt-1 p-2 w-full border rounded-md"
                        required 
                    />
                </div>
                <div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">Submit Remedy</button>
                </div>
            </form>
        </div>
    );
};

export default RemedyForm;
