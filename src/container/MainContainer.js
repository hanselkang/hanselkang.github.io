import React, { useState } from "react";
import MainDrawing from "../components/MainDrawing"

const MainContainer = () => {

    const main = <h1> </h1>
    const works = <h1>Works</h1>
    const about =
        <div>
            A Software Developer<br /> with a background in <br />Architecture Design <br />and Photograph<br />
            I am in Scotland.<br /><br />
            I am into learning, <br />
            planning <br />
            and designing.<br />
            
        </div>
    const github = <h1>Git Hub</h1>
    const instagram = <h1>Instagram</h1>
    const youtube = <h1>Youtube</h1>
    const linkedin = <h1>LinkedIn</h1>
    const twitter = <h1>Twitter</h1>
    const email = <h1>email</h1>



    const [selectedAct, setSelectedAct] = useState(main)

    const handleMenu = (event) => {
        console.log(event.target)
        if (event.target.innerText === "Github") {
            setSelectedAct(github);
        } else if (event.target.innerText === "Works") {
            setSelectedAct(works);
        } else if (event.target.innerText === "About") {
            setSelectedAct(about);
        } else if (event.target.innerText === "Instagram") {
            setSelectedAct(instagram);
        } else if (event.target.innerText === "Youtube") {
            setSelectedAct(youtube);
        } else if (event.target.innerText === "LinkedIn") {
            setSelectedAct(linkedin);
        } else if (event.target.innerText === "Twitter") {
            setSelectedAct(twitter);
        } else if (event.target.innerText === "email") {
            setSelectedAct(email);
        } else {
            setSelectedAct(main);
        }

    }

    return (
        <div className="parent">
            <div className="div0"><h1 onClick={handleMenu}>Hansel Kang</h1></div>
            <div className="div1">
                <div onClick={handleMenu}>Home</div>
                <div onClick={handleMenu}>About</div>
                <br />
                <div onClick={handleMenu}>Works</div>
                <br />
                <div onClick={handleMenu}>Github</div>
                <div onClick={handleMenu}>LinkedIn</div>
                <div onClick={handleMenu}>Instagram</div>
                <div onClick={handleMenu}>Youtube</div>
                <div onClick={handleMenu}>Twitter</div>
                <div onClick={handleMenu}>email</div>
            </div>
            <div className="div2"><MainDrawing /></div>
            <div className="div3">{selectedAct}</div>
            <div className="div4"> 2022 hanseul.com all rights reserved</div>
        </div>
    )
}

export default MainContainer