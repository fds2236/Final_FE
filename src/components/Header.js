import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBell } from 'react-icons/fa';


const Menu = styled.div`
`;


const Header = () => {

    // 로그인했을 경우 현재 ID 표시
    let whoLoginNow = window.localStorage.getItem("whoLogin");

    // 현재 ID에서 로그아웃하기
    const onClickLogout = () => {
        window.localStorage.removeItem("whoLogin");
        window.location.replace("/");
      }

    return(
        <>
        <Menu>
            {!whoLoginNow ?
            // 로그인하지 않았을 때 => 로그인, 회원가입, 찜하기
            (<>
            <Link to={"/Login"} className="menu_item">로그인</Link>
            <Link to={"/SignUp"} className="menu_item">회원가입</Link>
            <Link to={"/Login"} className="menu_item">찜하기</Link>
            </>) 
            : 
            // 로그인했을 때 => 알림, ~~~님, 로그아웃, 마이페이지, 멤버십
            (<>
             <FaBell/>
             <div className="menu_item">{whoLoginNow}님</div>
             <button onClick={onClickLogout} className="menu_item">로그아웃</button>
             <div className="menu_item">마이페이지</div>
             <Link to={"/Like"} className="menu_item">찜하기</Link>
            </>)
            } 
            <Link to = {"/Cs"} className="menu_item">고객센터</Link>
        </Menu>


  
        </>
    )

}
export default Header;