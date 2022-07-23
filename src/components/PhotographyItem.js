import React, { useState } from 'react'

const PhotographyItem = ({ photo, setSelectedPhoto }, key, index) => {


    const selectPhoto = (event) => {
        setSelectedPhoto(event.target.value)
    }

    


    return (
        <>
            <button className='photo-id-btn' key={index} onClick={selectPhoto} value={photo.image}>
                    {photo.id}
                </button>
        </>
    )
}

export default PhotographyItem