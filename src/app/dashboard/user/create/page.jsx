"use client"

import React, { useState } from 'react';
import './UserCreatePage.css'; // Import CSS file
import { useRouter } from 'next/navigation';

function UserCreatePage() {

    const router = useRouter()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        address: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here, like sending data to a server
        console.log(formData);
    };

    // const handleCancel = () => {
    //     // Clear form data
    //     setFormData({
    //         firstName: '',
    //         lastName: '',
    //         email: '',
    //         mobile: '',
    //         address: '',
    //         password: '',
    //         confirmPassword: ''
    //     });
    //     router.push('/dashboard/user')

    // };

    return (
        <div className='user-create-form'>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <div className='form--content'>
                        <div className='form--row'>
                            <div className='form--column'>
                                <label>First Name:</label>
                                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />
                            </div>
                            <div className='form--column'>
                                <label>Last Name:</label>
                                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />
                            </div>

                        </div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        <label>Mobile:</label>
                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} />
                        <label>Address:</label>
                        <input type="text" name="address" value={formData.address} onChange={handleChange} />
                        <div className='form--row'>
                            <div className='form--column'>
                                <label>Password:</label>
                                <input type="password" name="password" value={formData.password} onChange={handleChange} />
                            </div>
                            <div className='form--column'>
                                <label>Confirm Password:</label>
                                <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                            </div>
                        </div>
                        <div className='button--container'>
                            <div>
                                <button type="button" onClick={() => router.push('/dashboard/user')}>Cancel</button>
                                <button type="submit" onClick={() => router.push('/dashboard/user')}>Submit</button>

                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default UserCreatePage;