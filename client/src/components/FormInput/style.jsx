import React from "react"; 
import styled , {css} from "styled-components"; 


const mainColor = "black"; 
const subColor = "grey"; 

const shrinkLabel = css`
top: -14px;
font-size: 12px;
color: mainColor;
`;

export const Container = styled.div`
position: relative;
margin: 45px 0;
`;


export const InputLabel = styled.label`

    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;
    
    ${props => (props.value.length ? shrinkLabel : null)}
`;


export const Input = styled.input`
background: none;
background-color: white;
color: ${subColor};
font-size: 18px;
padding: 10px 10px 10px 5px;
display: block;
width: 100%;
border: none;
border-radius: 0;
border-bottom: 1px solid ${subColor};
margin: 25px 0;

    &:focus {
    outline: none;
    }

    &:focus ~ ${InputLabel} {
        ${shrinkLabel}
      }

      :-webkit-autofill ~ ${InputLabel}  {
        ${shrinkLabel}
      }
`;
