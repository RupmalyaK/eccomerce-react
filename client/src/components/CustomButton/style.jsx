import React from "react";
import styled , {css} from "styled-components"; 


export const invertedStyle = css`
background-color: white;
color: black;
border: 2px solid black;
margin:-2px;
box-sizing:border-box;

`;


export const googleSignInButtonStyle = css`
padding:0px 35px;
background-color:#4285f4;
color:white;
&:hover: {
  background-color:#357ae8;
  border:none;
}
`;


export const Container = styled.button`
min-width: 165px;
width: auto;
height: 50px;
letter-spacing: 0.5px;
line-height: 50px;
padding: 0px 35px 0px 35px;
font-size: 15px;
background-color: black;
color: white;
text-transform: uppercase;
font-family: 'Open Sans Condensed';
font-weight: bolder;
border: none;
cursor: pointer;
display:flex;
justify-content:center;
padding:0px;
border-radius:5px;
&:hover {
  background-color: ${props => props.isInverted ? /*"black"*/  props.theme.primaryButtonColor: "white"};
  color: ${props => props.isInverted ? "white" : "black"};
  border: ${props => props.isInverted ? "1px solid black":"white" };
}
${props => (props.isInverted ? invertedStyle : null)};
${props => (props.isGoogleSignIn ? googleSignInButtonStyle : null) };

`;




