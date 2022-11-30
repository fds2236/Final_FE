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

    // 후기 작성 - 도연
    WriteReview: async function(reviewMuId, musical, member, writeDate, scoreStory, scoreDirect, scoreCast, scoreNumber, reviewMuTxt) {
        const reviewObj = {
            reviewMuId : reviewMuId, // 뮤지컬 후기 글 번호
            musical : musical, // 공연 ID
            member: member, // 회원번호
            writeDate : writeDate, // 작성일
            scoreStory: scoreStory,// 스토리 별점
            scoreDirect: scoreDirect, // 연출 별점
            scoreCast : scoreCast, // 캐스팅 별점
            scoreNumber : scoreNumber, // 넘버 별점
            reviewMuTxt : reviewMuTxt // 뮤지컬 후기 텍스트
        }
        return await axios.post(MUTE_DOMAIN + "review/writeReview", reviewObj, HEADER);
    },

    // 후기 삭제 - 도연
    DeleteReview : async function(reviewMuId, musical, member) {
        const reviewObj = {
            reviewMuId : reviewMuId, // 뮤지컬 후기 글 번호
            musical : musical, // 공연 ID
            member : member // 회원번호
        }
        return await axios.post(MUTE_DOMAIN + "review/deleteReview", reviewObj, HEADER);
    },

    // 뮤지컬 후기 view - 도연
    ReviewInfo : async function(reviewMuId, musical, member, writeDate, scoreStory, scoreDirect, scoreCast, scoreNumber, reviewMuTxt) {
        const reviewObj = {
            reviewMuId : reviewMuId, // 뮤지컬 후기 글 번호
            musical : musical, // 공연 ID
            member: member, // 회원번호
            writeDate : writeDate, // 작성일
            scoreStory: scoreStory,// 스토리 별점
            scoreDirect: scoreDirect, // 연출 별점
            scoreCast : scoreCast, // 캐스팅 별점
            scoreNumber : scoreNumber, // 넘버 별점
            reviewMuTxt : reviewMuTxt // 뮤지컬 후기 텍스트
        }
        return await axios.post(MUTE_DOMAIN + "review/ReviewInfo", reviewObj, HEADER);
    }


}

export default MuteApi;