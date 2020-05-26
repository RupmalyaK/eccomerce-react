import React from "react";
import styled from "styled-components";
import Dropdown from "../ProfileDropdown";
import {useSelector,useDispatch} from "react-redux";
import {selectIsProfileMenuOpen} from "../../redux/system/system.selector.js";
import {setProfileMenuOpen, setProfileMenuClose} from "../../redux/system/system.action.js";

const Icon = styled.img`
    display:flex;
    flex-direction:column;
    height:28px;
    width:28px;
    cursor:pointer;
    position:relative;
    display:inline-block;
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
        <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave}>
        <Icon alt={alt} src={src}/>
        { isProfileMenuOpen ? <Dropdown/> : <></>}
        </div>
    );
}


export default ProfileIcon;