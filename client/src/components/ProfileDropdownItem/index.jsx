import React from "react";
import styled from "styled-components";



const Container = styled.div`
padding:0px 20%;
display:inline-flex;
align-items:center;
justify-content:center;
height:15%;
margin-bottom:5px;
cursor:pointer;
color:${props => props.theme.alternateTextColor};
`;

const Item = styled.h6`
    flex:1;
    .text{
       
        font-size:0.8rem;
        &:hover{
          color:${props => props.theme.primaryTextColor};  
        }
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