import React from "react"; 
import styled from "styled-components"; 
import {useSelector} from "react-redux"; 
import CollectionPreview from "./CollectionPreview.jsx"; 
import {selectCollectionFilteredCollections} from "../redux/shop/shop.selector.js";
import {Row,Col} from "react-bootstrap";

const Container = styled.div`
border:1px solid black;
margin-left:10px;

margin-top:55px;
position:relative;

.border-text{
    width:auto;
    top:-30px;
    font-size:2rem;
    height:40px;
    background:#ffff;
}

.sm-text{
    width:200px;
    margin: 20px 0px;
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
<Container className="pb-sm-5 pt-sm-5">
    <h1 className="d-none d-sm-block border-text text-nowrap ml-sm-5 px-sm-5 position-absolute">Featured Items</h1>
    <h2 className="sm-text d-sm-none d-xs-block mx-auto text-nowrap">Featured Items</h2>
    <Row>
    {displayFilteredCollectionsPreview()}
    </Row>
</Container>
);
}



export default CollectionOverview; 