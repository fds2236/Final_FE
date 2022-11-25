import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import FirstFloor from './theaterInfo/charLotte/FirstFloor';
import Home from './home/Home';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/FirstFloor" element={<FirstFloor />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;