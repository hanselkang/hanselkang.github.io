import React, { useState } from "react";
import MainDrawing from "../components/MainDrawing"
import linkedin from "../components/src/icons/linkedin.png"
import github from "../components/src/icons/github.png"
import twitter from "../components/src/icons/twitter.png"
import instagram from "../components/src/icons/instagram.png"
import youtube from "../components/src/icons/youtube.png"
import tistory from "../components/src/icons/tstory.png"
import ProgrammingPortfolio from "../components/ProgrammingPortfolio";
import PhotographyPortfolio from "../components/PhotographyPortfolio";
import OtherWork from "../components/OtherWork";

const MainContainer = () => {

    const main = <h1> </h1>
    const programming = <ProgrammingPortfolio />
    const photograph = <PhotographyPortfolio />
    const other = <OtherWork />

    const [selectedAct, setSelectedAct] = useState(main)

    const handleMenu = (event) => {
        if (event.target.innerText === "Photograph") {
            setSelectedAct(photograph);
        } else if (event.target.innerText === "Programming") {
            setSelectedAct(programming);
        } else if (event.target.innerText === "Other Works") {
            setSelectedAct(other);
        } else {
            setSelectedAct(main);
        }

    }

    return (
        <div className="parent">
            <div className="div0">
                <h1 className="menu" onClick={handleMenu}>
                    Hansel Kang
                </h1>
            </div>
            <div className="div1">
                Software Developer,<br />
                Photographer<br />
                in Scotland.<br />
            </div>
            <div className="div2">
                <MainDrawing />
            </div>
            <div className="div3">
                <h2>Portfolio</h2>
                <br />
                <div className="menu" onClick={handleMenu}>Programming</div>
                <div className="menu" onClick={handleMenu}>Photograph</div>
                <br />
                <div className="menu" onClick={handleMenu}>Other Works</div>
                <br />
                <a href="mailto: hihanseul@gmail.com">email</a>
            </div>
                {selectedAct}
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
            <div className="div6">2022 hanseul.com all rights reserved</div>
        </div>
    )
}

export default MainContainer