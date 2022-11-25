import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstFloor from './theaterInfo/charLotte/FirstFloor';
import Home from './home/Home';
import Login from './login/Login';
import FindId from './login/FindId';
import SecondFloor from './theaterInfo/charLotte/SecondFloor';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/FirstFloor" element={<FirstFloor />} />
        <Route path="/SecondFloor" element={<SecondFloor />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/FindId' element={<FindId/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;