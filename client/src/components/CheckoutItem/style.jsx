import React from "react";
import styled from "styled-components"; 

const nameQuantityPriceStyle = {
    "width":"23%",
}

export const Container = styled.div`
width: 100%;
display: flex;
min-height: 100px;
border-bottom: 1px solid darkgrey;
padding: 15px 0;
font-size: 20px;
align-items: center;

`;

export const ImageContainer = styled.div`
width: 23%;
padding-right: 99px;
`;

export const Image = styled.img`
width: 100%;
height: 100%;
`;

export const Name = styled.span`
${nameQuantityPriceStyle}
text-align:center;
`;

export const Size = styled.span`
text-align:center;
`;


export const Quantity = styled.span`
${nameQuantityPriceStyle};
margin-left:10%;
display:flex;
`;

export const Value = styled.span`
margin:0 10px;
padding-top:2px;
`;

export const Price = styled.span`
${nameQuantityPriceStyle};
text-align:center;
`;

export const RemoveButton = styled.span`
margin-left:12%;
text-align:center;
cursor: pointer;

`;

export const Arrow = styled.div`
cursor:pointer;
`