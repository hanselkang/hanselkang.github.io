import React from 'react'
import otherwork from './data/OtherWorkData'

const OtherWork = () => {


    const items = otherwork.map((item, index) => {
        return (
            <div className="div4-portfolio-item" key={index}>
                <img src={item.image} width="350" />
            </div>
        )
    })

    return (
        <div className="div4-portfolio">
            {items}
        </div>
    )

}

export default OtherWork