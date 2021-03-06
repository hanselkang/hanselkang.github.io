import React, { useState } from 'react'
import PhotographyItem from './PhotographyItem'
import portrait from './data/Portrait'
import landscape from './data/Landscape'
import exhibition from './data/Exhibition'
import interior from './data/Interior'
import p10 from "./src/landscape/010.jpg"


const PhotographyPortfolio = () => {

    const [selectedPhoto, setSelectedPhoto] = useState(null)
    const [genre, setGenre] = useState(portrait)

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
                <button className="second-menu-btn" onClick={handleGenre} value="portrait"> portrait  </button>
                <button className="second-menu-btn" onClick={handleGenre} value="landscape"> landscape  </button>
                <button className="second-menu-btn" onClick={handleGenre} value="exhibition"> exhibition  </button>
                <button className="second-menu-btn" onClick={handleGenre} value="interior"> interior  </button>
            </div>
            <div className="div4">
                {photosGrid}
            </div>
            <br />
            <div className="div4-item">
                {selectedPhoto != null ?
                    <>
                        <div className="img_container">
                            <img className="img" src={selectedPhoto} />
                        </div>
                        <br />
                        <button className='photo-id-btn' onClick={resetPhoto}> close </button>
                    </>
                    :
                    <div className="img_container">
                    <img src={p10} className="img" /></div>}
            </div>

        </>
    )

}

export default PhotographyPortfolio