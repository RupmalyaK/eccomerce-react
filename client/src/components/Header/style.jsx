import React from "react";
import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
position:fixed;
top:0;
padding-bottom:5px;
z-index:10;
background:${props => props.theme.transparentBackgroundColor};
padding-top:20px;
//background:${(props) => props.isPageYTop ? "rgba(255,255,255,0.8)" : "rgba(255,255,255,1)"};
width:100%;
`;