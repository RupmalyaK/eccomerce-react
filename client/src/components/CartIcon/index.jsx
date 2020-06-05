import React from "react"; 
import {useSelector, useDispatch} from "react-redux";  
import {showCartDropdown, hideCartDropdown} from "../../redux/cart/cart.action.js";
import {selectIsDropdownHidden, selectCartItemsTotalQuantity} from "../../redux/cart/cart.selector";
import CartDropdown from "../CartDropdown";
import {Container,IconContainer} from "./style.jsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

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
    <Container onMouseEnter = {handleOnMouseOver} onMouseLeave = {handleMouseOut} {...props}>
         <div className="text">
            <span>Shopping cart</span>
            <span>{itemsTotalQuantity} item(s)-0.0</span>
         </div>
         <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
         {!isDropdownHidden ? <CartDropdown/> : <></>} 
    </Container>

);
}



export default CartIcon; 

