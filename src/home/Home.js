import FirstFloor from "../theaterInfo/charLotte/FirstFloor";
import { Link } from "react-router-dom";


const Home = () => {
    return(
        <>
        <h1>Home 입니다</h1>
        <Link to = "/login"> 로그인</Link> <br></br>
        <Link to = "/FirstFloor"> 샤롯데 좌석 정보</Link> <br></br>
        

        </>
    );
}

export default Home;