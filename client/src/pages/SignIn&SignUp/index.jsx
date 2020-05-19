import React from "react"; 
import styled from "styled-components"; 
import SignIn from "../../components/SignIn"; 
import SignUp from "../../components/SignUp"; 
import {Container} from "./style.jsx";


const  SignInSignUp = (props) => {
return(
<Container>
    <SignIn />
    <SignUp />
</Container>
);
};



export default SignInSignUp; 


  
  