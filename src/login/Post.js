import DaumPostcode from "react-daum-postcode";
import styled from "styled-components";

// const styledPost = styled.div `
//     background : rgba(0,0,0,0.25);
//     position : fixed;
//     left:0;
//     top:0;
//     height:100%;
//     width:100%;
// `; 

// api를 실행할 컴포넌트 
const Post = (props) => {

    const complete = (data) =>{
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }
        console.log(data)
        console.log(fullAddress)
        console.log(data.zonecode)

        props.setcompany({
            ...props.company,
            address:fullAddress,
        })
    }

    return (
        
             <DaumPostcode
                autoClose
                onComplete={complete} />
    
    );
};

export default Post;