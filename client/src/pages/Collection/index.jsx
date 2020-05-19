import React from "react"; 
import {useSelector} from "react-redux"; 
import {Row, Col , Container as BContainer} from "react-bootstrap"; 
import {selectCollection} from "../../redux/shop/shop.selector.js";
import {useParams} from "react-router-dom";
import CollectionItem from "../../components/CollectionItem"; 
import {Container,Title,Items} from "./style.jsx";

const Collection = (props) => {
const {categoryid} = useParams();
const collection = useSelector(selectCollection(categoryid));

let items = [];
if (collection)
  {
    items = collection.items; 
  }


const displayCollection = () => {
    const itemsArr = items.map (item => 
        <Col style={{marginBottom:"10px"}} xl="2" lg="4"  sm="6" xs="12"  key= {item._id}>
            <CollectionItem  item={item}/> 
        </Col>);
     
     return itemsArr; 
}
return(
<Container as={Container} fluid={true}>
        <Title style={{display:"block", textAlign:"center"}}> 
            {categoryid.toUpperCase()}
        </Title>
            <Row>
            {displayCollection()}
            </Row>
           
</Container>
);
}

export default Collection; 


