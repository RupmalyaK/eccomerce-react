import React from "react";
import styled from "styled-components";

export const Container = styled.div`
width: 70%;
display: flex;
flex-direction: column;
align-items: center;
margin: 100px auto 0;
`;

export const CheckoutHeader = styled.div`
width: 100%;
padding: 10px 0;
`;

export const HeaderBlock = styled.div`
text-transform: capitalize;
width: 23%;
text-align:center;
&:last-child {
  width: 8%;
}
`;

export const Total = styled.div`
margin-top: 30px;
margin-left: auto;
font-size: 36px;
`;

export const TestWarning = styled.div`
text-align:center;
margin:40px 0px;
font-size:24px;
color:red;
`;