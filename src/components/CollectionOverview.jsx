import React from "react"; 
import styled from "styled-components"; 
import {useSelector} from "react-redux"; 
import CollectionPreview from "./CollectionPreview.jsx"; 
import {selectCollectionFilteredCollections} from "../redux/shop/shop.selector.js";

const Container = styled.div``;

const CollectionOverview = (props) => {
    const filteredCollection = useSelector(selectCollectionFilteredCollections); 

    const displayFilteredCollectionsPreview = () => {
        return filteredCollection.map((section => { 
            return ( <CollectionPreview key = {section.id} section = {section} />);
        }))
    }    
return(
<Container>
    {displayFilteredCollectionsPreview()}
</Container>
);
}



export default CollectionOverview; 