"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

function UserCreatePage() {
    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        n: '',
        p: '',
        k: '',
        time_required: '',
        description: ''
    });

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
            const response = await fetch('http://anirudhmk123.pythonanywhere.com/api/v1/vegetable/create/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to create vegetable: ' + response.statusText);
            }

            console.log('Vegetable created successfully');
            router.push('/dashboard/vegetables'); // Redirect to vegetables page
        } catch (error) {
            console.error('Error:', error.message);
            // Handle error, display error message to user, etc.
        }
    };

    return (
        <div className='vegetable-create-form'>
            <form onSubmit={handleSubmit}>
                <div className='vegetable-create-form--form'>

                    <label>Name</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    <div className='vegetable-create-form--form--row'>
                        <div>
                            <label>N</label>
                            <br />
                            <input type="text" name="n" value={formData.n} onChange={handleChange} />
                        </div>
                        <div>
                            <label>P</label>
                            <br />
                            <input type="text" name="p" value={formData.p} onChange={handleChange} />
                        </div>
                        <div>
                            <label>K</label>
                            <br />
                            <input type="text" name="k" value={formData.k} onChange={handleChange} />
                        </div>

                    </div>
                    <label>Time Required:</label>
                    <input type="text" name="time_required" value={formData.time_required} onChange={handleChange} />
                    <label>Description:</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} />
                    <div className='vegetable-create-form--form--buttons'>
                        <button type="button" onClick={() => router.push('/dashboard/vegetables')}>Cancel</button>
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default UserCreatePage;
