import Home from './pages/Home/Home';
import Navbar from './pages/Navbar/Navbar';
import './style/style.css';

const style={
  marginLeft: "25%",
}

function App() {
  return (
    <div className="App">
      <Navbar />
      <div style={style}>
        <Home />
      </div>
    </div>
  );
}

export default App;
