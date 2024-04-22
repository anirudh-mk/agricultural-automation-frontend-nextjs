"use client"

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import VegetableCard from '../../../components/VegetableCard/VegetabaleCard.jsx'


function Page() { // Renamed to comply with React component naming conventions

    const router = useRouter()

    const [vegetableList, setVegetableList] = useState([]);

    useEffect(() => {
        fetchVegetableList();
    }, []);

    const fetchVegetableList = async () => {
        try {
            const response = await fetch('http://anirudhmk123.pythonanywhere.com/api/v1/vegetable/list/');
            if (!response.ok) {
                throw new Error('Failed to fetch vegetable list');
            }
            const data = await response.json();
            setVegetableList(data.response); // Update to access 'response' array
        } catch (error) {
            console.error('Error:', error);
            // Handle error
        }
    };
    return (
        <div>
            {vegetableList.map(vegetable => {
                console.log('User Data:', vegetable);
                return (
                    <VegetableCard
                        key={vegetable.id}
                        name={vegetable.name}
                        N={vegetable.n}
                        P={vegetable.p}
                        K={vegetable.k}
                        timeRequired={vegetable.duration} />
                );
            })}
            <div className="round-icon-button" onClick={() => { router.push('/dashboard/vegetables/create') }}>
                <FontAwesomeIcon icon={faPlus} size="xl" color="white" />
            </div>
        </div>
    )
}

export default Page;
