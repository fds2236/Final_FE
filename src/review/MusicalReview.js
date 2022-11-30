import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


// 전체를 감싸는 컨테이너 스타일드 컴포넌트
const Container = styled.div`
    width: 600px;
    margin: 50px auto;
    background-color: #EEEEEE;
    border: 1px solid #EEEEEE;
`;

// 글 목록을 감싸는 스타일드 컴포넌트
const Review = styled.div`
    width: 550px;
    height: fit-content;
    margin: 30px auto;
    background-color: white;
`;

// 제목 버튼 틀 스타일드 컴포넌트
const TitleAndBtn = styled.div`
    width: 600px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    width: 300px;
    justify-content: space-between;
   
`;

// 리턴 버튼 스타일드 컴포넌트
const ReturnStyledButton = styled.button`
    background-color: #EEEEEE;
    border-style: none;
    border-radius: 10px;
    width: 130px;
    height: 30px;
    color: gray;
    cursor: pointer;
    
`;

// 버튼 스타일드 컴포넌트
const Button = styled.button`
    background-color: rgb(0,173,181);
    border-style: none;
    border-radius: 10px;
    width: 130px;
    height: 30px;
`;

// 타이틀 스타일드 컴포넌트
const StyledTitle = styled.h1`
    display:block;
`;


/**
 * --------------------------------- 컴포넌트 -----------------------------------
 */


// 리턴 버튼 컴포넌트
const ReturnButton = (props) => {

    return (
        <>
            <ReturnStyledButton onClick={OnClickToList} >{props.text}</ReturnStyledButton>
        </>
    );
}

// 목록으로 돌아가는 onClick 컴포넌트
const OnClickToList = () => {   
    window.location.replace('/Boards');
}

// 타이틀 컴포넌트
const Title = ({text}) => {
    return(
        <StyledTitle>
            {text}
        </StyledTitle>
    );
}



const MusicalReview = () => {
    return(
        <>
        <TitleAndBtn>
            <ReturnButton text={"목록으로 돌아가기"}></ReturnButton>
            <Title text={"Review"}></Title>

        </TitleAndBtn>
        <Container>
            <Review>
                <div className="star">별점///</div>
                <h1>Musical Review</h1>
               
            </Review>
        </Container>
        </>
    );
}

export default MusicalReview;