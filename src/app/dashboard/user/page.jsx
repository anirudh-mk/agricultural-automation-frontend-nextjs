"use client"

import UserCard from '@/components/UserCard/UserCard'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/navigation'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


function UserPage() {

    const router = useRouter()

    return (
        <div>
            <UserCard onClick={() => router.push('/dashboard/user/123')} />
            <div className="round-icon-button" onClick={() => router.push('/dashboard/user/create')}>
                <FontAwesomeIcon icon={faPlus} size="xl" color="white"></FontAwesomeIcon>
            </div>
        </div>
    )
}

export default UserPage