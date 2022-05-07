import React, {useState} from 'react';

function Meme() {
    let [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomImage: 'http://i.imgflip.com/1bij.jpg'
    });

    const [allMemes, setAllMemes] = useState([]);

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function generateMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[randomNumber].url;
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