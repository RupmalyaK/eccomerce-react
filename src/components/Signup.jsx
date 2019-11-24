import React, {useState} from "react"; 
import styled from "styled-components"; 
import FormInput from "./FormInput.jsx";
import Button from "./Button.jsx"; 
import {auth , createUserProfileDoc} from "../firebase/firebase.util.js";


const Container = styled.div`
display: flex;
flex-direction: column;
width: 500px;
`; 

const Title = styled.h2`
margin: 10px 0;
`;

const Subtext = styled.span``;
const Form = styled.form``;


const SignUp = (props) => {

const [displayName , setDisplayName] = useState('');
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [confirmPassword , setConfirmPassword] = useState('');


const handleSubmit = async (e) => {
     e.preventDefault(); 
    if(password != confirmPassword)
        {
            alert("Password and confirm password didn't match");
            return; 
        }
    try{
        const {user} = await auth.createUserWithEmailAndPassword(email , password);

        await createUserProfileDoc(user , {displayName});

        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }
    catch(error){
        console.log("error creating user", error);
    }

}

return(
<Container>
    <Title>If you don't have an account</Title>
    <Subtext>let's create one</Subtext>
    <Form>
        <FormInput type="text" label="Display name" value={displayName} setState={setDisplayName} required />
        <FormInput type="email" label="Email" value={email} setState={setEmail} required />
        <FormInput type="password" label="Password" value={password} setState={setPassword} required />
        <FormInput type="password" label="Confirm password" value={confirmPassword} setState={setConfirmPassword} required />
        <Button type="submit" handleClick={handleSubmit}>Sign up</Button>
    </Form>
</Container>
);
}

export default SignUp; 