import React, {useEffect, useState} from 'react'
import Modal from 'react-modal'

const Portfolios = ({portfolio}) => {
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
    setSelected(portfolio)
    setToggleModal(true)
}

const clsoeModal = () => {
    setSelected('')
    setToggleModal(false)
}

return (

    <Modal
    isOpen={toggleModal}
    ariaHideApp={false}
    contentLabel="Portfolio"
    className="portfolio"
    overlayClassName="overlay"></Modal>


)

}