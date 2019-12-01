import React from "react"; 
import styled from "styled-components"; 
import {useSelector} from "react-redux"; 
import CollectionPreview from "./CollectionPreview.jsx"; 
import {selectCollectionFilteredCollections} from "../redux/shop/shop.selector.js";

const Container = styled.div``;

const CollectionOverview = (props) => {
    const filteredCollection = useSelector(selectCollectionFilteredCollections); 

    console.log(filteredCollection , "::DEBUG");
    const displayFilteredCollectionsPreview = () => {
        const collectionArr = [];
        for (const key in filteredCollection)
            {
                if (filteredCollection.hasOwnProperty(key))
                    { 
                       collectionArr.push(
                        <CollectionPreview key = {filteredCollection[key].id} section = {filteredCollection[key]} />
                       );
                    }
            }
            return collectionArr; 
    }
return(
<Container>
    {displayFilteredCollectionsPreview()}
</Container>
);
}



export default CollectionOverview; 