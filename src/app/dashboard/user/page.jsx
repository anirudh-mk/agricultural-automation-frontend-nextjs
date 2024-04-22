"use client"

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import UserCard from '../../../components/UserCard/UserCard.jsx'

function UserPage() {
    const router = useRouter();
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        fetchUserList();
    }, []);

    const fetchUserList = async () => {
        try {
            const response = await fetch('http://anirudhmk123.pythonanywhere.com/api/v1/user/list/');
            if (!response.ok) {
                throw new Error('Failed to fetch user list');
            }
            const data = await response.json();
            setUserList(data.response); // Update to access 'response' array
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };

    return (
        <div>
            {userList.map(user => {
                console.log('User Data:', user); // Log user data
                return (
                    <UserCard
                        key={user.id}
                        firstName={user.first_name}
                        lastName={user.last_name}
                        userName={user.username}
                        phone={user.phone}
                        onClick={() => { router.push(`/dashboard/user/${user.id}`) }} />
                );
            })}
            <div className="round-icon-button" onClick={() => router.push('/dashboard/user/create')}>
                <FontAwesomeIcon icon={faPlus} size="xl" color="white" />
            </div>
        </div>
    );
}

export default UserPage;
