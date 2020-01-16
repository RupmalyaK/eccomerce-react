import React from "react"; 
import styled from "styled-components"; 
import {useHistory , useRouteMatch} from "react-router-dom"; 


const BackgroundImageContainer = styled.div`
background-image: url(${(props => props.imageUrl)});
position:absolute;
background-position:center;
background-size:cover;
z-index:-1;
width:100%;
height:100%;
`;

const Content = styled.div`
height: 90px;
padding: 0 25px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border: 1px solid black;
background:white
opacity:70%;
`;


const MenuItemContainer = styled.div`
position:relative;
min-width: 30%;
height: ${(props) => (props.size === "large" ? "400px" : "240px")} ; 
flex: 1 1 auto;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 7.5px 15px; 
overflow:hidden;
&:first-child {
    margin-right: 7.5px;
  }

  &:last-child {
    margin-left: 7.5px;
  } 

  &:hover {
    cursor:pointer;
    ${BackgroundImageContainer}
      {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

    ${Content}{
        opacity: 1;
    }
    }
    @media screen and (max-width:800px)
    {
        height:200px;
    }
  }
`;



const Title = styled.h1`
font-weight: bold;
margin-bottom: 6px;
font-size: 22px;
color: #4a4a4a;
`;

const Subtitle = styled.p`
font-weight: lighter;
font-size: 16px;
`;

const MenuItem = (props) => {
    const {title , imageUrl , routeUrl, size } = props;
    const history = useHistory(); 
    const match = useRouteMatch();
  
    const handleClick = (e) => {

      history.push(match.url + "shop/" + routeUrl);
    }
    
    return (
       <>
          <MenuItemContainer imageUrl = {imageUrl} size= {size} onClick = {handleClick}>
                <BackgroundImageContainer imageUrl = {imageUrl} />  
                <Content>
                    <Title>{title}</Title>
                    <Subtitle>Shop Now</Subtitle>
                </Content>
          </MenuItemContainer>
       </>

    );
  }     



export default MenuItem; 

