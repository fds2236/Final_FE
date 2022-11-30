import FirstFloor from "../theaterInfo/charLotte/FirstFloorChar";
import { Link } from "react-router-dom";


const Home = () => {
    return(
        <>
        <h1>Home 입니다</h1>
        <Link to = "/login"> 로그인</Link> <br></br>
        <Link to = "/FirstFloorChar"> 샤롯데 좌석 정보</Link> <br></br>
        <Link to = "/FirstFloorChung"> 충무아트 좌석 정보</Link> <br></br>
        <Link to = "/MusicalReview"> 충무아트 좌ddd석 정보</Link> <br></br>
        <Link to = "/Reservation"> 예매 임시 페이지 </Link> <br></br>
        

        </>
    );
}

export default Home;