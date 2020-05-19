import React, {useState} from "react"; 
import styled from "styled-components"; 
import {Container as BContainer} from "react-bootstrap";


export const Container = styled.div`
.active{
    border-bottom: 1px inset black;
};`;

export const CustomBContainer = styled(BContainer)`
max-width:1450px;
`;