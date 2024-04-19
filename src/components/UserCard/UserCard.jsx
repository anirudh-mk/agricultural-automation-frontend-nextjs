import React from 'react'
import './UserCard.css'
function UserCard({ onClick }) {
    return (
        <div className='user-details-card' onClick={onClick}>
            <img src="https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250" alt="" />
            <p>Anirudh MK</p>
            <p>anirudh_mk</p>
            <p>Address</p>
            <p>Farms</p>
        </div>
    )
}

export default UserCard