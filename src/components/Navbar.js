import trollFace from '../images/troll-face.png';

function Navbar() {
    return (
        <div className='navbar'>
            <img src={trollFace} alt='Troll face' className='navbar--image' />
            <p className='navbar--title'>Meme Generator</p>
        </div>
    )
}

export default Navbar;