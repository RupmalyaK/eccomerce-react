import React, {useState , useEffect} from "react"; 
import styled from "styled-components"; 
import SHOP_DATA from "../data/shop-data";
import CollectionPreview from "../components/CollectionPreview.jsx";
import {useParams} from "react-router-dom";

const Container = styled.div`
`;

const Shop = (props) => {
    const [collection, setCollection] = useState([]);
    //So that React won't have to filter the array every render of this component
    const [filteredCollection , setFilteredCollection] = useState([]); 
    const [noOfItemsToPreview] = useState(5); 
    const {match} = useParams();
    
    

    useEffect(() => {
        setCollection(SHOP_DATA);
    },[]);

    useEffect( () => {
        const newItemsTypeArr = [];
        const tempCollection = SHOP_DATA.map(item => Object.create(item));  
           tempCollection.map((itemType, index) => {
            itemType.items = itemType.items.slice(0 , noOfItemsToPreview - 1); 
            newItemsTypeArr.push(itemType);
            if (index === tempCollection.length-1)
                {
                    setFilteredCollection(newItemsTypeArr);
                    return;
                    
                }
        })
    },[noOfItemsToPreview]);

    

const displayFilteredCollectionsPreview = () => {
    return filteredCollection.map((section => { 
        return ( <CollectionPreview key = {section.id} section = {section} />);
    }))
}    

const displayCompleteCollectionBySection = () => {
   const temp = collection.filter((section) => {
     
       
        return (section.routeName.toUpperCase() === match.toUpperCase());
   })[0];
 
  return (
       temp ? <CollectionPreview section={temp}/> : null
   );
}

return(
        <Container>
            {!match ? 
            displayFilteredCollectionsPreview()
            : displayCompleteCollectionBySection()
        }
        </Container>        
);
}



export default Shop; 