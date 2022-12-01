import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import ReviewModal from "../review/ReviewModal";

// 후기 view - 도연 작업중

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


    // 텍스트 입력
    const [muText, setMuText] = useState(false); // 총평 후기
    const [seText, setSeText] = useState(false); // 좌석 후기
    

    // 모달
    const [muModalOpen, setMuModalOpen] = useState("");
    const [seModalOpen, setSeModalOpen] = useState("");

    // const [muStar, setMuStar] = useState("");  // 별점

    // 후기 작성 버튼
    const WriteButton = (props) => {
        return (
            <>
                <button onClick={OnClickWrite} >{props.text}</button>
            </>
        );
    }

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


    // Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const OnClickWrite = () => {
        setMuModalOpen(true);
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
        setMuModalOpen(false);
    };

    

    return (
        <div className="container">

            <div>총평 후기</div>
            <WriteButton onClick={OnClickWrite} text={"후기 작성"}></WriteButton>
            {muModalOpen && <ReviewModal open={muModalOpen} confirm={confirmModal} close={closeModal} type={true} header="총평 후기">
            <div>
                <div>별점 [{}]</div>
                <textarea placeholder="관람하신 뮤지컬의 총평을 작성해주세요."></textarea>
            </div>
            </ReviewModal>}

            <div>좌석 후기</div>
            <WriteButton onClick={OnClickWrite} text={"후기 작성"}></WriteButton>
            {seModalOpen && <ReviewModal open={seModalOpen} confirm={confirmModal} close={closeModal} type={true} header="좌석 후기">
            <div>
                <div> 좌석
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
                <textarea placeholder="관람하신 좌석의 후기를 작성해주세요."></textarea>
            </div>
            </ReviewModal>}

 
        </div>
    );

}

export default Review;