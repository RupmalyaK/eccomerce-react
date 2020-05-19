import React from "react";
import styled from "styled-components";
import CustomButton from "../CustomButton";

export const Container = styled.div`
margin:20px;
.padding-0{
    padding-right:0;
    padding-left:0;
}
.left-col{
    display:flex;
    flex-direction:column;
}
.img-button{
    border:3px solid black;
    margin-bottom:5px;
    cursor:pointer;
    &:hover {
        border-color:white;
        }
    height:90px;
    width:60px;    
}
.secondary-img {
    width:100%;
    height:100%;
}
.primary-img{
    height:700px;
    width:70%;
}

.max-width{
    max-width:550px;
}
.sizes{
    display:flex;
    margin-bottom:20px;
    cursor:pointer;
}

.size{
display:flex;
border-radius:100%;
border:1px solid inherit;
box-shadow:10px #888888;
margin-left:10px;
width:50px;
height:50px;
justify-content:center;
align-items:center;
}
`;



