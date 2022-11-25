import FirstFloor from "../theaterInfo/charLotte/FirstFloor";
import { Link } from "react-router-dom";


const Home = () => {
    return(
        <>
        <h1>Home 입니다</h1>
        <Link to = "/FirstFloor"> 샤롯데 1층 정보 임시 연동</Link> <br></br>
        <Link to = "/SecondFloor"> 샤롯데 2층 정보 임시 연동</Link>
        </>
    );
}

export default Home;