import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "../review/ReviewModal";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import ReviewModal from "../review/ReviewModal";

// 후기 view - 도연 작업중

// 후기 쓰기 취소 버튼
const ReturnButton = (props) => {
    return (
        <>
            <button onClick={OnClickToList} >{props.text}</button>
        </>
    );
}

const OnClickToList = () => {   
    window.location.replace('/Review');
}



const Review = () => {
    const [reviewMuId, setReviewMuId] = useState(''); // 뮤지컬 후기 글 번호
    const [musical, setMusical] = useState(''); // 공연 ID
    const [member, setMember] = useState(''); // 회원번호
    const [writeDate, setWriteDate] = useState(''); // 작성일
    const [scoreStory, setScoreStory] = useState(''); // 스토리 별점
    const [scoreDirect, setScoreDirect] = useState(''); // 연출 별점
    const [scoreCast, setScoreCast] = useState(''); // 캐스팅 별점
    const [scoreNumber, setScoreNumber] = useState(''); // 넘버 별점
    const [reviewMuTxt, setReviewMuTxt] = useState(''); // 뮤지컬 후기 텍스트

    const [submit, setSubmit] = useState(false); // 서버로 전송할 수 있는 조건 체크
    const [resData, setResData] = useState(''); // 서버에서 받는 결과 데이터

    // const [muStar, setMuStar] = useState("");  // 별점

    // 후기 작성 버튼 컴포넌트
const WriteButton = (props) => {
    return (
        <>
            <button onClick={OnClickWrite} >{props.text}</button>
        </>
    );
}



 
    let musicalStar = window.localStorage.getItem("musicalStar");


    // 페이지를 삭제하기 위한 현재 아이디 
    let whoLogin = window.localStorage.getItem('whoLogin');

    const nowReviewMuId = window.localStorage.getItem("reviewMuId");

    // 모달
    const [modalOpen, setModalOpen] = useState("");
    const [modalText, setModalText] = useState("");

    // APi 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const OnClickWrite = () => {
        setModalOpen(true);
    };

    const confirmModal = async() => {
        try {
            const res =  await MuteApi.WriteReview(reviewMuId, musical, member, writeDate, scoreStory, scoreDirect, scoreCast, scoreNumber, reviewMuTxt);
            setResData(res.data);

        } catch (e) {
            alert("오류 : " + e);
        }
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    

    return (
        <div className="container">
        <div>후기</div>
        <WriteButton onClick={OnClickWrite} text={"후기 작성"}></WriteButton>

        {modalOpen && <ReviewModal open={modalOpen} confirm={confirmModal} close={closeModal} type={true} header="Review">
        <div>
            <fieldset>
            <h4>Musical Review(필수)</h4>
            <div>별점 [{musicalStar}]</div>
            <textarea placeholder="뮤지컬 후기를 작성해주세요."></textarea>
            <button>확인</button>
            </fieldset>

            <fieldset>
            <h4>Seat Review(선택)</h4>
            <div> 좌석 선택
                <select>
                <option>층</option>
                <option></option>
                <option></option>
                </select>
                <select>
                <option>구역</option>
                <option></option>
                <option></option>
                </select>
                <select>
                <option>열</option>
                <option></option>
                <option></option>
                </select>
                <select>
                <option>번</option>
                <option></option>
                <option></option>
                </select>
            </div>
            <textarea placeholder="좌석 후기를 작성해주세요."></textarea>
            <button>확인</button>
            </fieldset>
            {/* <button onClick={onSubmit}>확인</button> */}
          
            </div>
        </ReviewModal>}
 
        </div>
    );

}

export default Review;