import React from "react";
import styled from "styled-components";

export const Container = styled.div`
display:flex;
flex-direction:column;
position:fixed;
background:red;
top:0;
padding-bottom:5px;
z-index:10;
background:${(props) => props.isPageYTop ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,1)"};
width:100%;
`;