import React from "react";
import styled from "styled-components";
import Button from "../CustomButton";

export const Container = styled.div`
position: absolute;
width: 300px;
height: 420px;
display: flex;
flex-direction: column;
padding: 20px 5px;
border: 1px solid black;
background-color: white;
top: 50px;
right: 30px;
z-index: 5;
  `;


export const CartItems = styled.div`
height:100%;
width:100%%;
display: flex;
flex-direction: column;
overflow-x:hieen;
overflow-y:auto;
`;

export const CheckOutButton = styled(Button)`
margin-top: auto;
font-size:11px;
`

export const EmptyMessage = styled.span`
font-size:18px;
margin:50px auto;

`;
