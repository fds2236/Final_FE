import React from "react";
import { useState, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "../util/Modal";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";

// 후기 쓰기 - 도연 작업중..


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


const WriteReview = () => {
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
    const [modalOpen, setModalOpen] = useState(false);

    const [muStar, setMuStar] = useState("");  // 별점

 
    let musicalStar = window.localStorage.getItem("musicalStar");

    // APi 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const onSubmit = async () => {
        try {
            setModalOpen(true);
            const res =  await MuteApi.WriteReview(reviewMuId, musical, member, writeDate, scoreStory, scoreDirect, scoreCast, scoreNumber, reviewMuTxt);
            setResData(res.data);

        } catch (e) {
            alert("오류 : " + e);
        }
    }

    const closeModal = () => {
        setModalOpen(false);
    };



    return (
        <div className="container">    
        <div>
            <fieldset>
            <h4>Musical Review(필수)</h4>
            <div>별점 [{musicalStar}]</div>
            <textarea placeholder="뮤지컬 후기를 작성해주세요."></textarea>
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
            </fieldset>
            <button onClick={onSubmit}>후기 작성</button>
            <ReturnButton text={"취소"}></ReturnButton>

        </div>

        {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">후기 작성이 완료되었습니다.</Modal>}
    
        </div>
    );
}
export default WriteReview;