import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "../util/Modal";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";

// 후기 등록 - 도연 작업중..

const WriteReview = () => {
    
    // 리뷰 입력받는 부분
    // const [musicalReview, setmusicalReview] = useState('');
    // const [seatReview, setseatReview] = useState('');


    // 별점
    const [muStar, setMuStar] = useState("");
    const [seStar, setSeStar] = useState("");
 
    let musicalStar = window.localStorage.getItem("musicalStar");
    let seatStar = window.localStorage.getItem("seatStar");


    // 리뷰 작성 버튼 컴포넌트
    const SubmitButton = (props) => {

        return (
            <>
                <button onClick={onSubmit} >{props.text}</button>
            </>
        );
    }

    // 전송 버튼이 눌려지면 동작하는 함수
    // 함수가 비동기 통신을 해야 하므로 async 키워드 추가
    const onSubmit = async () => {
        try {
            setModalOpen(true);
            const res =  await MuteApi.boardReg(category, title, boardContent,id);
            setResData(res.data);
            

        } catch (e) {
            alert("오류 : " + e);
        }

    return(
        <div className="container">
        <div>후기</div>
        <button>후기 작성</button>
        <div>
            <fieldset>
            <h3>Musical Review(필수)</h3>
            <div>별점 [{musicalStar}]</div>
            <textarea placeholder="뮤지컬 후기를 작성해주세요."></textarea>
            </fieldset>

            <fieldset>
            <h3>Seat Review(선택)</h3>
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

   
        </div>

          
        {submit && <SubmitButton text={"리뷰 작성"}></SubmitButton>}
        {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">리뷰 작성이 완료되었습니다.</Modal>}
       
        </div>
    );
}

export default WriteReview;