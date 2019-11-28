import React from "react"; 
import styled from "styled-components"; 
import SignIn from "../components/SignIn.jsx"; 
import SignUp from "../components/Signup.jsx"; 

const Container = styled.div`
width: 1200px;
display: flex;
justify-content: space-between;
margin: 30px auto;

`;

const  SignInSignUp = (props) => {

return(
<Container>
    <SignIn />
    <SignUp />
</Container>
);
};



export default SignInSignUp; 


  
  