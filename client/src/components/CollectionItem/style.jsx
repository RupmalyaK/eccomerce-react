import React from "react";
import styled from "styled-components";
import {Card} from "react-bootstrap";
import Button from "../CustomButton";

export const AddToCartButton = styled(Button)`
width: 50%;
opacity: 0.7;
position: absolute;
bottom:35%;
left:20%;

display:none;
@media screen and (max-width:800px)
{
    display:block;
    opacity:0.9;
    min-width:unset;
    padding:0px 10px;
    font-size:0.6rem;
    font-weight:700;
}
`;

const Image = styled.div`
width: 100%;
height: 95%;
background-image:url(${(props) => props.imageUrl});
background-size: cover;
background-position: center;
margin-bottom: 5px;
`;

export const CustomCard = styled(Card)`
&:hover  {

    ${AddToCartButton}{
        display:flex;
        border:none;
    }
    ${Image}
        {
            opacity:0.85;
        }  
}
margin:0 auto;
-webkit-user-select: none;
-khtml-user-select: none;
-moz-user-select: none;
-o-user-select: none;
user-select: none;
@media screen and (max-width:800px)
{
    width:40vw;
    &:hover  {

        ${AddToCartButton}{
            display:flex;
            border:none;
        }
        ${Image}
            {
                opacity:unset;
            }  
    }
}
`;
