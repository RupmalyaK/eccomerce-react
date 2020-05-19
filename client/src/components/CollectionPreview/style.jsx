import React from "react"; 
import styled from "styled-components";

export const Container = styled.div`  
margin-bottom:10px;
box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
transition: all 0.3s cubic-bezier(.25,.8,.25,1);
&:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}    
}
.arrow{
padding:-20px;
}
`;

export const Title = styled.h1`
font-size: 28px;
margin-bottom: 25px;
text-align:center;

`;
