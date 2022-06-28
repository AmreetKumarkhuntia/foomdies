import { useState } from 'react';
import './style/LoginStyle.css';

const Login = (props) => {

    const [email,setEmail]=useState('email');
    const [password,setPassword]=useState('null');

    function Login(){
        const req_parameters={
            method:'post',
            headers:{
                'content-Type': 'application/json',
                'email':email,
                'password':password,
                'Access-Control-Allow_orign':'*'
            }
        }
        
        fetch('http://localhost/login',req_parameters).then(
            (Response)=>{  
                return Response.json();
            }
        ).then((res)=>{
            console.log(res);
            if(res.login){
                console.log(res.name);
                props.setLoggedin(true);
                props.setUserprofile(res);
            }
            
        })
        .catch((error)=>{console.log(error)});;

    }

    return ( 
    <>
        <div className="Form_Background">
                <div className='form'>
                    <h1>
                        LOG IN
                    <div className='hr1' />
                    </h1>
                    <div className='form2'>
                        Email <br />
                        <input id='email' name='email' type='email' onChange={(e)=>{setEmail(e.target.value)}} /><br/>
                        Password <br />
                        <input id='password' name='password' type='password' onChange={(e)=>{setPassword(e.target.value)}} ></input><br/>
                        <button id='submit' onClick={()=>{Login()}}>Submit</button>
                    </div>
                    <div className='existing'>
                    Don't have an account ? <a href='/signup'>SignUp</a><br/>
                    <a href='/'>Go Back</a>
                    </div>
                </div>
            </div>
    </> 
    );
}
 
export default Login;