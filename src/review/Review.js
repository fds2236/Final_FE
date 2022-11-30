import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "../util/Modal";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";

// 후기 view - 도연 작업중


// 후기 작성 버튼 컴포넌트
const WriteButton = (props) => {
    return (
        <>
            <button onClick={OnClickWrite} >{props.text}</button>
        </>
    );
}

const OnClickWrite = () => {   
    window.location.replace('/WriteReview');
}


const Review = () => {
    // 페이지를 삭제하기 위한 현재 아이디 
    let whoLogin = window.localStorage.getItem('whoLogin');

    const nowReviewMuId = window.localStorage.getItem("reviewMuId");


    const [modalOpen, setModalOpen] = useState("");
    const [modalText, setModalText] = useState("");

    

    return (
        <div className="container">
        <div>후기</div>
        <WriteButton text={"후기 작성"}></WriteButton>
        </div>
    );

}

export default Review;