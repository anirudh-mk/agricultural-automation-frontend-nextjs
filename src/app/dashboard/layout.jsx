'use client'
import React from 'react'
import './layout.css'

import IconButton from '@/components/IconButton/iconButton'
import { faMessage, faUser } from '@fortawesome/free-regular-svg-icons'
import { faClose, faMapLocationDot, faPepperHot } from '@fortawesome/free-solid-svg-icons'

import { useRouter } from 'next/navigation'


function Dashboardlayout({ children }) {

    const router = useRouter()

    return (
        <div className='dashboard'>
            <div className='dashboard--top-navbar'>
                <h1>Farms</h1>
                <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="user-image" />
            </div>
            <div className='dashboard--bottom-screen'>
                <div className='dahboard--side-navbar'>
                    <div className='dahboard--side-navbar--inner'>
                        <div>
                            <IconButton text="User" icon={faUser} onClick={() => router.push('/dashboard/user')} />
                            <IconButton text="Vegetables" icon={faPepperHot} onClick={() => router.push('/dashboard/vegetables')} />
                            <IconButton text="Map" icon={faMapLocationDot} onClick={() => router.push('/dashboard/map')} />
                        </div>
                        <div>
                            <IconButton text="Messages" icon={faMessage} onClick={() => router.push('/dashboard/messages')} />
                            <IconButton text="Logout" icon={faClose} onClick={() => router.push('/')} />
                        </div>
                    </div>
                </div>
                <div className='dashboard--details-screen'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Dashboardlayout