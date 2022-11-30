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
    }

    // 리뷰 등록 - 도연
    WriteReview: async function(category, title, content, id) {

        const boardCmd = {
            cmd: "boardReg",
            category: category,
            title: title,
            content: content,
            id: id
        }
        return await axios.post(MUTE_DOMAIN + "review/writeReview", boardCmd, HEADER);
    },

    // 리뷰 삭제 - 도연
    DeleteReview : async function(boardNum,id) {
        const boardCmd = {
            cmd: "BoardDelete",
            boardNum : boardNum,
            id : id
        }
        return await axios.post(MUTE_DOMAIN + "review/deleteReview", boardCmd, HEADER);
    },

}

export default MuteApi;