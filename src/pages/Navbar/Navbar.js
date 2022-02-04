import { Link } from 'react-router-dom';
import './style/navbar.css';

const Navbar = () => {
    return (
        <>
            <header>
                <div className='heading'>
                    <h2>
                        Foomdies
                    </h2>
                    <img src='https://res.cloudinary.com/dke9xzbl6/image/upload/v1643963076/food%20recipe/icon_gqnrzo.png' alt='error'></img>

                </div>
                <ul className='navigation_components'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/search'>Recpies Page</Link></li>
                    <li><Link to='/'>API</Link></li>
                    <li><Link to='/'>Github</Link></li>
                </ul>
                <hr />
                <ul className='contact_components'>
                    <li>Contact</li>
                    <li>Cuttack</li>
                </ul>
            </header>
        </>
    );
}

export default Navbar;