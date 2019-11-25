import React from "react"; 
import styled from "styled-components"; 
import Button from "./Button.jsx"; 

const Container = styled.div`
position: absolute;
width: 300px;
height: 420px;
display: flex;
flex-direction: column;
padding: 20px;
border: 1px solid black;
background-color: white;
top: 70px;
right: 0px;
z-index: 5;
  `;


const CartItems = styled.div`
height: 240px;
display: flex;
flex-direction: column;
overflow: hidden;
`;

const CheckOutButton = styled(Button)`
margin-top: auto;
font-size:11px;
`


const CartDropdown = (props) => {

return(
<Container>
    <CartItems>

    </CartItems>

    <CheckOutButton>Go to Checkout</CheckOutButton>
</Container>
);
}



export default CartDropdown; 



