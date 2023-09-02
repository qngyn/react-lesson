import './Main.css'
import memeData from '../data/memeData.js'
import { useState, useEffect } from "react"

function Main (){
    const [allMemes, setAllMemes] = useState([])
    const [meme, setMeme] = useState({
        topText: "", 
        bottomText: "", 
        meme: ""
    })

    /**
    useEffect takes a function as its parameter. If that function returns something, it needs to be a cleanup function. Otherwise,
    it should return nothing. If we make it an async function, it automatically retuns a promise instead of a function or nothing.
    Therefore, if you want to use async operations inside of useEffect, you need to define the function separately inside of the callback
    function, as seen below:
    */
    useEffect( () => {
        async function getMemes() {
            const res =  fetch("https://api.imgflip.com/get_memes")
            const data =  res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    }, [])

    function pickImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMeme(prevState => ({
            ...prevState,
            meme: url
        }))
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setMeme(prevState => {
            return {
                ...prevState, 
                [name]: value
            }
        })
    }
    return (
        <main>
            <div className = "form">
                    <input 
                        type="text" 
                        placeholder="Top text" 
                        className="form-input" 
                        value = {meme.topText}
                        onChange = {handleChange}
                        name = "topText"
                    />
                    <input 
                        type="text" 
                        placeholder="Bottom text" 
                        className="form-input" 
                        name = "bottomText"
                        value = {meme.bottomText}
                        onChange = {handleChange}
                    />
                    <button 
                        className="form-button" 
                        onClick={pickImage}
                    > 
                        Get a new meme image 🖼 
                    </button>
            </div>
            <div className="meme">
                <img src = {meme.meme} className = "meme-image"/>   
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}

export default Main;