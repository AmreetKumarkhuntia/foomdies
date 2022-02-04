import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import Search from './pages/Search/Search';
import './style/style.css';

const style = {
  marginLeft: "25%",
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<div style={style}><Home /></div>}></Route>
          <Route path='/search' element={<div style={style}><Search /></div>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
