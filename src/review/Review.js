import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";
import ReviewModal from "../review/ReviewModal";


// 후기 view - 도연 작업중

const Review = () => {

    useEffect(()=>{
        window.localStorage.setItem("seatInfoMode","NONE");
    })

    const [reviewMuId, setReviewMuId] = useState(''); // 뮤지컬 후기 글 번호
    const [musical, setMusical] = useState(''); // 공연 ID
    const [member, setMember] = useState(''); // 회원번호
    const [writeDate, setWriteDate] = useState(''); // 작성일

    const [scoreTotal, setscoreTotal] = useState(''); // 별점 총점

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

    const [muStar, setMuStar] = useState("");  // 별점

    // 후기 작성 버튼
    const WriteTotalButton = (props) => {
        return (
            <>
                <button onClick={OnClickTotalWrite} >{props.text}</button>
            </>
        );
    }

    const WriteSeatButton = (props) => {
        return (
            <>
                <button onClick={OnClickSeatWrite} >{props.text}</button>
            </>
        );
    }


    const OnClickToList = () => {   
        window.location.replace('/Review');
    }

    let array = [1, 2, 3 ,4]
    

    // Api 호출
    // 후기 작성 버튼이 눌려지면 동작하는 함수
    const OnClickTotalWrite = () => {
        setMuModalOpen(true);
    };

    const OnClickSeatWrite = () => {
        setSeModalOpen(true);
    };

    const closeModal = () => {
        setMuModalOpen(false);
        setSeModalOpen(false);
    };

    const confirmModal = async() => {
        try {
            const res =  await MuteApi.WriteReview(reviewMuId, musical, member, writeDate, scoreStory, scoreDirect, scoreCast, scoreNumber, reviewMuTxt);
            setResData(res.data);

        } catch (e) {
            alert("오류 : " + e);
        }
    };

    return (
        <div className="container">

            <div>총평 후기</div>
            <WriteTotalButton onClick={OnClickTotalWrite} text={"후기 작성"}></WriteTotalButton>
            {muModalOpen && <ReviewModal open={muModalOpen} confirm={confirmModal} close={closeModal} type={true} header="총평 후기">
            <div>
                <fieldset>
                    {/* 총점은 평균내서 기본적으로 색깔 나와있게 수정하기 !!! */}
                    <div> 총점 <Rating/></div> 
                    <div> 연출 <Rating/></div>
                    <div> 스토리 <Rating/></div>
                    <div> 캐스팅 <Rating/></div>
                    <div> 넘버 <Rating/></div>
                </fieldset>
                <fieldset>
                    <div>후기 작성</div>
                    <textarea placeholder="관람하신 뮤지컬의 총평을 작성해주세요."></textarea>
                </fieldset>
            </div>
            </ReviewModal>}
            


            <div>좌석 후기</div>
            <WriteSeatButton onClick={OnClickSeatWrite} text={"후기 작성"}></WriteSeatButton>
            {seModalOpen && <ReviewModal open={seModalOpen} confirm={confirmModal} close={closeModal} type={true} header="좌석 후기">
            <div>
                <fieldset>
                    {/* 총점은 평균내서 기본적으로 색깔 나와있게 수정하기 !!! */}
                    <div> 총점 <Rating/></div> 
                    <div> 좌석 <Rating/></div>
                    <div> 시야 <Rating/></div>
                    <div> 음향 <Rating/></div>
                    <div> 조명 <Rating/></div>
                </fieldset>
                <fieldset>
                    {/* 좌석은 아무거나 선택할 수 있음. 내 예매내역에 있는 좌석만 가져올 수 없을까?? */}
                    <div> 좌석 <input / > <button>좌석 선택</button>
                    </div>
                    <textarea placeholder="관람하신 좌석의 후기를 작성해주세요."></textarea>
                </fieldset>
            </div>
            </ReviewModal>}

 
        </div>
    );

}

export default Review;