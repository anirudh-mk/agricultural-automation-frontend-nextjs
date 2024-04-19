"use client"

import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import VegetableCard from '../../../components/VegetableCard/VegetabaleCard.jsx'


function page() {

    const router = useRouter()

    const [vegetableList, setVegetableList] = useState([]);

    useEffect(() => {
        fetchVegetableList();
    }, []);

    const fetchVegetableList = async () => {
        try {
            const response = await fetch('http://127.0.0.1:8000/api/v1/vegetable/list/');
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

export default page





//     return (
//         <div>
//             {vegetableList.map(vegetable => {
//                 console.log('Vegetable Data:', vegetable); // Log vegetable data
//                 return (
//                     <div key={vegetable.id}>
//                         <p>Name: {vegetable.name}</p>
//                         <p>N: {vegetable.n}</p>
//                         <p>P: {vegetable.p}</p>
//                         <p>K: {vegetable.k}</p>
//                         <p>Time Required: {vegetable.time_required}</p>
//                         <UserCard
//                             firstName={vegetable.name}
//                             // Assuming vegetable object has a 'name' property
//                             onClick={() => { router.push(`/dashboard/vegetable/${vegetable.id}`) }} />
//                     </div>
//                 );
//             })}
//             <div className="round-icon-button" onClick={() => router.push('/dashboard/vegetable/create')}>
//                 <FontAwesomeIcon icon={faPlus} size="xl" color="white" />
//             </div>
//         </div>
//     );
// }

// export default VegetablePage;
