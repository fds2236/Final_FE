import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstFloor from './theaterInfo/charLotte/FirstFloor';
import Home from './home/Home';
import Login from './login/Login';
import FindId from './login/FindId';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/FirstFloor" element={<FirstFloor />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/ForgotId' element={<FindId/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;