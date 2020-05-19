import React from "react"; 
import {useDispatch} from "react-redux"; 
import {addItemToCart} from "../../redux/cart/cart.action.js"; 
import {Card} from "react-bootstrap";
import {AddToCartButton,CustomCard} from "./style.jsx";

const  CollectionItem = (props) => {
const {item, selected} = props; 
const dispatch = useDispatch(); 

const handleClick = e => {
   dispatch(addItemToCart(item));
};

return(

        <CustomCard style={{ width: '18rem', height:"440px"}} className={`menu-item ${selected ? 'active' : ''}`}>
        <Card.Img variant="top" src={item.primaryImageUrl} style={{height:"300px"}}/>
        <Card.Body className="text-center">
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
            ${item.price}
            </Card.Text>
            <AddToCartButton isInverted onClick = {handleClick}>Add to Cart</AddToCartButton>
        </Card.Body>
        </CustomCard>
);
}


export default CollectionItem; 