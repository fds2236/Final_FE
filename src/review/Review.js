import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "../util/Modal";
import MuteApi from "../api/MuteApi";
import Rating from "../util/Rating";

const Review = () => {
    
    // 리뷰 입력받는 부분
    // const [musicalReview, setmusicalReview] = useState('');
    // const [seatReview, setseatReview] = useState('');


    // 별점
    const [muStar, setMuStar] = useState("");
    const [seStar, setSeStar] = useState("");
 
    let musicalStar = window.localStorage.getItem("musicalStar");
    let seatStar = window.localStorage.getItem("seatStar");

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

          
        
        {/* {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{modalText}</Modal>} */}
        </div>
    );
}

export default Review;