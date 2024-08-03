import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function RemedyDetail() { 
    const [currRemedy, setCurrRemedy] = useState(null); // Set initial state to null
    const { id } = useParams();

    const curr_remedy = async () => {
        try {
            const response = await fetch(`http://localhost:3000/api/auth/remedydetail/${id}`);
            if (!response.ok) {
                throw new Error('Remedy Detail Not Found');
            }
            const data = await response.json();
            setCurrRemedy(data.remedydetail);
        } catch (error) {
            console.error('Error fetching remedy details:', error);
            alert('Error fetching remedy details');
        }
    };

    useEffect(() => {
        curr_remedy();
    }, [id]); 

    const getImageSrc = (buffer) => {
        if (!buffer) return "";
        const binary = new Uint8Array(buffer.data).reduce(
            (acc, byte) => acc + String.fromCharCode(byte),
            ""
        );
        const base64String = window.btoa(binary);
        return `data:image/jpeg;base64,${base64String}`;
    };

    if (!currRemedy) {
        return  <div className='w-[100vw] h-[90vh] relative top-[10vh] bg-red-500'><p>Loading...</p>;</div>  // Render loading state if `currRemedy` is null
    }

    return (
        <div className='w-[100vw] h-[90vh] relative top-[10vh] bg-red-500'>
            <div>{currRemedy.title}</div>
        </div>
    );
}

export default RemedyDetail;
