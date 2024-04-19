"use client"
import React, { useState } from 'react'
import './VegetableCard.css'
function VegetableCard({ onClick, name, N, P, K, duration }) {


    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div className='user-details-card'>
            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" onClick={onClick} />
            <p>{name}</p>
            <p>{N}</p>
            <p>{P}</p>
            <p>{K}</p>
            <p>{duration}</p>
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

export default VegetableCard