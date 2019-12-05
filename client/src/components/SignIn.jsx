import React, {useState, useEffect} from "react"; 
import styled from "styled-components"; 
import FormInput from "./FormInput.jsx";
import Button from "./CustomButton.jsx";
import {useSelector} from "react-redux";
import {signInWithGoogle, auth} from "../firebase/firebase.util.js"; 
import { useDispatch} from "react-redux"; 
import {signInUserWithEmailAndPasswordAsync, clearSignInError} from "../redux/user/user.action";
import {useHistory} from "react-router-dom"; 
import {selectSignInError} from "../redux/user/user.selector.js"




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
const signInError = useSelector(selectSignInError);
const dispatch = useDispatch();  
const history = useHistory();



const handleSubmit = async (e) => { 
        e.preventDefault(); 
        dispatch(signInUserWithEmailAndPasswordAsync(email , password));
        history.push('/');
        setEmail('');
        setPassword(''); 
}

useEffect(() => {
        if(signInError)
            {
                alert(signInError);
            }
        dispatch(clearSignInError());
} , []);

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

