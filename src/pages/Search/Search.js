import { useState } from 'react';
import Displayrecipe from '../DisplayRecipe/Displayrecipe';
import './style/search.css';

const Search = () => {
    const auth_token=process.env.REACT_APP_AUTH_TOKEN;
    const app_key=process.env.REACT_APP_API_KEY;
    let url='https://api.edamam.com/api/recipes/v2';
    const type='public';

    const [query,setQuery]=useState('dahi');
    const [items,setItems]=useState([]);
    const [dataisloaded,setDataisloaded]=useState(false);

    async function get_recipe(){
        url=url.concat('/?app_key='+auth_token+'&app_id='+app_key+'&type='+type+'&q='+query);

        await fetch(url).then((res)=>{
            return res.json();
        }).then(
            (res)=>{
                console.log(res.hits);
                setDataisloaded(true);
                setItems(res.hits);
            }
        )
    }

    return ( 
        <div className="Search">
            <div className='menu'>
                <input type='text' placeholder='Enter Dish Here (Example : dahi)' onChange={
                    (e)=>{
                        if(e.target.value!=='')
                            setQuery(e.target.value);
                        else
                            setQuery('dahi');
                    }
                }></input>
                <button onClick={()=>{
                    get_recipe();}}>Search</button>
            </div>
            {dataisloaded?<Displayrecipe items={items} dataisloaded={dataisloaded} />:''}
        </div>
     );
}
 
export default Search;