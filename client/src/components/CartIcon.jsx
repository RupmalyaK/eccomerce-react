import React from "react"; 
import styled from "styled-components";
import {ReactComponent as ShoppingIcon} from "../images/shopping-bag.svg"; 
import CartDropdown from "./CartDropdown.jsx";
import {useSelector, useDispatch} from "react-redux";  
import {showCartDropdown, hideCartDropdown} from "../redux/cart/cart.action.js";
import {selectIsDropdownHidden, selectCartItemsTotalQuantity} from "../redux/cart/cart.selector";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";



const Container = styled.div`
    
    margin-left:auto;
    margin-right:25px;
    display:inline-flex;
    &:after{
        content: "${props => props.itemCount}";
        display:flex;
        position:relative;
        width:20px;
        height:20px;
        top:0px;
        justify-content:center;
        opacity:0.8;
    };
`;

const IconContainer = styled(FontAwesomeIcon)`
    cursor:pointer;
    width:120px;
    height:50px;
}
`;



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


/**<Icon onClick = {handleClick}/>
    <ItemCount>{itemsTotalQuantity}</ItemCount>
    {!isDropdownHidden ? <CartDropdown/> : <></>} */