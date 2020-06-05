import React from "react";
import styled from "styled-components";
import Dropdown from "../ProfileDropdown";
import {useSelector,useDispatch} from "react-redux";
import {selectIsProfileMenuOpen} from "../../redux/system/system.selector.js";
import {setProfileMenuOpen, setProfileMenuClose} from "../../redux/system/system.action.js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
    position:relative;
    margin-right:10px;
    border-radius:100px;
    width:35px;
    height:35px;
    background:yellow;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    background:${props => props.theme.transparentBackgroundColor};

    &:hover{
        color:${props => props.theme.primaryButtonColor};
    }
`;

const ProfileIcon = (props) => {
    const {src,alt} = props;
    const isProfileMenuOpen = useSelector(selectIsProfileMenuOpen);
    const dispatch = useDispatch();

    const handleOnMouseEnter = e => {
        dispatch(setProfileMenuOpen());
    }

    const handleOnMouseLeave = e => {
        dispatch(setProfileMenuClose());
    }

    return (
    <Container onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        <FontAwesomeIcon icon={faUser} className="icon"/>
        { isProfileMenuOpen ? <Dropdown/> : <></>}
    </Container>
    );
}


export default ProfileIcon;


/**
<div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
<Icon alt={alt} src={src}/>
{ isProfileMenuOpen ? <Dropdown/> : <></>}
</div> */