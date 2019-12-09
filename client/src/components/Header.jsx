import React from "react"; 
import styled from "styled-components"; 
import {Link} from "react-router-dom";
import {auth} from "../firebase/firebase.util.js";
import {ReactComponent as Logo} from "../images/crown.svg";
import {signInWithGoogle} from "../firebase/firebase.util.js";
import {useSelector , useDispatch} from "react-redux";
import {selectCurrentUser} from "../redux/user/user.selector.js";
import CartIcon from "./CartIcon.jsx";
import {signOutAsync} from "../redux/user/user.action.js";




const Container = styled.div`
height: 70px;
width: 100%;
display: flex;
justify-content: space-between;
margin-bottom: 25px;
@media screen and (max-width:800px)
{
    height:60px;
    padding:10px;
    margin-bottom:20px;
}
`;

const LogoContainer = styled.div`
height: 100%;
width: 70px;
padding: 25px;
@media screen and (max-width:800px)
{
    width:20px;
    padding:0px;
}
`;

const Options = styled.div`
width: 50%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-end;
padding:0px 10px;
text-transform:uppercase;
cursor:pointer;

@media screen and (max-width:800px)
{
    width:80%;
}
`;


const Option = styled(Link)`
padding: 10px 15px;
font-size:1.4em;
text-decoration:none;
color:black;
`;


const Header = (props) => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch(); 

    const handleSignOut = (e) => {
       dispatch(signOutAsync());
    }

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
                {currentUser?
                <Option onClick = {handleSignOut} to={"/"}>Sign out</Option> :
                <Option to={"/signin"}>Sign in</Option>
            }
             <CartIcon />
            </Options>
            
        </Container>
    )
}

export default Header; 