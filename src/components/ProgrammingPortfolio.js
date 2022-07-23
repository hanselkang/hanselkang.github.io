import React, { useEffect, useState } from 'react'

const ProgrammingPortfolio = () => {

    const photos = [
        {
            id: 1,
            image: "/src/images/photos/1.jpg"
        },
        {
            id: 2,
            image: "/src/images/photos/2.jpg"
        },
        {
            id: 3,
            image: "/src/images/photos/3.jpg"
        },
        {
            id: 4,
            image: "/src/images/photos/4.jpg"
        },
        {
            id: 5,
            image: "/src/images/photos/5.jpg"
        },
        {
            id: 6,
            image: "/src/images/photos/6.jpg"
        }
    ]

    const [selectedPhoto, setSelectedPhoto] = useState(null)

    const selectPhoto = (event) => {
        setSelectedPhoto(event)
    }

    const photosGrid = photos.map((photo, index) => {
        return <>
            {photo.image}
        </>
    })

    return (
        <>
            <p>Programing</p>
        </>
    )

}

export default ProgrammingPortfolio