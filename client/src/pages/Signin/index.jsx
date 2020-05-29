import React from "react"; 
import SignIn from "../../components/SignIn"; 
import SignUp from "../../components/SignUp"; 
import {useHistory} from "react-router-dom";
import button from "../../components/CustomButton";
import {Container} from "./style.jsx";
import styled from "styled-components";

const CustomButton = styled(button)`
padding:0px 10px;
align-self:center;
width:300px;

`;

const CustomButtonWrapper = styled.div`
overflow:hidden;
padding:10px;
display:flex;
width:30%;
margin-left:23px;
justify-content:center;
`;

const  SignInPage = (props) => {
    const history = useHistory();

    const signUpClickHandler = e => {
        history.push({pathname:"/signup"});
        }
    
return(
<Container>
    <SignIn />
    <CustomButtonWrapper>
          <CustomButton isInverted onClick={signUpClickHandler}>Click here to sign up!</CustomButton>
    </CustomButtonWrapper>
    
</Container>
);
};



export default SignInPage; 


  
  