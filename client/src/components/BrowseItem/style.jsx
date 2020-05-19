import React from "react";
import styled from "styled-components";
import Button from "../CustomButton";

export const Container = styled.div`
border-bottom:0.2px solid black;
margin-bottom:25px;
padding-bottom:10px;

.img-thumbnail {
    width:200px;
    height:250px;
}

.content{
    float:right;
    width:80%;
    height:100%;
    }
 
    .name {
        text-align:center;
    }

    .featured{
        float:right;
        margin-right:20px;
    }

    .price {
        position:absolute;
        bottom:10px;
        margin-left:50px;
    }
.
`;

export const AddToCartButton = styled(Button)`
width: 200px;
height:50px;
opacity: 0.7;
position: absolute;
bottom:20px;
right:35px;
font-size:0.6rem;
font-weight:700;
min-width:unset;
min-width:unset;
padding:0px 10px;
`;
