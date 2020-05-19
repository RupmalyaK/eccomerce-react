import React from "react";
import styled , {css} from "styled-components"; 


export const invertedStyle = css`
background-color: white;
color: black;
border: 1px solid black;

&:hover: {
  background-color: black;
  color: white;
  border: none;
}
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

&:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}
${props => (props.isGoogleSignIn ? googleSignInButtonStyle : null) };
${props => (props.isInverted ? invertedStyle : null)};
`;




