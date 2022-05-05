import memesData from '../memesData.js';
import {useState} from 'react';

function Meme() {
    let [memeImage, setMemeImage] = useState('');

    function generateMeme() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
    }

    return (
        <div  className='meme'>
            <div className='meme--form'>
                <div className='meme--text'>
                    <input type='text' className='meme--text-input' placeholder='Shut up' />
                    <input type='text' className='meme--text-input' placeholder='and take my money' />
                </div>
                <button type='button' className='meme--button' onClick={generateMeme}>Get a new meme image</button>
            </div>
            <img src={memeImage} alt='Randomly generated meme' className='meme--img' />
        </div>
    )
}

export default Meme;