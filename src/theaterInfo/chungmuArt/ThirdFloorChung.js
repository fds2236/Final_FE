import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import styled from "styled-components";
import { ReactDOM } from "react";
import { Link } from "react-router-dom";
import '../seats.css';


function prevAll(element) { // element 이전의 모든 형제노드의 갯수를 구하는 함수
    let result = []; //빈 배열을 만들어서 앞에있는 모든 형제노드를 넣어줄 예정 
    
        while (element = element.previousElementSibling){ // 이전의 모든 형제노드를 구하는 previousElementSibling  
            result.push(element);
        }
           
    return result.length + 1; // 충무는 샤롯데랑 다르게 앞에 구역태그 (A,B,C)가 없어서 1을 더해야 맞다 
}

const onClickSeat = (event) => {

    let tmp = event.currentTarget.getAttribute("pk");
    let seatNum = event.currentTarget.innerText; // 현재 currentTarget의 innerText (태그 안의 텍스트)를 불러온다 

    // 코드를 잘 보면, 부모자식 관계의 className을 보면 row > seats > seat 이다
    // 내가 지금 몇번째 row인지 확인하려고 이전의 row의 갯수를 세는 (이전 모든 형제노드 갯수) 함수를 만들어 놓았으니
    // row 까지 두번 올라간 후 형제노드를 찾아야 한다
    // parentNode를 두번 사용해 두번 올라간다 
    let parentNode = prevAll(event.currentTarget.parentNode.parentNode);

    alert(parentNode + "열 " + seatNum + "번 좌석입니다 \n" + "PK값 : " + tmp);
    console.log(parentNode + "열 " + seatNum + "번 좌석입니다 \n" + "PK값 : " + tmp);
}


const ThirdFloorChung = () => {
    return (
        <>
        
        <h1>충무아트 ThirdFloor 입장 성공</h1>
        <Link to = "/"> Home으로 돌아가기</Link> <br></br>
        <Link to = "/FirstFloorChung">1층보기</Link><br></br>
        <Link to = "/SecondFloorChung">2층보기</Link><br></br>
        <Link to = "/ThirdFloorChung">3층보기</Link><br></br>
        <div className="grid-containder modal-background" id="modal-background">  
        </div>


        <div className="floor">

        
        <div className="seating_table_container">
            
            <div className="seattable_floor">3층</div>
            
        </div>        
        
        
        <div className="floor_container">
    
            
            <div id="chungmu_grand" className="AA3">
        
                
                        
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10540">
                                    <p>2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10541">
                                    <p>3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10542">
                                    <p>4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10543">
                                    <p>5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10544">
                                    <p>6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10545">
                                    <p>7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10546">
                                    <p>8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10547">
                                    <p>9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10548">
                                    <p>10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10549">
                                    <p>2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10550">
                                    <p>3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10551">
                                    <p>4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10552">
                                    <p>5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10553">
                                    <p>6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10554">
                                    <p>7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10555">
                                    <p>8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10556">
                                    <p>9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10557">
                                    <p>10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10558">
                                    <p>2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10559">
                                    <p>3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10560">
                                    <p>4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10561">
                                    <p>5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10562">
                                    <p>6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10563">
                                    <p>7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10564">
                                    <p>8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10565">
                                    <p>9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10566">
                                    <p>10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10567">
                                    <p>2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10568">
                                    <p>3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10569">
                                    <p>4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10570">
                                    <p>5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10571">
                                    <p>6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10572">
                                    <p>7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10573">
                                    <p>8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10574">
                                    <p>9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10575">
                                    <p>10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10576">
                                    <p>2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10577">
                                    <p>3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10578">
                                    <p>4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10579">
                                    <p>5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10580">
                                    <p>6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10581">
                                    <p>7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10582">
                                    <p>8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10583">
                                    <p>9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10584">
                                    <p>10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10585">
                                    <p>2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10586">
                                    <p>3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10587">
                                    <p>4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10588">
                                    <p>5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10589">
                                    <p>6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10590">
                                    <p>7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10591">
                                    <p>8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10592">
                                    <p>9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10593">
                                    <p>10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10594">
                                    <p>2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10595">
                                    <p>3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10596">
                                    <p>4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10597">
                                    <p>5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10598">
                                    <p>6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10599">
                                    <p>7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10600">
                                    <p>8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10601">
                                    <p>9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10602">
                                    <p>10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10603">
                                    <p>2</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10604">
                                    <p>3</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10605">
                                    <p>4</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10606">
                                    <p>5</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10607">
                                    <p>6</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10608">
                                    <p>7</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10609">
                                    <p>8</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10610">
                                    <p>9</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10611">
                                    <p>10</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                        

            </div>
            
            <div id="chungmu_grand" className="AB3">
        
                
                        
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    1
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    2
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    3
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    4
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    5
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    6
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    7
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    8
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                        

            </div>
            
            <div id="chungmu_grand" className="BB3">
        
                
                        
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10620">
                                    <p>11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10621">
                                    <p>12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10622">
                                    <p>13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10623">
                                    <p>14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10624">
                                    <p>15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10625">
                                    <p>16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10626">
                                    <p>17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10627">
                                    <p>18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10628">
                                    <p>19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10629">
                                    <p>20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10630">
                                    <p>21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10631">
                                    <p>22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10632">
                                    <p>23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10633">
                                    <p>24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10634">
                                    <p>25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10635">
                                    <p>26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10636">
                                    <p>11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10637">
                                    <p>12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10638">
                                    <p>13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10639">
                                    <p>14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10640">
                                    <p>15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10641">
                                    <p>16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10642">
                                    <p>17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10643">
                                    <p>18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10644">
                                    <p>19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10645">
                                    <p>20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10646">
                                    <p>21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10647">
                                    <p>22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10648">
                                    <p>23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10649">
                                    <p>24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10650">
                                    <p>25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10651">
                                    <p>11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10652">
                                    <p>12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10653">
                                    <p>13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10654">
                                    <p>14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10655">
                                    <p>15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10656">
                                    <p>16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10657">
                                    <p>17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10658">
                                    <p>18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10659">
                                    <p>19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10660">
                                    <p>20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10661">
                                    <p>21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10662">
                                    <p>22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10663">
                                    <p>23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10664">
                                    <p>24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10665">
                                    <p>25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10666">
                                    <p>26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10667">
                                    <p>11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10668">
                                    <p>12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10669">
                                    <p>13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10670">
                                    <p>14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10671">
                                    <p>15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10672">
                                    <p>16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10673">
                                    <p>17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10674">
                                    <p>18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10675">
                                    <p>19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10676">
                                    <p>20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10677">
                                    <p>21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10678">
                                    <p>22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10679">
                                    <p>23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10680">
                                    <p>24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10681">
                                    <p>25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10682">
                                    <p>11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10683">
                                    <p>12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10684">
                                    <p>13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10685">
                                    <p>14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10686">
                                    <p>15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10687">
                                    <p>16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10688">
                                    <p>17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10689">
                                    <p>18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10690">
                                    <p>19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10691">
                                    <p>20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10692">
                                    <p>21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10693">
                                    <p>22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10694">
                                    <p>23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10695">
                                    <p>24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10696">
                                    <p>25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10697">
                                    <p>26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10698">
                                    <p>11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10699">
                                    <p>12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10700">
                                    <p>13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10701">
                                    <p>14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10702">
                                    <p>15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10703">
                                    <p>16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10704">
                                    <p>17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10705">
                                    <p>18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10706">
                                    <p>19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10707">
                                    <p>20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10708">
                                    <p>21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10709">
                                    <p>22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10710">
                                    <p>23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10711">
                                    <p>24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10712">
                                    <p>25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10713">
                                    <p>11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10714">
                                    <p>12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10715">
                                    <p>13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10716">
                                    <p>14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10717">
                                    <p>15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10718">
                                    <p>16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10719">
                                    <p>17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10720">
                                    <p>18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10721">
                                    <p>19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10722">
                                    <p>20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10723">
                                    <p>21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10724">
                                    <p>22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10725">
                                    <p>23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10726">
                                    <p>24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10727">
                                    <p>25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10728">
                                    <p>26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10729">
                                    <p>11</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10730">
                                    <p>12</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10731">
                                    <p>13</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10732">
                                    <p>14</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10733">
                                    <p>15</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10734">
                                    <p>16</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10735">
                                    <p>17</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10736">
                                    <p>18</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10737">
                                    <p>19</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10738">
                                    <p>20</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10739">
                                    <p>21</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10740">
                                    <p>22</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10741">
                                    <p>23</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10742">
                                    <p>24</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10743">
                                    <p>25</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                        

            </div>
            
            <div id="chungmu_grand" className="BC3">
        
                
                        
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    1
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    2
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    3
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    4
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    5
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    6
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    7
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div id="row_zone">
                                <p className="seat_num">
                                    8
                                </p>
                            </div>                    
                    
                                                
                
                                        

                    
                        

                </div>
                        

            </div>
            
            <div id="chungmu_grand" className="CC3">
        
                
                        
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10752">
                                    <p>27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10753">
                                    <p>28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10754">
                                    <p>29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10755">
                                    <p>30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10756">
                                    <p>31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10757">
                                    <p>32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10758">
                                    <p>33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10759">
                                    <p>34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10760">
                                    <p>35</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10761">
                                    <p>26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10762">
                                    <p>27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10763">
                                    <p>28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10764">
                                    <p>29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10765">
                                    <p>30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10766">
                                    <p>31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10767">
                                    <p>32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10768">
                                    <p>33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10769">
                                    <p>34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10770">
                                    <p>27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10771">
                                    <p>28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10772">
                                    <p>29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10773">
                                    <p>30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10774">
                                    <p>31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10775">
                                    <p>32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10776">
                                    <p>33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10777">
                                    <p>34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10778">
                                    <p>35</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10779">
                                    <p>26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10780">
                                    <p>27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10781">
                                    <p>28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10782">
                                    <p>29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10783">
                                    <p>30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10784">
                                    <p>31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10785">
                                    <p>32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10786">
                                    <p>33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10787">
                                    <p>34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10788">
                                    <p>27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10789">
                                    <p>28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10790">
                                    <p>29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10791">
                                    <p>30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10792">
                                    <p>31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10793">
                                    <p>32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10794">
                                    <p>33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10795">
                                    <p>34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10796">
                                    <p>35</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10797">
                                    <p>26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10798">
                                    <p>27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10799">
                                    <p>28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10800">
                                    <p>29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10801">
                                    <p>30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10802">
                                    <p>31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10803">
                                    <p>32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10804">
                                    <p>33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10805">
                                    <p>34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10806">
                                    <p>27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10807">
                                    <p>28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10808">
                                    <p>29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10809">
                                    <p>30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10810">
                                    <p>31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10811">
                                    <p>32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10812">
                                    <p>33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10813">
                                    <p>34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10814">
                                    <p>35</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                
                <div className="row">
        
                        
                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10815">
                                    <p>26</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10816">
                                    <p>27</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10817">
                                    <p>28</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10818">
                                    <p>29</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10819">
                                    <p>30</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10820">
                                    <p>31</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10821">
                                    <p>32</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10822">
                                    <p>33</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                                            
                            
                            <div className="seats">
                                                        
                                <div id="seat" onClick={onClickSeat}  className="real no_review" pk="10823">
                                    <p>34</p>
                                </div>
                                
                            </div>
                                                
                
                                        

                    
                        

                </div>
                        

            </div>
                

        </div>
    </div>
    
        </>
    );
}

export default ThirdFloorChung;