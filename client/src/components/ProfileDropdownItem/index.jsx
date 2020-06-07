import React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";




const Container = styled.div`
padding:0px 10%;
display:inline-flex;
align-items:center;
justify-content:space-around;
height:15%;
margin-bottom:5px;
cursor:pointer;
color:${props => props.theme.alternateTextColor};

.fa-icon-wrapper{
   height:25px;
   width:25px;

  };

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



const ProfileDropdownItem = ({children, src , alt , icon, ...extraProps}) => {
    
    return (
        <Container {...extraProps} >
            <Item><span className="text">{children}</span></Item><div className="fa-icon-wrapper"><FontAwesomeIcon icon={icon}/></div>
        </Container>
    );
}


export default ProfileDropdownItem;