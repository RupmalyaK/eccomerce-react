import React from "react"; 
import styled from "styled-components"; 
import SignIn from "../components/SignIn.jsx"; 
import SignUp from "../components/Signup.jsx"; 

const Container = styled.div`
padding:0px 25px;
`;

const  SignInSignUp = (props) => {

return(
<Container>
    <SignIn />
    <SignUp />
</Container>
);
}



export default SignInSignUp; 