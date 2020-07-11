import React from "react"; 
import {useDispatch} from "react-redux"; 
import {addItemToCart} from "../../redux/cart/cart.action.js"; 
import {setCurrentItemAsync} from "../../redux/currentItem/currentItem.actions.js";
import {Card} from "react-bootstrap";
import {CustomCard,AddToCartButton,PreviewButton} from "./style.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {useAnimation} from "framer-motion";
import {useHistory} from "react-router-dom";
import RatingStar from "../RatingStar";
import Button from "../CustomButton";

const  CollectionItem = (props) => {

const {item, selected,type} = props; 
const dispatch = useDispatch(); 
const history = useHistory(); 
const addToCartAnmControl = useAnimation();

const INITIAL_CARD_ANM = {
    x:40
};
const handlerAddToCart = e => {
   dispatch(addItemToCart(item));
};

const handlerMouseEnterCard = e => {
    addToCartAnmControl.start({x:0});
} 

const handlerMouseLeaveCard = e => {
    addToCartAnmControl.start(INITIAL_CARD_ANM);
}

const handlerGoToPreviewPage = e => {
    e.preventDefault(); 
    dispatch(setCurrentItemAsync(item,type)); 
    history.push({  pathname:`/browse/item/${type.toLowerCase()}/${item._id}` });
}

return(

        <CustomCard style={{ width: "200px", height:"350px"}} className={`menu-item ${selected ? 'active' : ''}`} onMouseEnter={handlerMouseEnterCard} onMouseLeave={handlerMouseLeaveCard}>
            <Card.Img variant="top" src={item.primaryImageUrl} style={{height:"65%"}}/>
            <RatingStar rating={item.averageRating} starSize={"15px"} spacing={"1px"}/> 
            <Card.Body className="text-center mx-2" style={{height:"30%"}} className="align-items-center justify-content-center d-flex flex-column">
                <AddToCartButton onClick={handlerAddToCart} initial={INITIAL_CARD_ANM} animate={addToCartAnmControl}>
                        <FontAwesomeIcon className="add-to-cart" icon={faCartPlus} isInverted  />
                </AddToCartButton>
                  
                <Card.Title>{item.name}</Card.Title>
                <Card.Text  className="mb-5"> 
                    ${item.price}
                </Card.Text>
                
               <PreviewButton onClick={handlerGoToPreviewPage}>Preview</PreviewButton>
            </Card.Body>
        </CustomCard>
);
}


export default CollectionItem; 