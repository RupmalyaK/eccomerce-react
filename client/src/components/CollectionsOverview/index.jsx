import React from "react"; 
import {useSelector} from "react-redux"; 
import {selectFeaturedItems} from "../../redux/shop/shop.selector.js";
import {Row,Col} from "react-bootstrap";
import CollectionPreview from "../CollectionPreview"; 
import {Container} from "./style.jsx";


const CollectionsOverview = (props) => {
    const featuredCollection = useSelector(selectFeaturedItems); 
    const displayfeaturedCollectionsPreview = () => { 
      const collectionArr = [];
        for (const key in featuredCollection)
            {
                if (featuredCollection.hasOwnProperty(key))
                    { 
                       collectionArr.push(
                        <Col lg="12" key = {featuredCollection[key]._id}> 
                        <CollectionPreview  section = {featuredCollection[key]} />
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
    {displayfeaturedCollectionsPreview()}
    </Row>
</Container>
);
}



export default CollectionsOverview; 