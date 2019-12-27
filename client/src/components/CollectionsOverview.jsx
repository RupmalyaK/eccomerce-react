import React from "react"; 
import styled from "styled-components"; 
import {useSelector} from "react-redux"; 
import CollectionPreview from "./CollectionPreview.jsx"; 
import {selectCollectionFilteredCollections} from "../redux/shop/shop.selector.js";
import {Row,Col} from "react-bootstrap";

const Container = styled.div`
border:1px solid black;
margin-left:10px;
padding:40px 20px 40px 20px;
margin-top:55px;
position:relative;
.border-text{
    display:block;
    position:absolute;
    top:-1.2%;
    background:inherit;
    padding:0px 90px;
    background:#ffff;
    left:20%;
}

`;

const CollectionOverview = (props) => {
    const filteredCollection = useSelector(selectCollectionFilteredCollections); 

    const displayFilteredCollectionsPreview = () => {
        const collectionArr = [];
        for (const key in filteredCollection)
            {
                if (filteredCollection.hasOwnProperty(key))
                    { 
                       collectionArr.push(
                        <Col lg="12" key = {filteredCollection[key].id}> 
                        <CollectionPreview  section = {filteredCollection[key]} />
                        </Col>  
                       );
                    }
            }
            return collectionArr; 
    }
return(
<Container>
    <Row>
    {displayFilteredCollectionsPreview()}
    </Row>
    <h1 className="border-text">Featured Items</h1>
</Container>
);
}



export default CollectionOverview; 