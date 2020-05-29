  
import React, {useState,useEffect} from "react"; 
import {useSelector , useDispatch} from "react-redux"; 
import {selectSignUpError} from "../../redux/user/user.selector.js";
import {signUpAsync} from "../../redux/user/user.action.js";
import {clearSignUpError} from "../../redux/user/user.action";
import {useHistory} from "react-router-dom"; 
import Button from "../CustomButton"; 
import {Container,Title,CustomForm, CustomFormInput,CustomRadioButton,RadioButtons} from "./style.jsx";



const SignUp = (props) => {

const [displayName , setDisplayName] = useState('');
const [email , setEmail] = useState('');
const [role,setRole] = useState("buyer");
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

const roleChangeHandler = e => {
    setRole(e.target.value);
}

useEffect(() => {
if (signUpError)
    {
        alert(signUpError); 
        dispatch(clearSignUpError());   
    }    
},[signUpError]);
console.log(role);
return(
<Container>
    <Title>If you don't have an account</Title>
    <span>let's create one</span>
    <CustomForm>
        <div className="input">
             <CustomFormInput type="text" label="Display name" value={displayName} setState={setDisplayName} required />
        </div>
        <div className="input">
              <CustomFormInput type="email" label="Email" value={email} setState={setEmail} required />  
        </div>
        <div className="input">
               <CustomFormInput type="password" label="Password" value={password} setState={setPassword} required />
        </div>
        <div className="input">
               <CustomFormInput type="password" label="Confirm password" value={confirmPassword} setState={setConfirmPassword} required />
        </div>
       
        
        <div className="role">
            <RadioButtons>
                <div className="rolewrapper">
                    <label>Buyer</label>
                    <CustomRadioButton defaultChecked={role} type="radio" name="role" value="buyer"  onChange={roleChangeHandler} required />
                </div>
                <div className="rolewrapper">
                    <label>Seller</label>
                    <CustomRadioButton type="radio" name="role" value="seller" onChange={roleChangeHandler}  required />
                </div>
            </RadioButtons>
        </div>
        <Button type="submit" handleClick={handleSubmit}>Sign up</Button>
    </CustomForm>
</Container>
);
}

export default SignUp; 