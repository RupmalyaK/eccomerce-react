import React from "react"; 
import styled from "styled-components"; 

export const Container = styled.div`
margin-top:100px;
padding:5px 10px;

`;

export const Title = styled.span`
font-size: 38px;
margin: 0 auto 30px;
`;

export const Items = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 10px;
`;