import React, {useState} from "react"; 
import styled from "styled-components"; 
import FormInput from "./FormInput.jsx";
import Button from "./Button.jsx";
import {signInWithGoogle, auth} from "../firebase/firebase.util.js"; 



const Container = styled.div`
width:500px;
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




const handleSubmit = async (e) => { 
    e.preventDefault(); 
    try{
        await auth.signInWithEmailAndPassword(email , password); 
        setEmail('');
        setPassword(''); 
    
    }
    catch(error){
        console.log("Error signing in with email and password", error); 
    }
    
}

return(
<Container>
    <Title>I already have an account</Title>
    <span>let's sign in with email and password</span>
    <Form>
        <FormInput name="email" type="email" value={email} label="Email" setState={setEmail} required />
        <FormInput name="password" type="password" value={password} label="Password" setState={setPassword} required />
        <ButtonsContainer>
                <Button type="submit" handleClick={handleSubmit}>Sign in</Button>
                <Button onClick = {signInWithGoogle} isGoogleSignIn >Sign in with Google </Button>
        </ButtonsContainer>
        
    </Form>
</Container>
);
}



export default SignIn; 

