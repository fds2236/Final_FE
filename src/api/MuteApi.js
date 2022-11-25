import axios from "axios";
const HEADER = "application/json";
const MINI_DOMAIN = "http://localhost:8111/";

const MuteApi =  {

    // 로그인
    userLogin: async function(id, pw) {
        const loginObj = {
            id: id,
            pwd: pw
        }
        return await axios.post(MINI_DOMAIN + "LoginServlet", loginObj, HEADER);
    },

    // 아이디 찾기 
    researchId: async function(name, mail) {
        const findIdObj = {
            memName: name,
            email: mail
        }
        return await axios.post(MINI_DOMAIN + "IdServlet", findIdObj, HEADER);
    }

}

export default MuteApi;