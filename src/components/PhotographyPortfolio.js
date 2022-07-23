import React, { useState, useRef } from 'react'
import PhotographyItem from './PhotographyItem'
import photoData from './data/PhotoData'
import portrait from './data/Portrait'
import landscape from './data/Landscape'
import exhibition from './data/Exhibition'
import interior from './data/Interior'


const PhotographyPortfolio = () => {

    const [selectedPhoto, setSelectedPhoto] = useState(null)
    const [genre, setGenre] = useState(portrait)

    const imageRef = useRef(null);
    
    const photosGrid = genre.map((photo, index) => {
        return (
            <PhotographyItem photo={photo} key={photo.id} index={index} setSelectedPhoto={setSelectedPhoto} />
        )
    })

    const handleGenre = (event) => {
        if (event.target.value === "portrait") {
            setGenre(portrait)
        } else if (event.target.value === "landscape") {
            setGenre(landscape)
        } else if (event.target.value === "exhibition") {
            setGenre(exhibition)
        } else {
            setGenre(interior)
        }
    }

    const resetPhoto = () => {
        setSelectedPhoto(null)
    }

    return (
        <>
            <div>
                <button onClick={handleGenre} value="portrait"> portrait  </button>
                <button onClick={handleGenre} value="landscape"> landscape  </button>
                <button onClick={handleGenre} value="exhibition"> exhibition  </button>
                <button onClick={handleGenre} value="interior"> interior  </button>
            </div>
            <div className="div4">
                {photosGrid}
            </div>
            <div className="div4-item">
                {selectedPhoto != null ?
                    <>
                        <img src={selectedPhoto} height="400"></img>
                        <br/>
                        <button onClick={resetPhoto}> close </button>
                    </>
                    :
                    null}
            </div>

        </>
    )

}

export default PhotographyPortfolio