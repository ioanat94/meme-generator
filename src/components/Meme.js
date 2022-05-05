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

    return (
        <div  className='meme'>
            <div className='meme--form'>
                <div className='meme--text'>
                    <input type='text' className='meme--text-input' placeholder='Shut up' />
                    <input type='text' className='meme--text-input' placeholder='and take my money' />
                </div>
                <button type='button' className='meme--button' onClick={generateMeme}>Get a new meme image</button>
            </div>
            <img src={meme.randomImage} alt='Randomly generated meme' className='meme--img' />
        </div>
    )
}

export default Meme;