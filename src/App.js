import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstFloorChar from './theaterInfo/charLotte/FirstFloorChar';
import Home from './home/Home';
import Login from './login/Login';
import FindId from './login/FindId';
import SecondFloorChar from './theaterInfo/charLotte/SecondFloorChar';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/FirstFloorChar" element={<FirstFloorChar />} />
        <Route path="/SecondFloorChar" element={<SecondFloorChar />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/FindId' element={<FindId/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;