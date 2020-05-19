import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton";



export const PHDiv = styled.div`
width:100%;
height:100vh;
background-image: url(${props => props.url});
background-repeat:no-repeat;
background-position:center;
background-size:cover;
background-color: ${props => props.color};

`;

export const ShopNowButton = styled(CustomButton)`
margin:0 auto;
padding:0 !important;
`;
