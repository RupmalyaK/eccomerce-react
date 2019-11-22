import React from "react"; 
import styled from "styled-components"; 
import SignIn from "../components/SignIn.jsx"; 
import SignUp from "../components/Signup.jsx"; 

const Container = styled.div``;

const  SignInSignUp = (props) => {

return(
<Container>
    <SignIn />
    <SignUp />
</Container>
);
}



export default SignInSignUp; 