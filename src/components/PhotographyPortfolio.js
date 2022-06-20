import React, {useEffect, useState} from 'react'
import Modal from 'react-modal'

const PhotographyPortfolio = () => {
    const [selected, setSelected] = useState('')
    const [toggleModal, setToggleModal] = useState(false);

    useEffect(()=>{
    if (toggleModal) {
        document.body.style.overflow='hidden'
    } else {
        document.body.style.overflow='scroll'

    }
}, [toggleModal])


const showModal =()=>{
    seeSelected()
    setToggleModal(true)
}

}