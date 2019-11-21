import React , {useState} from "react"; 
import styled from "styled-components"; 
import MenuItem from "./MenuItem.jsx"; 


const DirectoryItemsContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
justify-content: space-between;    
`;

const DirectoryItems = (props) => {

    const [itemsArr] = useState([
        {
          "title": "Jackets", 
          "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png", 
          "routeUrl":"jackets", 
        },
        {
            "title": "Hats",    
            "imageUrl": "https://i.ibb.co/cvpntL1/hats.png",
            "routeUrl":"hats", 
        },
        {
            "title": "Sneakers",    
            "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png",
            "routeUrl":"sneakers",
            
        },
        {
            "title": "Womens",    
            "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png",
            "routeUrl":"womens", 
            "size":"large"
           
        },
        {
            "title": "Mens",    
            "imageUrl": "https://i.ibb.co/R70vBrQ/men.png",
            "routeUrl":"mens",
            "size":"large"
        }
    ]); 
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
        <DirectoryItemsContainer>
            {displayMenuItems()}
        </DirectoryItemsContainer>
    );
}



export default DirectoryItems; 