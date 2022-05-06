import memesData from '../memesData.js';
import {useState} from 'react';

function Meme() {
    let [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemeImages, setAllMemeImages] = useState(memesData);

    function generateMeme() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div  className='meme'>
            <div className='meme--form'>
                <div className='meme--form-text'>
                    <input 
                        type='text' 
                        className='meme--text-input' 
                        placeholder='Top text' 
                        name="topText" 
                        value={meme.topText} 
                        onChange={handleChange} 
                    />
                    <input 
                        type='text' 
                        className='meme--text-input' 
                        placeholder='Bottom text' 
                        name="bottomText" 
                        value={meme.bottomText} 
                        onChange={handleChange} 
                    />
                </div>
                <button type='button' className='meme--button' onClick={generateMeme}>Get a new meme image</button>
            </div>
            <div className='meme--img-container'>
                <img src={meme.randomImage} className='meme--img' alt='Randomly generated meme' />
                <h2 className='meme--text top'>{meme.topText}</h2>
                <h2 className='meme--text bottom'>{meme.bottomText}</h2>
            </div>
        </div>
    )
}

export default Meme;