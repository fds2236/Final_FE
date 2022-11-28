import { Link } from "react-router-dom";
import { useState} from "react";
import MuteApi from "../api/MuteApi";
import Modal from '../util/Modal'
import styled from "styled-components";

const ForgotIdBlock = styled.div``;
const PageLink = styled.div``;


const FindId = () => {
    // 이름, 이메일 입력
    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [findId, setFindId] = useState("아이디를 찾을 수 없습니다."); 

    // 아이디 찾기 버튼 눌렀을 때 팝업
    const [modalOpen, setModalOpen] = useState(false);
    const closeModal = () => {
        setModalOpen(false);
    };

    const onChangeName = (e) => {
        setInputName(e.target.value);
    }

    const onChangeEmail = (e) => {
        setInputEmail(e.target.value);
    }

    // Api 호출 
    // 아이디 찾기 버튼 누르면 활성화
    const onClickId = async() => {
        try {
            const res = await MuteApi.researchId(inputName, inputEmail);
            console.log(res.data.result);
            setModalOpen(true);

            if(res.data.result === "OK") {
                setFindId(res.data.id);
            } else {
                setFindId("존재하는 아이디가 없습니다.");
            }
        } catch (e) {
            // setModalOpen(true);
            console.log("아이디를 찾을 수 없습니다.")
        }
    }

    return(
        <div className="container">
            <ForgotIdBlock>
                <h5>아이디 찾기</h5>
                {/* 이름 입력창 */}
                <input className="input" placeholder="이름" value={inputName} onChange={onChangeName}></input>
                <br/>

                {/* 이메일 입력창 */}
                <input className="input" placeholder="이메일"  value={inputEmail} onChange={onChangeEmail}></input>
                <br/>

                {/* 아이디 찾기 버튼 활성화 */}
                <button className="idButton" onClick={onClickId}>FIND ID</button>
            </ForgotIdBlock>

                
            <PageLink>
                {/* 다른 페이지 연결 */}
                {/* <Link to="/SignUp" className="link_item">회원가입</Link> */}
                <Link to="/Login" className="link_item">로그인</Link>
                <Link to="/FindPwd" className="link_item">비밀번호 찾기</Link>
            </PageLink>
            {modalOpen && <Modal open={modalOpen} close={closeModal} header="확인">{findId}</Modal>}
        </div>
    )
}

export default FindId;