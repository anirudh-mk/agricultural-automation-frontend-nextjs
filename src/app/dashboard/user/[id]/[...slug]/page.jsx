"use client"

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function Page({ params }) {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();

    const userId = params.slug[1]; // Extracting user_id from URL params

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await fetch('http://anirudhmk123.pythonanywhere.com/api/v1/farm/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id: userId, name, location, description })
            });
            // Redirect to the dashboard page for the specific user
            router.push(`/dashboard/user/${params.slug[1]}`);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <br />
                <label>
                    Location:
                    <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                </label>
                <br />
                <label>
                    Description:
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
                </label>
                <br />
                <button type="submit">Create Farm</button>
            </form>
        </div>
    );
}

export default Page;
