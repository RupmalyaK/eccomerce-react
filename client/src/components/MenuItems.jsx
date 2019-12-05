import React , {useState} from "react"; 
import styled from "styled-components"; 
import MenuItem from "./MenuItem.jsx"; 
import {useSelector} from "react-redux"; 
import {selectItems} from "../redux/directory/directory.selector.js"


const Container = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;    
`;

const MenuItems = (props) => {

    const itemsArr = useSelector(selectItems); 


    const displayMenuItems = () => {
        const tempArr = []; 

        itemsArr.map( (item , index) => {
          tempArr.push(
                <MenuItem key= {index} title= {item.title} imageUrl={item.imageUrl} routeUrl={item.routeUrl} size={item.size} />
          );  
        } );         

         return tempArr;
    } 

    return (
        <Container>
            {displayMenuItems()}
        </Container>
    ); 
}



export default MenuItems; 