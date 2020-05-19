import React from "react"; 
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
    margin-left:auto;
    margin-right:25px;
    display:inline-flex;
    &:after{
        content: "${props => props.itemCount}";
        display:flex;
        position:relative;
        width:20px;
        height:20px;
        top:0px;
        justify-content:center;
        opacity:0.8;
    };
`;

export const IconContainer = styled(FontAwesomeIcon)`
    cursor:pointer;
    width:120px;
    height:50px;
}
`;