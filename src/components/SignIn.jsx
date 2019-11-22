import React, {useState} from "react"; 
import styled from "styled-components"; 
import FormInput from "./FormInput.jsx";
import Button from "./Button.jsx";


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

const SignIn = (props) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState(''); 

const handleChange = (setState , e) =>{
    setState(e.target.value); 
}

const handleSubmit = (e) => { 
    e.preventDefault(); 
    e.stopPropagation();
    alert("@@");
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
        <Button type="submit" handleSubmit={handleSubmit}>Sign in</Button>
    </Form>
</Container>
);
}



export default SignIn; 

//<input type="submit" value= "submit form" onSubmit = {handleSubmit} />