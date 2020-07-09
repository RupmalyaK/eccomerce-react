import React from "react"; 
import {useSelector} from "react-redux"; 
import {selectFeaturedItems} from "../../redux/shop/shop.selector.js";
import {Row,Col} from "react-bootstrap";
import CollectionPreview from "../CollectionPreview"; 
import {Container} from "./style.jsx";


const FeaturedOverview = (props) => {
    const featuredCollection = useSelector(selectFeaturedItems); 
    const displayfeaturedCollectionsPreview = () => { 
      const collectionArr = [];
        for (const key in featuredCollection)
            {
                if (featuredCollection.hasOwnProperty(key))
                    { 
                       collectionArr.push(
                     
                        <CollectionPreview  section = {featuredCollection[key]} />
              
                       );
                    }
            }
            return collectionArr; 
    }
return(
<Container className="pb-sm-5 pt-sm-5">
    <div className="d-none d-sm-block   position-absolute sm-title-wrapper">
             <h1 className="sm-title">Featured Items</h1>
    </div>    
    <h2 className="sm-text d-sm-none d-xs-block mx-auto text-nowrap">Featured Items</h2>
    <div className="mr-5 ml-5 pl-5 pr-5 justify-content-end align-items-center d-flex flex-column">
    {displayfeaturedCollectionsPreview()}
    </div>
</Container>
);
}



export default FeaturedOverview; 