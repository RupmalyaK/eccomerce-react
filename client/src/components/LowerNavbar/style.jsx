import styled from "styled-components"; 
import {Container as BContainer} from "react-bootstrap";

export const Container = styled(BContainer)`

.link{
    display:flex;
    color:${props => props.theme.alternateTextColor} !important;
    padding:1px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    &:before{
        content:"";
        width:100%;
        height:10px;
        background:orange;
    }
}
.active{
    border-bottom: 1px inset black;
    background:${props => props.theme.primaryButtonColor};
}

.icon{
    transform: rotateY(0deg) rotate(45deg);
    margin-left:6px;
    align-self:flex-end;
    font-size:12px;
}
;`;


