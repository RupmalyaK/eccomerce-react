import React, {useState,useEffect} from "react"; 
import {useSelector , useDispatch} from "react-redux"; 
import {selectSignUpError} from "../../redux/user/user.selector.js";
import {signUpAsync} from "../../redux/user/user.action.js";
import {clearSignUpError} from "../../redux/user/user.action";
import {useHistory} from "react-router-dom"; 
import FormInput from "../FormInput";
import Button from "../CustomButton"; 
import {Container,Title} from "./style.jsx";



const SignUp = (props) => {

const [displayName , setDisplayName] = useState('');
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');
const [confirmPassword , setConfirmPassword] = useState('');
const signUpError = useSelector(selectSignUpError); 
const history = useHistory();
const dispatch = useDispatch();

const handleSubmit = async (e) => {
    if (password !== confirmPassword)
    {
        alert("Password and Confirm password didn't match");
        return; 
    }
       dispatch(signUpAsync({
            displayName, email, password, confirmPassword,
        }));
        history.push('/');
        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
}

useEffect(() => {
if (signUpError)
    {
        alert(signUpError); 
        dispatch(clearSignUpError());   
    }    
},[signUpError]);

return(
<Container>
    <Title>If you don't have an account</Title>
    <span>let's create one</span>
    <form>
        <FormInput type="text" label="Display name" value={displayName} setState={setDisplayName} required />
        <FormInput type="email" label="Email" value={email} setState={setEmail} required />
        <FormInput type="password" label="Password" value={password} setState={setPassword} required />
        <FormInput type="password" label="Confirm password" value={confirmPassword} setState={setConfirmPassword} required />
        <Button type="submit" handleClick={handleSubmit}>Sign up</Button>
    </form>
</Container>
);
}

export default SignUp; 