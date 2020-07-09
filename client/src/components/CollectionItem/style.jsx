import React from "react";
import styled from "styled-components";
import {Card} from "react-bootstrap";
import Button from "../CustomButton";
import {motion} from "framer-motion";




export const CustomCard = styled(Card)`
overflow:hidden;
//background:${props => props.theme.transparentBackgroundColor} !important;
height:400px !important;
&:hover  {

    .add-to-cart{
      //  display:flex;
       // border:none;
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

        .add-to-cart{
            display:flex;
            border:none;
            left:20%;
            padding:2px;
        }
      
    }
}
.add-to-cart{

}
`;

export const AddToCartButton = styled(motion.div)`
background:${props => props.theme.primaryBackgroundColor};
opacity: 0.7;
position: absolute;
bottom:40%;
cursor:pointer;
right:10px;
:hover{
    color:${props => props.theme.primaryButtonColor};
}
color:${props => props.theme.secondaryButtonColor};
padding:5px;
@media screen and (max-width:800px)
{
    display:block;
}



`;

export const PreviewButton = styled(Button)`
width: 50%;
//opacity: 0.7;
position: absolute;
//height:50px;
width:150px;
bottom:0%;
//left:20%;
//display:none;
font-size:0.6rem;
letter-spacing:2px;
height:40px;

@media screen and (max-width:800px)
{
    display:block;
    opacity:0.9;
    min-width:unset;
    padding:0px 10px;
    
    font-weight:700;
}
`;