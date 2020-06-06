import styled from "styled-components"; 
import {Container as BContainer} from "react-bootstrap";


export const Container = styled(BContainer)`

color:${props => props.theme.alternateButtonColor};
.icon-wrapper{
    margin-right:10px;
    border-radius:100px;
    width:35px;
    height:35px;
    background:yellow;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    background:${props => props.theme.transparentBackgroundColor};

    &:hover{
        color:${props => props.theme.primaryButtonColor};
    }
}

.icon{
    height:15px;
    width:15px;
}

.shopping-cart-wrapper
    {
        width:140px;
        height:40px;
        background:yellow;
        display:flex;
        flex-direction:row;
        align-items:center;
        justify-content:space-around;
        font-size:.7rem;
        cursour:pointer;
        background:${props => props.theme.transparentBackgroundColor};
        padding:1px;
        .text{
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;         
        }
    }
;`;




/**
 * export const Container = styled.div`
height:120px;
.active{
    border-bottom: 1px inset black;
}
.link{
    font-size:1rem;
    font-weight:${props => props.isPageYTop ? 550 : "normal"};   
}
;`;

export const CustomBContainer = styled(BContainer)`
max-width:1450px;
`;
 */