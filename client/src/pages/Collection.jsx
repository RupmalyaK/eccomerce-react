import React from "react"; 
import styled from "styled-components"; 
import {useSelector} from "react-redux"; 
import CollectionItem from "../components/CollectionItem.jsx"; 
import {selectCollection} from "../redux/shop/shop.selector.js";
import {useParams} from "react-router-dom";
import {Row, Col , Container as BContainer} from "react-bootstrap"; 

//margin:100px 20px 0px 20px;
const Container = styled.div`
margin-top:100px;
background:orange;
padding:5px 10px;

`;

const Title = styled.span`
font-size: 38px;
margin: 0 auto 30px;
`;

const Items = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 10px;
`;



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
            <Row  style={{background:"yellow"}}>
            {displayCollection()}
            </Row>
           
</Container>
);
}

/**<BContainer style={{marginTop:"100px"}}>
        <Title style={{display:"block", textAlign:"center"}}> 
            {categoryid.toUpperCase()}
        </Title>
        <Items>
            <Row>
            {displayCollection()}
            </Row>
           
        </Items>
</BContainer> */


export default Collection; 


