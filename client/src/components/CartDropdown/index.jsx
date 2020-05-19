import React from "react"; 
import {useSelector, useDispatch} from "react-redux"; 
import {hideCartDropdown,showCartDropdown} from "../../redux/cart/cart.action.js";
import {selectCartItems } from "../../redux/cart/cart.selector.js";
import {useHistory} from "react-router-dom";
import CartItem from "../CartItem"; 
import {Container,CartItems,CheckOutButton,EmptyMessage} from "./style.jsx";


const CartDropdown = (props) => {

const cartItems = useSelector(selectCartItems);
const dispatch = useDispatch(); 
const history = useHistory();

const handleClick = e => {
history.push("/checkout/false");
dispatch(hideCartDropdown());
};

const handleOnMouseOver = e => {
  dispatch(showCartDropdown());
 }
 
 const handleMouseOut = e => {
  dispatch(hideCartDropdown());    
 }
 

const displayCartitems = () => {
  const itemArr = cartItems.map(item => {
    const {id , name , primaryImageUrl , price , quantity} = item;
    return (
      <CartItem key={id} name={name} imageUrl={primaryImageUrl} price={price} quantity={quantity}/>
    );
  });

  return itemArr; 
}

return(
<Container onMouseOver = {handleOnMouseOver} onMouseLeave={handleMouseOut}>
    <CartItems>
      {cartItems.length ? displayCartitems() :
        <EmptyMessage>Your cart is empty!</EmptyMessage>
      }
    </CartItems>
    <CheckOutButton onClick={handleClick}>Go to Checkout</CheckOutButton>
</Container>
);
}



export default CartDropdown; 



