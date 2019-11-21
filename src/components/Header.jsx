import React from "react"; 
import styled from "styled-components"; 
import {Link} from "react-router-dom";
import {ReactComponent as Logo} from "../images/crown.svg";


const Container = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
`;

const LogoContainer = styled.div`
height: 100%;
width: 70px;
padding: 25px;
`;

const Options = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
`;

const Option = styled(Link)`
padding: 10px 15px;
font-size:1.4em;
text-decoration:none;
color:black;
`;


const Header = () => {
    return (
        <Container>
            <LogoContainer>
               <Link to='/'>
                  <Logo />
               </Link>
             </LogoContainer>   
            <Options>
                <Option to='/'>Homepage</Option>
                <Option to="/shop">Shop</Option>
                <Option to="/contactus">Contact us</Option>
            </Options>
        </Container>
    )
}

export default Header; 