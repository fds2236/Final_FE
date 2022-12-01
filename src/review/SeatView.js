import FirstFloorChar from "../theaterInfo/charLotte/FirstFloorChar";
import { useEffect } from "react";

const SeatView = () => {
    useEffect(()=>{
        window.localStorage.setItem("seatInfoMode","후기");
    })
    return(
        <>
        <h1>좌석 후기 페이지입니다.</h1>
        <FirstFloorChar />
        </>
    )
}
export default SeatView;