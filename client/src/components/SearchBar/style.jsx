import React from "react";
import styled from "styled-components";


export const SuggestionBox = styled.div`
background:white;
width:450px;
height:240px;
bottom:-230px;
position:absolute;
overflow:auto;
display: ${props => props.isHide ? "none" : "block"};
`;

export const Suggestion = styled.div
`
border-bottom:1px solid black;
padding:10px 10px 5px 10px;
`; 