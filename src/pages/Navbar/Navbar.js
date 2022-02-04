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
                    <li>Home</li>
                    <li>About</li>
                    <li>Recpies Page</li>
                    <li>API</li>
                    <li>Github</li>
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