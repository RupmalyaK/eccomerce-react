import React from "react"; 
import styled from "styled-components";
import Item from "../ProfileDropdownItem";
import {useSelector,useDispatch} from "react-redux";
import {selectCurrentUser} from "../../redux/user/user.selector.js";
import {setSignOutBoxOpen,setProfileMenuClose} from "../../redux/system/system.action.js";
import {useHistory} from "react-router-dom";
import {faUser,faSignOutAlt as faSignOut} from "@fortawesome/free-solid-svg-icons";
import  Dropdown from "../Dropdown";




const Container = styled.div`
margin:0px;
width: 180px;
display: flex;
flex-direction: column;
padding: 0px;
border: 1px solid black;
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
overflow-x:hidden;
overflow-y:auto;
`;



const ProfileDropdown = (props) => {
    const currentUser = useSelector(selectCurrentUser);
    const dispatch = useDispatch(); 
    const history = useHistory();

    const signOutClickHandler = e => {
        dispatch(setSignOutBoxOpen());
    }

    const handlerGoTo = (to,e) => {
        dispatch(setProfileMenuClose());
        e.preventDefault();
        history.push(to);
    }

    return (
        <Dropdown>
            <Container>
                <span className="welcome-text">Hello, {currentUser.displayName} !</span>
                <DropdownItems>
                    <Item activeStyle={{border:"0px"}} icon={faUser} onClick={e => handlerGoTo("/profile",e)}>My profile</Item>
                    {currentUser ? <Item icon={faSignOut} onClick={signOutClickHandler} >Sign out</Item>:<></>}
               </DropdownItems>
            </Container>
        </Dropdown>  
    );
}

export default ProfileDropdown;
