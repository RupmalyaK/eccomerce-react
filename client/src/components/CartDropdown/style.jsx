import React from "react";
import styled from "styled-components";
import Button from "../CustomButton";

export const Container = styled.div`
position: absolute;
width: 300px;
height: 420px;
display: flex;
flex-direction: column;
padding-top: 20px;
border: 1px solid black;
background-color: white;
top: 80%;
z-index: 5;
transform:translateX(-50%);
  `;


export const CartItems = styled.div`
height:100%;
width:100%%;
display: flex;
padding:5px;
flex-direction: column;
overflow-x:hieen;
overflow-y:auto;
`;

export const CheckOutButton = styled(Button)`
margin-top: auto;
font-size:11px;
border-radius:0px;

`

export const EmptyMessage = styled.span`
font-size:18px;
margin:50px auto;

`;
