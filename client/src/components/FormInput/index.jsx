import React from "react"; 
import {Container,Input,InputLabel} from "./style.jsx";

const FormInput = (props) => {
const { setState, label , ...otherProps} = props;

const handleChange = e => {
    setState(e.target.value)
}
return(
<Container>
        <Input onChange = {handleChange } {...otherProps} />
        {
            label ? (
                <InputLabel value = {otherProps.value}>
                    {label}
                </InputLabel>
            ) : null
        }
</Container>
);
}



export default FormInput; 