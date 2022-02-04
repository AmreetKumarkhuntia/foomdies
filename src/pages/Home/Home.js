import './style/home.css';

const Home = () => {
    return ( 
        <div className='Home'>
            <div className='description'>
                <h1>WELCOME TO FOOMDIES !!!</h1> 
                <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h5>
                <button>
                    SEARCH
                </button>
            </div>
            <div className='image'>
                <img src='https://res.cloudinary.com/dke9xzbl6/image/upload/v1643961296/food%20recipe/burger_1_nvkggt.png' alt='error_loading_image'></img>
            </div>
        </div>
     );
}
 
export default Home;