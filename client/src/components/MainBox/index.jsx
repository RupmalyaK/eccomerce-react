import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMale,faFemale,faHatCowboy,faCaretDown} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";


const Container = styled.div`
position:relative;
bottom:65px;
height:430px;
width:350px;
margin:0px 20px;
z-index:10;
.header{
  width:100%;
  height:15%;
  background:${props => props.theme.transparentBackgroundColor};
  display:flex;
  align-items:center;
  justify-content:flex-start;

  .icon-wrapper{
    display:flex;
    position:relative;
    justify-content:center;
    align-items:center;
    padding:0;
    margin:0;
    width:95px;
    height:100%;
    color:white;
    font-size:3rem;
    font-weight:10;
    background:${props => props.theme.primaryButtonColor};

    .icon{
      width:90x;
      height:90px;
    }

    .down-arrow{
      position:absolute;
      padding:0;
      top:70%;
      font-size:3rem !important;
      display:flex;
      justify-content:flex-start;
      
     color:${props => props.theme.primaryTextColor};
   
    }

  }
 h1{
   color:${props => props.theme.secondaryTextColor};
   margin-left:15px;
   font-weight:normal;
   font-size:2rem;
 }
}



`;


const MainBox = (props) => {
    const {icon,heading,isFirstChild,...extraProps} = props; 
    console.log(isFirstChild)

    return(
        <Container className="main-box man-box" {...extraProps} className="wrapper">
        <div className="header"> 
                <div className="icon-wrapper">
                      <FontAwesomeIcon icon={icon} className="icon"/>
                      <FontAwesomeIcon icon={faCaretDown} className="down-arrow"/>
                </div>
            <h1>
                {heading}  
            </h1>
        </div>
          {props.children};    
    </Container>
  
    ); 
}


export default MainBox; 