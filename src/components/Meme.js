function Meme() {
    return (
        <div  className='meme'>
            <form className='meme--form'>
                <div className='meme--text'>
                    <input type='text' className='meme--text-input' placeholder='Shut up' />
                    <input type='text' className='meme--text-input' placeholder='and take my money' />
                </div>
                <button type='button' className='meme--button'>Get a new meme image</button>
            </form>
        </div>
    )
}

export default Meme;