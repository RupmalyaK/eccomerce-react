import React from "react"; 
import {Container} from "./style.jsx"

const Button = (props) => {
const {handleClick , children,isGoogleSignIn,isInverted, ...otherProps} = props;
return(
<Container onClick = {handleClick} {...otherProps} isGoogleSignIn={isGoogleSignIn} isInverted={isInverted}>
    {children}
</Container>
);
}



export default Button; 