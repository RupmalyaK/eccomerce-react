import React from "react"; 
import styled from "styled-components";
import Item from "../ProfileDropdownItem";
import manAvatarSvg from "../../images/man-avatar.svg";
import womandAvatarSvg from "../../images/woman-avatar.svg";
import {useSelector,useDispatch} from "react-redux";
import {selectCurrentUser} from "../../redux/user/user.selector.js";
import {setSignOutBoxOpen} from "../../redux/system/system.action.js";
import gearSvg from "../../images/gear.svg";
import {NavLink} from "react-router-dom";


const Container = styled.div`
position:absolute;
margin:0px;
width: 180px;
display: flex;
flex-direction: column;
padding: 0px;
border: 1px solid black;
background-color: ${props => props.theme.secondaryBackgroundColor};
z-index: 5;
transform:translateY(75%);
padding:5px;

.welcome-text{
    font-size:0.8rem;
    margin-bottom:10px;
}
  `;


const DropdownItems = styled.div`
height:100%;
width:100%%;
display: flex;
flex-direction: column;
overflow-x:hieen;
overflow-y:auto;
a{
    color:black;
    text-decoration:none;
    &:hover{
        color:black;
        text-decoration:none;
    }
}
`;



const ProfileDropdown = (props) => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch(); 
    const signOutClickHandler = e => {
        dispatch(setSignOutBoxOpen());
    }
    return (
        <Container>
            <span className="welcome-text">Hello, {currentUser.displayName} !</span>
            <DropdownItems>
                <Item as={NavLink} activeStyle={{border:"0px"}} exact to="/profile" src={manAvatarSvg} alt="man-avatar">My profile</Item>
                {currentUser ? <Item  onClick={signOutClickHandler} >Sign out!</Item> : <></>}
            </DropdownItems>
        </Container>
    );
}

export default ProfileDropdown;
