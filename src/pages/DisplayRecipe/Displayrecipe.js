import './style/displayrecipe.css';

const Displayrecipe = (props) => {
    let items = props.items;

    function item_mapping(item) {
        return (
            <div className='single_recipe'>
                <div className='main'>
                    <img src={item.recipe.image} alt='error_loading_image'></img>
                    <div className='description'>
                        <h1>{item.recipe.label}</h1>
                        <div>
                            <span className='title'>Calories : </span>
                            <span className='subtitle'>{item.recipe.calories}</span>
                        </div>
                        <div>
                            <span className='title'>Cuisine Type : </span>
                            <span className='subtitle'>{item.recipe.cuisineType.map((e) => { return (<>{e} </>) })}</span>
                        </div>
                        <div>
                            <span className='title'>Caution : </span>
                            <span className='subtitle'>{item.recipe.cautions.map((e) => { return (<>{e} </>) })}</span>
                        </div>
                        <div>
                            <span className='title'>Dish Type : </span>
                            <span className='subtitle'>{item.recipe.dishType ? item.recipe.dishType.map((e) => { return (<>{e} </>) }) : 'Not available'}</span>
                        </div>
                        <div>
                            <span className='title'>Can be Eaten as : </span>
                            <span className='subtitle'>{item.recipe.mealType.map((e) => { return (<>{e} </>) })}</span>
                        </div>
                        <div>
                            <span className='title'>Diet Labels : </span>
                            <span className='subtitle'>{item.recipe.dietLabels.map((e) => { return (<>{e} </>) })}</span>
                        </div>
                        <div>
                            <span className='title'>Total Time : </span>
                            <span className='subtitle'>{item.recipe.totalTime} mins</span>
                        </div>
                        <div>
                            <span className='title'>Yeild : </span>
                            <span className='subtitle'>{item.recipe.yeild} </span>
                        </div>

                    </div>
                </div>

                <div className='secondary'>
                    <div>
                        <span className='title'><h4>INGRIDENTS : </h4></span>
                        <span className='subtitle'>{item.recipe.ingredientLines.map((e) => { return (<div>{e}</div>) })}</span>
                    </div>
                    <div>
                        <span className='title'><h4>HEALTH LABELS : </h4></span>
                        <span className='subtitle'>{item.recipe.healthLabels.map((e) => { return (<span>{e}, </span>) })}</span>
                    </div>
                    <a href={items[0].recipe.shareAs}>View Dish</a>
                </div>

                <hr></hr>
            </div>
        )
    }

    return (
        <div className="recipes">
            {/* If needed scheme */}
            {/* <div className='single_recipe'>
                <div className='main'>
                    <img src={items[0].recipe.image} alt='error_loading_image'></img>
                    <div className='description'>
                        <h1>{items[0].recipe.label}</h1>
                        <div>
                            <span className='title'>Calories : </span>
                            <span className='subtitle'>{items[0].recipe.calories}</span>
                        </div>
                        <div>
                            <span className='title'>Cuisine Type : </span>
                            <span className='subtitle'>{items[0].recipe.cuisineType.map((e) => { return (<>{e} </>) })}</span>
                        </div>
                        <div>
                            <span className='title'>Caution : </span>
                            <span className='subtitle'>{items[0].recipe.cautions.map((e) => { return (<>{e} </>) })}</span>
                        </div>
                        <div>
                            <span className='title'>Dish Type : </span>
                            <span className='subtitle'>{items[0].recipe.dishType.map((e) => { return (<>{e} </>) })}</span>
                        </div>
                        <div>
                            <span className='title'>Can be Eaten as : </span>
                            <span className='subtitle'>{items[0].recipe.mealType.map((e) => { return (<>{e} </>) })}</span>
                        </div>
                        <div>
                            <span className='title'>Diet Labels : </span>
                            <span className='subtitle'>{items[0].recipe.dietLabels.map((e) => { return (<>{e} </>) })}</span>
                        </div>
                        <div>
                            <span className='title'>Total Time : </span>
                            <span className='subtitle'>{items[0].recipe.totalTime} mins</span>
                        </div>
                        <div>
                            <span className='title'>Yeild : </span>
                            <span className='subtitle'>{items[0].recipe.yeild} </span>
                        </div>
                        
                    </div>
                </div>

                <div className='secondary'>
                    <div>
                        <span className='title'><h4>INGRIDENTS : </h4></span>
                        <span className='subtitle'>{items[0].recipe.ingredientLines.map((e)=>{return (<div>{e}</div>)})}</span>
                    </div>
                    <div>
                        <span className='title'><h4>HEALTH LABELS : </h4></span>
                        <span className='subtitle'>{items[0].recipe.healthLabels.map((e)=>{return (<span>{e}, </span>)})}</span>
                    </div>
                    <a href={items[0].recipe.shareAs}>View Dish</a>
                </div>

                <hr></hr>
            </div> */}

            {props.dataisloaded ? <>
                <h1 className='start'>
                    SEARCH RESULTS
                </h1>
                <hr className='border_start'></hr>
            </>
                : ""}

            {
                items.map(item_mapping)
            }

            {props.dataisloaded ? <h1 className='end'>
                THE END !!!
            </h1> : ""}
        </div>
    );
}

export default Displayrecipe;