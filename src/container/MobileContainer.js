import React, { useState } from "react";
import MobileDrawing from "../components/MobileDrawing"
import linkedin from "../components/src/icons/linkedin.png"
import github from "../components/src/icons/github.png"
import twitter from "../components/src/icons/twitter.png"
import instagram from "../components/src/icons/instagram.png"
import youtube from "../components/src/icons/youtube.png"
import tistory from "../components/src/icons/tstory.png"
import ProgrammingPortfolio from "../components/ProgrammingPortfolio";
import PhotographyPortfolio from "../components/PhotographyPortfolio";
import OtherWork from "../components/OtherWork";

const MobileContainer = () => {

    const main = (
        <p>
            <b>Hello</b>,
            I'm Hansel from South Korea. <br />
            A <b>passionate</b> and <b>creative</b> Software Developer. <br /><br />
            I have an established background in <br />
            Architecture Design and Photography<br /><br />
            <b>Innovative Designs</b> ?<br />
            <b>Problem solving</b> ?<br />
            That's what I'm here for !<br />
            <br />
            <a href="mailto: hihanseul@gmail.com"> [ contact ]</a>
        </p>
    )
    const programming = <ProgrammingPortfolio />
    const photograph = <PhotographyPortfolio />
    const other = <OtherWork />

    const [selectedAct, setSelectedAct] = useState(main)

    const handleMenu = (event) => {
        if (event.target.innerText === "Photography") {
            setSelectedAct(photograph);
        } else if (event.target.innerText === "Programming") {
            setSelectedAct(programming);
        } else if (event.target.innerText === "Art and Design Projects") {
            setSelectedAct(other);
        } else {
            setSelectedAct(main);
        }

    }

    return (
        <>
            <h1 className="menu" onClick={handleMenu}>Hansel Kang</h1>
            <p>
                Software Developer in Scotland.<br />
            </p>
            <div className="div1-mobile">

                <h2>Portfolio</h2>
                <br />
                <div className="menu" onClick={handleMenu}>Programming</div>
                <div className="menu" onClick={handleMenu}>Photography</div>
                <div className="menu" onClick={handleMenu}>Art and Design Projects</div>



            </div>
            {selectedAct}
            <br />
            <br />
            <div className="mobile-drawing"><MobileDrawing />
            </div>

            <br />
            <br />
            <br />
            <div className="div5">
                <a href="https://www.linkedin.com/in/hansel-kang/" target="_blank" >
                    <img src={linkedin} width="30" />
                </a>
                <a href="https://github.com/hanselkang" target="_blank" >
                    <img src={github} width="30" />
                </a>
                <a href="https://twitter.com/hihansel" target="_blank" >
                    <img src={twitter} width="30" />
                </a>
                <a href="https://www.instagram.com/hansel_in_scotland/" target="_blank">
                    <img src={instagram} width="30" />
                </a>
                <a href="https://youtu.be/4i7ZvnOR9NU" target="_blank" >
                    <img src={youtube} width="30" />
                </a>
                <a href="https://aballadofbignothing.tistory.com" target="_blank" >
                    <img src={tistory} width="30" />
                </a>
            </div>

            <br />
            <div className="div6">2022 hanseul.com all rights reserved
            </div>
            <br />
        </>
    )
}

export default MobileContainer