import './Style/signup.css';

const Signup = () => {
    
    return ( 
        <>
            <div className="Form_Background">
                <div className='form'>
                    <h1>
                        SIGN UP
                    <div className='hr1' />
                    </h1>
                    <form action='http://localhost/signup' method='post'>
                        Email <br />
                        <input id='email' name='email' type='email'/><br/>
                        Name <br />
                        <input id='name' name='name' type='text'></input><br/>
                        Password <br />
                        <input id='password' name='password' type='password'></input><br/>
                        <button id='submit'>Submit</button>
                    </form>
                    <div className='existing'>
                    Already have an account ? <a href='/login'>Login</a><br/>
                    <a href='/'>Go Back</a>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Signup;