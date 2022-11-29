import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstFloorChar from './theaterInfo/charLotte/FirstFloorChar';
import Home from './home/Home';
import Login from './login/Login';
import SecondFloorChar from './theaterInfo/charLotte/SecondFloorChar';
import FirstFloorChung from './theaterInfo/chungmuArt/FirstFloorChung';
import SecondFloorChung from './theaterInfo/chungmuArt/SecondFloorChung';
import ThirdFloorChung from './theaterInfo/chungmuArt/ThirdFloorChung';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/FirstFloorChar" element={<FirstFloorChar />} />
        <Route path="/SecondFloorChar" element={<SecondFloorChar />} />
        <Route path="/FirstFloorChung" element={<FirstFloorChung />} />
        <Route path="/SecondFloorChung" element={<SecondFloorChung />} />
        <Route path="/ThirdFloorChung" element={<ThirdFloorChung />} />
        <Route path='/Login' element={<Login />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;