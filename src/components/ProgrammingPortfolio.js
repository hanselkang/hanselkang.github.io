import React, { useEffect, useState } from 'react'
import programming from './data/Programming'

const ProgrammingPortfolio = () => {


    const items = programming.map((item, index) => {
        return (
            <div className="div4-portfolio-item" key={index}>
                <img src={item.image} width="350" />
                <h3>
                    {item.name}
                </h3>
                <h5>
                    {item.languages}
                </h5>
                <b><a href={item.url} target="_blank">Repository & Demo</a></b>
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