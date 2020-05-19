import React from "react";
import {useHistory , useRouteMatch} from "react-router-dom"; 
import {MenuItemContainer,BackgroundImageContainer,Content,Title,Subtitle} from "./style.jsx"




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

