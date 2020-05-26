import React, {useEffect} from "react"; 
import styled from "styled-components";
import {useSelector,useDispatch} from "react-redux";
import {selectIsBlurOn,selectIsSignOutBoxOpen} from "../../redux/system/system.selector";
import {setSignOutBoxClose,setBlurOff,setPageYTop} from "../../redux/system/system.action.js";
import {signOutAsync} from "../../redux/user/user.action.js";
import ConfirmationBox from "../ConfirmationPopup";


const Container = styled.div`
height:${props => props.isBlurOn?"100vh":"auto"};
width:${props => props.isBlurOn?"100vw":"auto"};
overflow:${props => props.isBlurOn?"hidden":"auto"};
&:after{
    content:"222";
    position:fixed;
    top:0;
    left:0;
    height:100%;
    background:black;
    width:100vw;
    z-index:15;
    display:${props => props.isBlurOn?"block":"none"}
    opacity:90%;
}
`;

const Layout = (props) => {
    const isBlurOn = useSelector(selectIsBlurOn);
    const isSignOutBoxOpen = useSelector(selectIsSignOutBoxOpen);
    const dispatch = useDispatch();
        
    const scrollhandler = (e) => {
        dispatch(setPageYTop(window.pageYOffset))
       }
    
    useEffect(() => {
        window.addEventListener("scroll", scrollhandler);

        const unmountHandler = () => {
            window.removeEventListener("scroll",scrollhandler);
        }
        return unmountHandler;
    },[]);

    const signOutConfirmHandler = e => {
        dispatch(setSignOutBoxClose());
        dispatch(signOutAsync());
    };
    
    const signOutCancelHandler = e => {
        dispatch(setSignOutBoxClose());
    }; 
    

    return(
    <Container isBlurOn={isBlurOn}>
       { isSignOutBoxOpen ? <ConfirmationBox text="Do you want to sign out?" confirmHandler={signOutConfirmHandler} cancelHandler={signOutCancelHandler} /> : "" }
        {props.children}
    </Container>);
}


export default Layout; 