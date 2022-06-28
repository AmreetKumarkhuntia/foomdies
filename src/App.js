import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Search from './pages/Search/Search';
import './style/style.css';
import Login from './pages/LoginPage/Login';
import Signup from './pages/Signup/Signup';
import Profile from './pages/profile/Profile';
import { useState } from 'react';

const style = {
  marginLeft: "25%",
}

function App() {
  const[userprofile,setUserprofile]=useState({});
  const[loggedin,setLoggedin]=useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar loggedin={loggedin} />
        <Routes>
          <Route path='/' element={<div style={style}><Home /></div>}></Route>
          <Route path='/search' element={<div style={style}><Search /></div>}></Route>
          <Route path='/login' element={
            <div style={loggedin?{display:"none"}:{}}>
              <Login loggedin={loggedin} setLoggedin={setLoggedin} setUserprofile={setUserprofile} />
            </div>     
            }>
          </Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/profile' element={<div style={style}><Profile userprofile={userprofile} /></div>}></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
