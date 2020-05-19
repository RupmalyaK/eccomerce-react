import React from "react"; 
import {useSelector, useDispatch} from "react-redux";  
import {showCartDropdown, hideCartDropdown} from "../../redux/cart/cart.action.js";
import {selectIsDropdownHidden, selectCartItemsTotalQuantity} from "../../redux/cart/cart.selector";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
import CartDropdown from "../CartDropdown";
import {Container,IconContainer} from "./style.jsx";

const CartIcon = (props) => {
const isDropdownHidden = useSelector(selectIsDropdownHidden);
const itemsTotalQuantity = useSelector(selectCartItemsTotalQuantity);
const dispatch = useDispatch();


const handleOnMouseOver = e => {
 dispatch(showCartDropdown());
}

const handleMouseOut = e => {
    dispatch(hideCartDropdown());    
}

return(

<Container itemCount= {itemsTotalQuantity} onMouseEnter = {handleOnMouseOver} onMouseLeave = {handleMouseOut} {...props}>
    <IconContainer icon={faShoppingCart}  />
    {!isDropdownHidden ? <CartDropdown/> : <></>} 
</Container>
);
}



export default CartIcon; 


