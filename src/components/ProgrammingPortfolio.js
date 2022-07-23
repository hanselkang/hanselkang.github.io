import React, { useEffect, useState } from 'react'
import programming from './data/Programming'

const ProgrammingPortfolio = () => {


    const items = programming.map((item, index) => {
        return (
            <div className="div4-portfolio-item" key={index}>
                <img src={item.image} width="350" />
                <div>
                    {item.name}
                </div>
                <p>
                    {item.languages}
                </p>
                <a href={item.url} target="_blank">Go to Repository</a>
            </div>
        )
    })

    return (
        <div className="div4-portfolio">
            {items}
        </div>
    )

}

export default ProgrammingPortfolio