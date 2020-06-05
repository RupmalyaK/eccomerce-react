import React from "react"; 
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
position:relative;
width:140px;
height:40px;
background:yellow;
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
font-size:.7rem;
cursour:pointer;
background:${props => props.theme.transparentBackgroundColor};
padding:1px;

&:hover{
    background:${props => props.theme.primaryButtonColor};
}

.text{
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;         
}
`;
