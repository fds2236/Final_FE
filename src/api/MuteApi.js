import axios from "axios";
const HEADER = "application/json";
const MUTE_DOMAIN = "http://localhost:8111/";

const MuteApi =  {

    // 로그인
    userLogin: async function(id, pwd) {
        const loginObj = {
            user_id: id,
            pwd: pwd
        }
        return await axios.post(MUTE_DOMAIN + "MemberController", loginObj, HEADER);
    },

    // 아이디 찾기 
    researchId: async function(name, mail) {
        const findIdObj = {
            name: name,
            mail: mail
        }
        return await axios.post(MUTE_DOMAIN + "MemberController", findIdObj, HEADER);
    }

}

export default MuteApi;