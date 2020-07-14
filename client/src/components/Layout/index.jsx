import React, {useState, useEffect} from "react"; 
import styled from "styled-components";
import {useSelector,useDispatch} from "react-redux";
import {selectIsBlurOn,selectIsSignOutBoxOpen} from "../../redux/system/system.selector";
import {setSignOutBoxClose,setBlurOff,setPageYTop} from "../../redux/system/system.action.js";
import {signOutAsync} from "../../redux/user/user.action.js";
import ConfirmationBox from "../ConfirmationPopup";
import Header from "../Header";
import FormInput from "../FormInput";

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
    z-index:50;
    display:${props => props.isBlurOn?"block":"none"}
    opacity:90%;
}
`;

const Footer = styled.div`
height:450px;
background:${props => props.theme.secondaryBackgroundColor};
padding:30px 0px;

`;

const SocialNetworkButton = styled.div`
height:35px;
width:35px;
background:pink;
margin-left:5px;
`;

const NewsLetterForm = styled.div`
display:flex;
align-items:center;
.input{
    padding:5px;
    width:500px;
    border-radius:0px;
    font-size:0.9rem;
    background:${props => props.theme.transparentBackgroundColor};
    &:focus {
      
        outline:1px solid #4D90FE;
    }
}
.news-letter-signup-bottom
    {
        position:relative;
        cursor:pointer;
        right:75px;
        color:${props => props.theme.alternateTextColor};

        &:hover{
            color:${props => props.theme.primaryButtonColor};
        }
    }
`;


const Layout = (props) => {
    const isBlurOn = useSelector(selectIsBlurOn);
    const isSignOutBoxOpen = useSelector(selectIsSignOutBoxOpen);
    const dispatch = useDispatch();
    const [newsLetterInput, setNewsLetterInput] = useState("");    
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
        <Header/>
       { isSignOutBoxOpen ? <ConfirmationBox text="Do you want to sign out?" confirmHandler={signOutConfirmHandler} cancelHandler={signOutCancelHandler} /> : "" }
        {props.children}
        <Footer>
            <div className="upper-footer d-flex justify-content-around">
                <div className="left-side d-flex flex-start">
                    <SocialNetworkButton />
                    <SocialNetworkButton />
                    <SocialNetworkButton />
                    <SocialNetworkButton />
                    <SocialNetworkButton />
                </div>
                <div className="right-side">
                    <NewsLetterForm>
                        <FormInput name="text" type="text" value={newsLetterInput} placeholder="Newsletter" setState={setNewsLetterInput} required className="input"/> 
                        <span className="news-letter-signup-bottom">Sign up ></span>
                    </NewsLetterForm>   
                
                </div>
                
            </div>
        </Footer>
    </Container>);
    
}


export default Layout; 