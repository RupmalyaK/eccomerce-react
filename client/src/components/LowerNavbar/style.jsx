import styled from "styled-components"; 
import {Container as BContainer} from "react-bootstrap";

export const Container = styled(BContainer)`

.navbar{
padding-bottom:0px !important;
}

.nav-toggler{
    color:orange;
    background:${props => props.theme.secondaryBackgroundColor};
    margin-bottom:5px;
}


.link{
    display:flex;
    color:${props => props.theme.alternateTextColor} !important;
    padding:1px;
    flex-direction:row;
    align-items:center;
    justify-content:center;
    height:50px;
    min-width:90px;
    &:hover{
        background:${props => props.theme.primaryButtonColor};
        border-top:2px solid ${props => props.theme.alternateTextColor};
    }
}


.active{
    border-top:2px solid ${props => props.theme.alternateTextColor};
    background:${props => props.theme.primaryButtonColor};
}

.icon{
    transform: rotateY(0deg) rotate(45deg);
    margin-left:6px;
    align-self:flex-end;
    font-size:12px;
}
;`;


