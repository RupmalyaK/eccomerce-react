import React from "react"; 
import styled from "styled-components"; 
import {useSelector} from "react-redux"; 
import CollectionItem from "../components/CollectionItem.jsx"; 
import {selectCollection} from "../redux/shop/shop.selector.js";
import {useParams} from "react-router-dom";

const Container = styled.div`
display: flex;
flex-direction: column;
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

const Item = styled.div`
margin-bottom: 30px;
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
        <Item  key= {item._id}><CollectionItem item={item}/> </Item>);
     
     return itemsArr; 
}

return(
<Container>
        <Title>
            {categoryid.toUpperCase()}
        </Title>
        <Items>
            
            {displayCollection()}
           
        </Items>
</Container>
);
}



export default Collection; 


