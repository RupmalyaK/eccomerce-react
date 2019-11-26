import React from "react"; 
import styled from "styled-components"; 
import {useSelector} from "react-redux"; 
import {selectCartItems, selectCartItemsTotalPrice} from "../redux/cart/cart.selector.js"
import CheckoutItem from "../components/CheckoutItem.jsx";

const Container = styled.div`
width: 70%;
min-height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto 0;
`;

const CheckoutHeader = styled.div`
width: 100%;
padding: 10px 0;
display: flex;
justify-content: space-between;
border-bottom: 1px solid darkgrey;
`;

const HeaderBlock = styled.div`
text-transform: capitalize;
width: 23%;

&:last-child {
  width: 8%;
}
`;

const Total = styled.div`
margin-top: 30px;
margin-left: auto;
font-size: 36px;
`;


const Checkout = (props) => {
const cartItems = useSelector(selectCartItems);
const total = useSelector(selectCartItemsTotalPrice);  

const displayCheckoutItems = () => {
    const arr = cartItems.map((item) => {
        return (
            <CheckoutItem key={item.id} item={item}/>
        );
    });
    return arr; 
};

return(
<Container>
    <CheckoutHeader>
        <HeaderBlock>
            <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Remove</span>
        </HeaderBlock>
    </CheckoutHeader>
    {displayCheckoutItems() }
    <Total>TOTAL:${total}</Total>
</Container>
);
}



export default Checkout; 



