'use client'
import React, { useEffect, useState } from 'react';
import { usePathname, useParams } from 'next/navigation';

function Page() {
    const { id } = useParams();
    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:8000/api/v1/user/details/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ user_id: id })
                });
                const data = await response.json();
                if (data.hasError === false && data.statusCode === 200) {
                    setUserData(data.response);
                } else {
                    console.error('Error fetching user data:', data.message);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchData();
    }, [id]);


    return (
        <div >
            {userData ? (
                <div className='user-details-page'>
                    <div className='user-details-page--user-details'>
                        <img src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1080&h=893&q=70&fm=webp" alt="" />
                        <div className='user-details-page--user-details--text'>
                            <h1>{userData.first_name} {userData.last_name}</h1>
                            <p>Username: {userData.username}</p>
                            <p>Email: {userData.email}</p>
                            <p>Phone: {userData.phone}</p>
                        </div>
                    </div>
                    <div className='user-details-page--farm'>
                        <h1>Farms</h1>
                        <div className='user-details-page--farm-container'>
                            {userData.farms.map((farm) => (
                                <div key={farm.id} className='user-details-page--farm-card'>
                                    <div className='user-details-page--farm-card--headding'>
                                        <h2>{farm.name}</h2>
                                        <p>Description: {farm.description || 'No description available'}</p>
                                        <p>Location: {farm.location || 'No location available'}</p>
                                    </div>
                                    <h2>Vegetable</h2>
                                    <br />
                                    <p>Name: {farm.vegetable.name}</p>
                                    <div className='user-details-page--farm-card--headding--npk'>
                                        <p>N: {farm.vegetable.n}</p>
                                        <p>P: {farm.vegetable.p}</p>
                                        <p>K: {farm.vegetable.k}</p>
                                    </div>
                                    <p>Time Required: {farm.vegetable.time_required}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Page;
