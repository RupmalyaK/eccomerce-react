import React from "react";
import styled from "styled-components";



const Container = styled.div`
padding:0px 20%;
display:inline-flex;
align-items:center;
justify-content:center;
height:15%;
margin-bottom:2px;
cursor:pointer;
`;

const Item = styled.h6`
    flex:1;
    .text{
        color:${props => props.theme.alternateTextColor};
        font-size:0.8rem;
    }
`;

const Icon = styled.img`
    height:20px;
    width:20px;
`;

const ProfileDropdownItem = ({children, src , alt , ...extraProps}) => {
   
    return (
        <Container {...extraProps} >
            <Item><span className="text">{children}</span></Item> <Icon src={src} alt={alt}/>
        </Container>
    );
}


export default ProfileDropdownItem;