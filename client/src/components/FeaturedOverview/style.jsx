import React from "react";
import styled from "styled-components";

export const Container = styled.div`
border-top:5px solid ${props => props.theme.secondaryButtonColor};

.sm-title-wrapper{
    width:auto;
    top:-40px;
    left:30px;
    display:block;
    font-size:2rem;
    background:white;
    display:flex;
    justify-content:center;
    align-items:center;
    
  
}
.sm-title{
    background:${props => props.theme.secondaryBackgroundColor} !important;
    margin:0 !important;
    padding:10px 20px;
    color:${props => props.theme.secondaryTextColor};
    
    
   
}
h2{
    background:blue !important;
}
margin-left:10px;
margin-top:55px;
position:relative;

.border-text{
    
}

.sm-text{
    width:200px;
    margin: 20px 0px;
}

`;

