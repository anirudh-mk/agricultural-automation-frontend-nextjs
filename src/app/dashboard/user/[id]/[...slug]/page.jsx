import React from 'react'

function page({ params }) {
    return (
        <div>{params.slug[1]}</div>
    )
}

export default page