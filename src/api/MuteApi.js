import axios from "axios";
const HEADER = "application/json";
const MUTE_DOMAIN = "http://localhost:8282/";

const MuteApi =  {
    // 로그인 - 도연
    Login: async function(id, pwd) {
        const loginObj = {
            userId: id,
            pwd: pwd
        }
        return await axios.post(MUTE_DOMAIN + "member/login", loginObj, HEADER);
    },

    // // 리뷰 등록 - 도연
    // WriteReview: async function(id) {

    //     const boardCmd = {
    //         reviewMuId : , // 뮤지컬 후기 글 번호
    //         musical : , // 공연 ID
    //         member: , // 회원번호
    //         writeDate : , // 작성일
    //         scoreStory; // 스토리 별점
    //         scoreDirect; // 연출 별점
    //         scoreCast; // 캐스팅 별점
    //         scoreNumber; // 넘버 별점
    //         reviewMuTxt; // 뮤지컬 후기 텍스트

            
    //     }
    //     return await axios.post(MUTE_DOMAIN + "review/writeReview", boardCmd, HEADER);
    // },

    // // 리뷰 삭제 - 도연
    // DeleteReview : async function(boardNum,id) {
    //     const boardCmd = {
    //         cmd: "BoardDelete",
    //         boardNum : boardNum,
    //         id : id
    //     }
    //     return await axios.post(MUTE_DOMAIN + "review/deleteReview", boardCmd, HEADER);
    // },

    // // 뮤지컬 후기 불러오기 - 도연
    // ReviewInfo : async function(boardNum,id) {
    //     const boardCmd = {
    //         cmd: "BoardDelete",
    //         boardNum : boardNum,
    //         id : id
    //     }
    //     return await axios.post(MUTE_DOMAIN + "review/deleteReview", boardCmd, HEADER);
    // }


}

export default MuteApi;