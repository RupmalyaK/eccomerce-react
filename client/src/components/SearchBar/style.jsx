import React from "react";
import styled from "styled-components";
import {Form} from "react-bootstrap";

export const CustomForm = styled(Form)`
color:${props => props.theme.alternateTextColor};
min-width:190px !important;
position:relative;
.text-input{
    background:${props => props.theme.transparentBackgroundColor};
    border:none;
    &:focus{
        background:${props => props.theme.transparentBackgroundColor};    
    }
    width:100%;
}
.icon-wrapper{
    position:relative;
    transform:translateX(-37px);
    height:5px;
    width:10px;
    height:50px;
    cursor:pointer;
    background:inherit !important;
    &:hover{
        color:${props => props.theme.primaryButtonColor};
    }
}

}

`;

export const SuggestionBox = styled.div`
background:${props => props.theme.secondaryBackgroundColor};
width:80%;
height:240px;
bottom:-250px;
transform:translateX(-20px);
position:absolute;
overflow:hidden;
z-index:10;
`;

export const Suggestion = styled.div
`
&:hover{
color:${props => props.theme.primaryTextColor};
}

border-bottom:1px solid black;
padding:10px 10px 5px 10px;
`; 