import React, {useState} from "react"; 
import styled from "styled-components"; 
import {Container as BContainer} from "react-bootstrap";


export const Container = styled.div`
.active{
    border-bottom: 1px inset black;
}
.link{
    font-size:1rem;
    font-weight:${props => props.isPageYTop ? "bold" : "normal"};
    
}
;`;

export const CustomBContainer = styled(BContainer)`
max-width:1450px;
`;