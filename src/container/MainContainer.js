import React, { useState } from "react";

const MainContainer = () => {

    const main = <h1>Home</h1>
    const works = <h1>Works</h1>
    const photos = <h1>Photos</h1>
    const previousWorks = <h1>Previous Works</h1>
    const github = <h1>Git Hub</h1>
    const instagram = <h1>Instagram</h1>
    const cats = <h1>Cats</h1>
    const garden = <h1>Garden</h1>
    const youtube = <h1>Youtube</h1>
    const linkedin = <h1>LinkedIn</h1>
    const twitter = <h1>Twitter</h1>
    const email = <h1>email</h1>
    


    const [selectedAct, setSelectedAct] = useState(main)

    const handleMenu = (event) => {
        console.log(event.target)
        if (event.target.innerText === "Cats") {
            setSelectedAct(cats);
        } else if (event.target.innerText === "Works") {
            setSelectedAct(works);
        } else if (event.target.innerText === "Previous Works") {
            setSelectedAct(previousWorks);
        } else if (event.target.innerText === "Photos") {
            setSelectedAct(photos);
        } else if (event.target.innerText === "Github") {
            setSelectedAct(github);
        } else if (event.target.innerText === "Instagram") {
            setSelectedAct(instagram);
        } else if (event.target.innerText === "Youtube") {
            setSelectedAct(youtube);
        } else if (event.target.innerText === "Garden") {
            setSelectedAct(garden);
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
        <>
            <div>
                <div onClick={handleMenu}>Home</div>
                <div onClick={handleMenu}>Works</div>
                <div onClick={handleMenu}>Previous Works</div>
                <div onClick={handleMenu}>Photos</div>
                <div onClick={handleMenu}>Github</div>
                <div onClick={handleMenu}>Instagram</div>
                <div onClick={handleMenu}>Cats</div>
                <div onClick={handleMenu}>Garden</div>
                <div onClick={handleMenu}>Youtube</div>
                <div onClick={handleMenu}>LinkedIn</div>
                <div onClick={handleMenu}>Twitter</div>
                <div onClick={handleMenu}>email</div>
                
                <div>{selectedAct}</div>
            </div>
        </>
    )
}

export default MainContainer