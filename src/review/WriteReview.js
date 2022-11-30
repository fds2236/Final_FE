// import React from "react";
// import { useState, useRef } from "react";
// import styled from "styled-components";
// import { Link } from "react-router-dom";
// import Modal from "../util/Modal";
// import MuteApi from "../api/MuteApi";
// import Rating from "../util/Rating";

// // 후기 쓰기 - 도연 작업중..


// const WriteReview = () => {
    
//     return (
//         <div className="container">    
//             <div>
//                 <fieldset>
//                 <h4>Musical Review(필수)</h4>
//                 <div>별점 [{musicalStar}]</div>
//                 <textarea placeholder="뮤지컬 후기를 작성해주세요."></textarea>
//                 </fieldset>

//                 <fieldset>
//                 <h4>Seat Review(선택)</h4>
//                 <div> 좌석 선택
//                     <select>
//                     <option>층</option>
//                     <option></option>
//                     <option></option>
//                     </select>
//                     <select>
//                     <option>구역</option>
//                     <option></option>
//                     <option></option>
//                     </select>
//                     <select>
//                     <option>열</option>
//                     <option></option>
//                     <option></option>
//                     </select>
//                     <select>
//                     <option>번</option>
//                     <option></option>
//                     <option></option>
//                     </select>
//                 </div>
//                 <textarea placeholder="좌석 후기를 작성해주세요."></textarea>
//                 </fieldset>
//                 <button onClick={onSubmit}>후기 작성</button>
//                 <ReturnButton text={"취소"}></ReturnButton>
//             </div>
//         </div>

        
//     );
// }
// export default WriteReview;