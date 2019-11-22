import React, {useState} from "react"; 
import styled from "styled-components"; 
import FormInput from "./FormInput.jsx";
import Button from "./Button.jsx";
import {signInWithGoogle} from "../firebase/firebase.util.js"; 



const Container = styled.div`
width:30vw;
display:flex;
flex-direction:column;
`;


const Title = styled.h2`
margin: 10px 0px;
`;

const Form = styled.form`
`;

const ButtonsContainer = styled.div`
display:flex;
justify-content:space-between;
`;

const SignIn = (props) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState(''); 

const handleChange = (setState , e) =>{
    setState(e.target.value); 
}

const handleSubmit = (e) => { 
    e.preventDefault(); 
    e.stopPropagation();
    setEmail('');
    setPassword(''); 
}
return(
<Container>
    <Title>I already have an account</Title>
    <span>let's sign in with email and password</span>
    <Form>
        <FormInput name="email" type="email" value={email} label="Email" setState={setEmail} handleChange={handleChange} required />
        <FormInput name="password" type="password" value={password} label="Password" setState={setPassword} handleChange={handleChange} required />
        <ButtonsContainer>
                <Button type="submit" handleClick={handleSubmit}>Sign in</Button>
                <Button onClick = {signInWithGoogle} isGoogleSignIn>Sign in with Google </Button>
        </ButtonsContainer>
        
    </Form>
</Container>
);
}



export default SignIn; 

