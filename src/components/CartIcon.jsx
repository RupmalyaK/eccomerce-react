import React from "react"; 
import styled from "styled-components";
import {ReactComponent as ShoppingIcon} from "../images/shopping-bag.svg"; 
import CartDropdown from "./CartDropdown.jsx";
import {useSelector, useDispatch} from "react-redux";  
import {toggleCartDropdown} from "../redux/cart/cart.action.js";
import {selectCartItemsTotalQuantity} from "../redux/cart/cart.selector";


const Container = styled.div`
width: 55px;
height: 55px;
position: relative;
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
`;

const Icon = styled(ShoppingIcon)`
width: 55px;
height: 55px;
`;

const ItemCount = styled.span`
position: absolute;
font-size: 20x;
font-weight: bold;
bottom: 12px;
`;

const CartIcon = (props) => {
const isDropdownHidden = useSelector(state => state.cart.isDropdownHidden);
const itemsTotalQuantity = useSelector(selectCartItemsTotalQuantity);
const dispatch = useDispatch();


const handleClick = e => {
 dispatch(toggleCartDropdown());
}

return(
<Container onClick = {handleClick}>
    <Icon />
    <ItemCount>{itemsTotalQuantity}</ItemCount>
    {!isDropdownHidden ? <CartDropdown/> : <></>}
</Container>
);
}



export default CartIcon; 
