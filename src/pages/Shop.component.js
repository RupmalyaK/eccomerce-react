import React, {useState , useEffect} from "react"; 
import styled from "styled-components"; 
import Layout from "../components/Layout.component.js";
import SHOP_DATA from "../data/shop-data";
import CollectionPreview from "../components/CollectionPreview.component.js";

const Container = styled.div``;

const Shop = (props) => {

    const [collection, setCollection] = useState([]);
    //So that React won't have to filter the array every render of this component
    const [filteredCollection , setFilteredCollection] = useState([]); 
    let noOfItemsToPreview = 5;
    
    useEffect( () => {
        setCollection (SHOP_DATA);
        const newItemsTypeArr = [];
        const tempCollection = SHOP_DATA;  
           tempCollection.map((itemType, index) => {
            itemType.items = itemType.items.slice(0 , noOfItemsToPreview - 1); 
            newItemsTypeArr.push(itemType);
            if (index === tempCollection.length-1)
                {
                    setFilteredCollection(newItemsTypeArr);
                    return;
                }
        })
    },[]);

const displayCollectionsPreview = () => {
    return filteredCollection.map((section => { 
        return (
       <CollectionPreview key = {section.id} section = {section} />
        );
    }))
}    

return(
        <Container>
            {displayCollectionsPreview()}
        </Container>        
);
}



export default Shop; 