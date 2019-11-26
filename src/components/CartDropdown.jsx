import React from "react"; 
import styled from "styled-components"; 
import Button from "./Button.jsx"; 
import CartItem from "./CartItem.jsx"; 
import {useSelector} from "react-redux"; 
import {useHistory} from "react-router-dom";

const Container = styled.div`
position: absolute;
width: 300px;
height: 420px;
display: flex;
flex-direction: column;
padding: 20px 5px;
border: 1px solid black;
background-color: white;
top: 70px;
right: 0px;
z-index: 5;
  `;


const CartItems = styled.div`
height:100%;
width:100%%;
display: flex;
flex-direction: column;
overflow-x:hieen;
overflow-y:auto;
`;

const CheckOutButton = styled(Button)`
margin-top: auto;
font-size:11px;
`

const CartDropdown = (props) => {

const cartItems = useSelector(state => state.cart.items);
const history = useHistory();

const handleClick = e => {
history.push('/checkout');
};

const displayCartitems = () => {
  const itemArr = cartItems.map(item => {
    const {id , name , imageUrl , price , quantity} = item;
    return (
      <CartItem key={id} name={name} imageUrl={imageUrl} price={price} quantity={quantity}/>
    );
  });

  return itemArr; 
}

return(
<Container>
    <CartItems>
      {displayCartitems() }
    </CartItems>
    <CheckOutButton onClick={handleClick}>Go to Checkout</CheckOutButton>
</Container>
);
}



export default CartDropdown; 



