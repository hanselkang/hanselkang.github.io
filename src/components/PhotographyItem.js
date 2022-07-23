import React, { useState } from 'react'

const PhotographyItem = ({ photo, setSelectedPhoto }, key, index) => {


    const selectPhoto = (event) => {
        setSelectedPhoto(event.target.value)
    }

    


    return (
        <>
                <button key={index} onClick={selectPhoto} value={photo.image}>
                    {photo.id}
                </button>
        </>
    )
}

export default PhotographyItem