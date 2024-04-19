"use client"
import React, { useState } from 'react'
import './UserCard.css'
function UserCard({ onClick, firstName, lastName, userName, phone, }) {


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div className='user-details-card' onClick={onClick}>
            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
            <p>{firstName + ' ' + lastName}</p>
            <p>{userName}</p>
            {phone ? <p>{phone}</p> : <p>Null</p>}
            <div className="app">
                <div className="container">
                    <button onClick={toggleMenu} className="three-dot-button">
                        &#x22EE;
                    </button>
                    {menuOpen && (
                        <div className="menu">
                            <ul>
                                <li>Edit</li>
                                <li>Delete</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default UserCard