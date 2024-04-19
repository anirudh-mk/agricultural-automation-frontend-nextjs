"use client"

import React, { useState } from 'react';
import './UserCreatePage.css'; // Import CSS file
import { useRouter } from 'next/navigation';

function UserCreatePage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: 'jo@email',
        phone: '',
        password: ''
    });

    console.log(formData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/user/register/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to register user: ' + response.statusText);
            }

            console.log('User registered successfully');
            router.push('/dashboard/user');
        } catch (error) {
            console.error('Error:', error.message);
            // Handle error, display error message to user, etc.
        }
    };

    return (
        <div className='user-create-form'>
            <form onSubmit={handleSubmit}>
                <label>First Name:</label>
                <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} />
                <label>Last Name:</label>
                <input type="text" name="last_name" value={formData.last_name} onChange={handleChange} />
                <label>Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <label>Phone:</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                <label>Password:</label>
                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                <button type="button" onClick={() => router.push('/dashboard/user')}>Cancel</button>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default UserCreatePage;
